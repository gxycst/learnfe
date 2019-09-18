<template>
    <div>
        <el-upload ref="bigUpload" action="/" drag :limit="1" :on-remove="onRemove" :on-change="onFileChange" :on-exceed="onExceed" :file-list="fileList" :auto-upload="false" :before-upload="beforeUpload">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处或点击选择文件</div>
        </el-upload>
        <div class="big-file-process">上传进度</div>
        <el-progress :percendage="uploadPer"></el-progress>
        <el-button size="small" class="big-file-upload" type="primary" @click="firstUploadNow" v-if="!pause" :disabled="uploading">上传</el-button>
        <el-button size="small" class="big-file-upload" type="primary" @click="continueUpload" v-else>续传</el-button>
        <el-button size="small" class="big-file-pause" type="primary" @click="pauseUpload">暂停</el-button>
    </div>
</template>

<script>
    import SparkMD5 from 'spark-md5';//获取文件md5
    export default {
        name: "bigFileUpload",
        data(){
            return{
                fileList:[],//文件列表
                uploadPer:0,//上传百分比
                pause:false,//是否暂停
                chunkSize:1048576,//分片大小，此处为2MB
                currentChunk:0,
                uploading:false,
                fileMd5:"",//整个文件的md5
                hasUploadFileList:[]
            }
        },
        method:{
            onRemove(file,fileList){//移除文件函数
                this.currentChunk=0;
                this.uploadPer=0;
                this.pause=false;
                this.fileList=fileList;
            },
            onFileChange(file,fileList){
                this.fileList=fileList;
            },
            onExceed(){
                alert('最多选择一个文件');
            },
            beforeUpload(){
                if(this.fileList.length>0){
                    for(let item of this.fileList){
                        if(item.size>2048*1024*1024){
                            alert('最大不超过2G');
                            return;
                        }
                    }
                }
            },
            firstUploadNow(isContinue=0){
                if(!this.fileList.length){
                    alert("请选择文件");
                }else{
                    let file=this.fileList[0].raw;
                    let fileUid=`${file.name}${file.size}${file.namelastModified}`;
                    this.fileMd5=SparkMD5.hash(fileUid);//文件名+文件大小+最后修改时间确定其唯一性
                    let totalChunks=Math.ceil(file.size/this.chunkSize);//总的分片数量
                    let firstUploadData={
                        "chunkSize":this.chunkSize,
                        "fileMd5":this.fileMd5,
                        "fileName":file.name,
                        "fileSize":file.size,
                        "totalChunks":totalChunks
                    };
                    if(isContinue===1){//如果是续传
                        this.readUploadFile();
                    }else{//先创造文件是否在上传列表中
                        let file=this.fileList[0].raw;
                        let fileUid=`${file.name}${file.size}${file.namelastModified}`;
                        let fileMd5=SparkMD5.hash(fileUid);//文件名+文件大小+最后修改时间确定其唯一性
                        let hasInFileList=false;
                        for(let item of this.hasUploadFileList){
                            if(item.fileMd5===fileMd5){
                                hasInFileList=true;
                            }
                        }
                        if(hasInFileList){
                            alert("文件已存在上传列表，请点击续传");
                            this.fileList=[];
                        }else{
                            fileServer.bigFileUCreate(firstUploadData).then(()=>{
                                this.readUploadFile();
                            });
                        }
                    }
                }
            },
            continueUpload(item){
                let $vm=this;
                if(this.fileList.length>0){//如果之前有文件在内存里，就继续内存内的文件进行传输
                    let fileMd5=this.getFileMd5();//已经存在于内存里的
                    if(fileMd5!==item.fileMd5){
                        this.fileList=[];
                        this.$refs['bigUpload'].$el.querySelector('.el-upload__input').click();
                        this.$refs['bigUpload'].$el.querySelector('.el-upload__input').onchange=function () {
                            let fileMd5=$vm.getFileMd5();
                            if(fileMd5!==item.fileMd5){
                                $vm.fileList=[];
                                alert('续传请选择与之前相同的文件');
                            }else{
                                $vm.currentChunk=item.lastChunkNumber;
                                $vm.fileMd5=item.fileMd5;
                                $vm.pause=false;
                                $vm.readUploadFile();
                            }
                            $vm.$refs['bigUpload'].$el.querySelector('.el-upload__input').onchange=null;
                        }
                    }else{
                        this.continueUploadNow();
                    }
                }else{//如果没有文件在传输，则继续选择新文件
                    this.$refs['bigUpload'].$el.querySelector('.el-upload__input').click();
                    this.$refs['bigUpload'].$el.querySelector('.el-upload__input').onchange=function () {
                        let fileMd5=$vm.getFileMd5();
                        if(fileMd5!==item.fileMd5){
                            $vm.fileList=[];
                            alert('续传请选择与之前相同的文件');
                        }else{
                            $vm.currentChunk=item.lastChunkNumber;
                            $vm.fileMd5=item.fileMd5;
                            $vm.pause=false;
                            $vm.readUploadFile();
                        }
                        $vm.$refs['bigUpload'].$el.querySelector('.el-upload__input').onchange=null;
                    }
                }
            },
            continueUploadNow(){
                this.pause=false;
                this.firstUploadNow(1);
            },
            getFileMd5(){
              let file=this.fileList[0].raw;
              let fileUid=`${file.name}${file.size}${file.namelastModified}`;
              return SparkMD5.hash(fileUid);//文件名+文件大小+最后修改时间确定其唯一性
            },
            pauseUpload(){
                if(this.fileList.length){
                    this.pause=true;
                }else{
                    alert("没有正在上传的文件");
                }

            },
            readUploadFile(){
                this.uploading=true;
                let $vm=this;
                let blobSlice=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice;
                let file=this.fileList[0].raw;
                let chunks=Math.ceil(file.size/$vm.chunkSize);//总的分片数量
                let fileReader=new FileReader();//文件阅读器
                fileReader.onload=async function (e) {
                    const formData=new FormData();
                    let tempFile=new File([e.target.result],SparkMD5.ArrayBuffer.hash(e.target.result));//转成真实的文件类型碎片
                    formData.append("file",tempFile);
                    let uploadParams={
                        chunkNumber:$vm.currentChunk+1,//这里加1是因为后台是从1开始
                        chunkSize:e.target.result.byteLength,
                        chunkMd5:SparkMD5.ArrayBuffer.hash(e.target.result),
                        fileMd5:$vm.fileMd5
                    };
                    await $vm.startUpload(uploadParams,formData);
                    $vm.currentChunk++;
                    if(!$vm.pause){
                        if ($vm.currentChunk<chunks){
                            loadNext();//说明没传完继续传
                        } else{
                            alert("文件上传成功");
                        }
                    }else{
                        $vm.uploading=false;
                    }
                };
              function loadNext() {
                  let start=$vm.currentChunk*$vm.chunkSize;
                  let end= ((start +$vm.chunkSize) >=file.size )? file.size:start+$vm.chunkSize;
                  fileReader.readAsArrayBuffer(blobSlice.call(file,start,end));
              }
            },
            startUpload(uploadParams,uploadData){
                return new Promise((resolve,reject)=>{
                    fileServer.bigFileUpload(uploadParams,uploadData).then(({data})=>{
                        this.uploadPer=this.mathRoundToFixed2(data);
                        resolve(data);
                    }).catch((err)=>{
                        reject(err);
                    })
                })
            },
            mathRoundToFixed2(item){
                return Math.round((item.lastChunkNumber/item.totalChunks*100).toFixed(2));
            }
        }
    }
</script>

<style scoped>

</style>