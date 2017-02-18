<template>
  <div id="app">
    <div class="word">This is not only code but also freedom and belief</div>
    <div class="tellSomeOne">
      您好，您可以点击下面旋转图标切换相应技术版本.
      <div  class="mayBeMyServerIsSlowy">
        服务器带宽有限，首次访问可能会稍慢，感谢您的耐心。
      </div>
    </div>
<div class="linkList">
 <div class="linkDetail" v-for="linkItem in linkList">
   <a v-bind:href="linkItem.linkUrl" :style="{background: 'url(' + linkItem.imgUrl + ')'}" target="_blank"></a>
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
        imgUrl:"/static/images/vue.jpg",linkUrl:"http://www.fetjq.cn:8080"
      },
      {
        imgUrl:"/static/images/react.jpg",linkUrl:"http://www.fetjq.cn:3000"
       },
      {
      imgUrl:"/static/images/jQuery.jpg",linkUrl:"http://www.fetjq.cn/jquery"
      },
      {
        imgUrl:"/static/images/angular.jpg",linkUrl:"http://www.fetjq.cn/angular"
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
font-family: "Microsoft Yahei";text-align: center;
margin: 0;height: 100%;overflow: hidden;background: url(/static/images/mainBackground.jpg) no-repeat;background-size:100% 100%; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
}


.word{
width: 100%;
padding-top:80px;font-size: 20px;
text-shadow: 5px 5px 5px #b7ec6d;opacity: .5;
animation: wordMove 5s linear infinite;
}
@keyframes wordMove{
	0%{
text-shadow: 1px 1px 1px black;
font-size: 12px;
	}
	14%{
text-shadow: 1px 1px 1px red;
font-size: 14px;
	}
	28%{
text-shadow: 1px 1px 1px orange;
font-size: 16px;	
	}
	42%{
text-shadow: 1px 1px 1px yellow;
font-size: 18px;	
	}
	56%{
text-shadow: 1px 1px 1px green;
font-size: 16px;
	}
	70%{
text-shadow: 1px 1px 1px chartreuse;
font-size: 14px;
	}				
	84%{
	text-shadow: 1px 1px 1px blue;
font-size: 12px;
	}
	100%{
font-size: 12px;		
text-shadow: 1px 1px 1px purple;
	}
}
.tellSomeOne{
  padding-top:80px;font-size: 14px;text-indent: 300px;
}
.mayBeMyServerIsSlowy{
	color: red;font-size: 14px;
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