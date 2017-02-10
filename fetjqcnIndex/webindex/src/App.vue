<template>
  <div id="app">
    <div class="word">This is not only code but also freedom and belief</div>
    <div class="tellSomeOne">
      您好，您可以点击下面旋转图标切换相应技术版本.
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
      imgUrl:"/static/images/jQuery.jpg",linkUrl:""
      },
      {
        imgUrl:"/static/images/angular.jpg",linkUrl:""
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
body{  font-family: "Microsoft Yahei";text-align: center;
margin: 0;height: 100%;overflow: hidden;background: url(/static/images/mainBackground.jpg) no-repeat;background-size:100% 100%; 
}


.word{
width: 100%;
padding-top:80px;font-size: 20px;
text-shadow: 5px 5px 5px #b7ec6d;opacity: .5;
}
.tellSomeOne{
  padding-top:80px;font-size: 14px;text-indent: 200px;
}

/*链接列表*/
.linkList{
  width: 100%;position: absolute;bottom: 0;
}
.linkDetail{
    width: 25%;height: 100px;float: left;cursor: pointer;
}
.linkDetail a{
   text-align: center;display: block;
  background-repeat: no-repeat;margin: 0 auto;
  width: 100px;height: 100px;border-radius: 100px;border:1px solid black; background-color: white;background-size:60px 60px;background-position: center center;  
  animation-name:Rotation;
  animation:Rotation 4s infinite linear;
}
/*旋转*/
@keyframes Rotation {
    0% {
     transform:rotate(0deg);
    }
    100% {
      transform:rotate(360deg);
    }
  }
</style>
