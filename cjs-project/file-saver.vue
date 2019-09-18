<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "file-saver.vue",
        method:{
            fileSave(){
//以下是arraybuffer类型，这种类型的特点是浏览器点击链接，可直接自动保存文件名和文件类型
                let FileSaver=require("file-saver");
                axios.get('url',{
                    headers:{},
                    responseType:'arraybuffer',
                    params:{}}).then((res)=>{
                    let fileName;
                    let str=res.headers['content-disposition'];
                    str=str.split("filename=")[1];
                    fileName=decodeURIComponent(str.replace(/\"/g",""));
                    let blob=new Blob([response.data],{type:res.headers["content-type"]});
                    FileSaver.saveAs(blob,fileName);
                })

//file-saver保存文档
                let blob=new Blob([ajaxData],{type:'application/vnd.ms-excel;charset=utf-8'});
                FileSaver.saveAs(blob,fileName.xls);//.xls为比较新的excel文件
//文字类型为 {type:"text/plain;chart=utf-8"}
            },
            fileSaveAtob(){//直接存储blob
                /*
let encodedData = window.btoa("Hello, world"); // 编码
let decodedData = window.atob(encodedData);    // 解码
                */
                let data=`dGhpcyBpcyBhIGV4YW1wbGU=`;
                const bData = window.atob(data);//此data为base64解码后的数据

                const u8arr = new Uint8Array(bData.length).map(function (val,index) {
                    return  bData.charCodeAt(i);//提取每个字符的Unicode编码,计算机二进制只认识Unicode
                });
                // let u8arr=new Uint8Array(bData.length);
                // for(let i=0;i< u8arr.length;i++){
                //     console.log('bData.charCodeAt[i] :', bData.charCodeAt(i));
                //     u8arr[i]= bData.charCodeAt(i);
                // }
                console.log('object :', u8arr);
                const blob = new Blob([u8arr]);
                saveAs(blob, 'fuck.txt');
            }
        }
    }
</script>

<style scoped>

</style>