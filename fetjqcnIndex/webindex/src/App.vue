<template>
  <div id="app">
    <div class="triangleWrap">
    <div class="triangle"></div>
    <div class="word">This is not only code but also freedom and belief.</div>
  </div>
<div class="linkList">
 <div class="linkDetail" v-for="linkItem in linkList">
   <a href="" :style="{background: 'url(' + linkItem.imgUrl + ')'}"></a>
 </div>
</div>
  </div>
</template>
<script>
export default{
  data(){
    return {
      linkList:[
      {
        imgUrl:"/static/images/vue.jpg",linkUrl:""
      },
      {
        imgUrl:"/static/images/react.jpg",linkUrl:""
       },
      {
        imgUrl:"/static/images/angular.jpg",linkUrl:""
      },
     {
       imgUrl:"/static/images/laravel.jpg",linkUrl:""
      },
     {
      imgUrl:"/static/images/thinkphp.jpg",linkUrl:""
      }
      ]
    }
  }
}
</script>

<style>
html{
  padding: 0;height: 100%;overflow: hidden;
}
body{
  -webkit-perspective:800px;
margin: 0;height: 100%;overflow: hidden;background: url(/static/images/mainBackground.jpg) no-repeat;background-size:100% 100%; 
}

.triangleWrap{
     width: 500px;height: 150px;background: black;border-radius: 0 10px 10px 10px;position: absolute;left: 900px;top:180px;transform:rotate(-20deg); transition: all 2s;
}
.triangle{
  position: absolute;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-right: 20px solid black;
    border-bottom: 20px solid transparent;
    position: absolute;left:-19px;
}
.triangleWrap:hover{
  width: 600px;
}
.word{
  color:white;font-family: "Microsoft Yahei";text-indent: 20px;padding-top:40px;
}
/*链接列表*/
.linkList{
  width: 100%;position: absolute;bottom: 0;
}
.linkDetail{
    width: 20%;height: 100px;float: left;
}
.linkDetail a{
   text-align: center;display: block;
  background-repeat: no-repeat;margin: 0 auto;
  width: 100px;height: 100px;border-radius: 100px;border:1px solid black; background-color: white;background-size:60px 60px;background-position: center center;  
  animation-name:triangleMove;
  animation:triangleMove 4s infinite linear;
}
/*动画*/
@keyframes triangleMove {
    0% {
     transform:rotate(0deg);
    }
    100% {
      transform:rotate(360deg);
    }
  }
</style>
