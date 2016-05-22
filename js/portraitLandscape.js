(function (){
//根据设计图进行rem设置
document.getElementsByTagName('html')[0].style.fontSize=100*window.innerWidth/1080+'px';
//横竖屏切换  100  1rem 10  ,1erm
function portraitLandscape(autoOrHidden){
	document.getElementsByTagName('html')[0].style.fontSize=100*window.innerWidth/1080+'px';
	document.getElementsByTagName('body')[0].style.overflow=autoOrHidden;
 	document.getElementsByTagName('html')[0].style.overflow=autoOrHidden;
 }
//执行横竖屏幕切换
window.onorientationchange=function (){if(window.innerWidth>window.innerHeight){portraitLandscape('auto');alert('为了您能更好地访问本站,我们强烈建议您将手机竖屏显示');}else{portraitLandscape('auto');}}
})();


//运动框架开始
function moveofTime(d, j, a, c, i) {
        if (typeof a == "undefined") {
            a = 400;
            c = "linear"
        }
        if (typeof a == "string") {
            if (typeof c == "function") {
                i = c
            }
            c = a;
            a = 400
        } else {
            if (typeof a == "function") {
                i = a;
                a = 400;
                c = "linear"
            } else {
                if (typeof a == "number") {
                    if (typeof c == "function") {
                        i = c;
                        c = "linear"
                    } else {
                        if (typeof c == "undefined") {
                            c = "linear"
                        }
                    }
                }
            }
        }
        var e = {};
        for (var g in j) {
            e[g] = 0;
            if (g == "opacity") {
                e[g] = Math.round(h(d, g) * 100)
            } else {
                e[g] = parseInt(h(d, g))
            }
        }
        var f = b();
        clearInterval(d.timer);
        d.timer = setInterval(function () {
            var m = b();
            var l = a - Math.max(0, f - m + a);
            for (var k in j) {
                var n = Tween[c](l, e[k], j[k] - e[k], a);
                if (k == "opacity") {
                    d.style.opacity = n / 100;
                    d.style.filter = "alpha(opacity=" + n + ")"
                } else {
                    d.style[k] = n + "px"
                }
            }
            if (l == a) {
                clearInterval(d.timer);
                if (i) {
                    i.call(d)
                }
            }
        }, 13);
 
        function h(l, k) {
            if (l.currentStyle) {
                return l.currentStyle[k]
            } else {
                return getComputedStyle(l, false)[k]
            }
        }
 
        function b() {
            return (new Date()).getTime()
        }
    }
   var Tween = {
    linear: function (t, b, c, d){  //匀速
        return c*t/d + b;
    },
    easeIn: function(t, b, c, d){  //加速曲线
        return c*(t/=d)*t + b;
    },
    easeOut: function(t, b, c, d){  //减速曲线
        return -c *(t/=d)*(t-2) + b;
    },
    easeBoth: function(t, b, c, d){  //加速减速曲线
        if ((t/=d/2) < 1) {
            return c/2*t*t + b;
        }
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInStrong: function(t, b, c, d){  //加加速曲线
        return c*(t/=d)*t*t*t + b;
    },
    easeOutStrong: function(t, b, c, d){  //减减速曲线
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
        if ((t/=d/2) < 1) {
            return c/2*t*t*t*t + b;
        }
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
        if (t === 0) { 
            return b; 
        }
        if ( (t /= d) == 1 ) {
            return b+c; 
        }
        if (!p) {
            p=d*0.3; 
        }
        if (!a || a < Math.abs(c)) {
            a = c; 
            var s = p/4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
        if (t === 0) {
            return b;
        }
        if ( (t /= d) == 1 ) {
            return b+c;
        }
        if (!p) {
            p=d*0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },    
    elasticBoth: function(t, b, c, d, a, p){
        if (t === 0) {
            return b;
        }
        if ( (t /= d/2) == 2 ) {
            return b+c;
        }
        if (!p) {
            p = d*(0.3*1.5);
        }
        if ( !a || a < Math.abs(c) ) {
            a = c; 
            var s = p/4;
        }
        else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        if (t < 1) {
            return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
                    Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        }
        return a*Math.pow(2,-10*(t-=1)) * 
                Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
    },
    backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
        if (typeof s == 'undefined') {
           s = 1.70158;
        }
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    backOut: function(t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 3.70158;  //回缩的距离
        }
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    }, 
    backBoth: function(t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 1.70158; 
        }
        if ((t /= d/2 ) < 1) {
            return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        }
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
        return c - Tween['bounceOut'](d-t, 0, c, d) + b;
    },       
    bounceOut: function(t, b, c, d){
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
        }
        return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
    },      
    bounceBoth: function(t, b, c, d){
        if (t < d/2) {
            return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
        }
        return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
    }
}
//运动框架结束
//基于css3平移的运动框架开始 
var tweenMove ={easeOut:function(t,b,c,d){return -c * (t /= d) * (t - 2) + b},backOut:function(t,b,c,d,s){if (typeof s == 'undefined'){s = 3.70158}return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b}};
function translateMove(obj,oTarget,iTime,iType,fnEnd,fnDuring){var fn=tweenMove[iType];var t=0;var b={};var c={};var d=iTime/24;var sAttr="";clearInterval(obj.timer);for(sAttr in oTarget){b[sAttr]=css(obj,sAttr);c[sAttr]=oTarget[sAttr]-b[sAttr]}if(iTime<30){for(sAttr in oTarget){css(obj,sAttr,oTarget[sAttr])}}else{obj.timer=setInterval(function(){if(t<d){t++;for(sAttr in oTarget){css(obj,sAttr,fn(t,b[sAttr],c[sAttr],d))}}else{for(sAttr in oTarget){css(obj,sAttr,oTarget[sAttr])}clearInterval(obj.timer);if(fnEnd){fnEnd.call(obj)}}if(fnDuring){fnDuring.call(obj)}},24)}}
function css(obj,attr,value){if(arguments.length==2){if(attr=='scale'|| attr=='rotate'|| attr=='rotateX'||attr=='rotateY'||attr=='scaleX'||attr=='scaleY'||attr=='translateY'||attr=='translateX'){if(! obj.$Transform){obj.$Transform={}}switch(attr){case 'scale':case 'scaleX':case 'scaleY':return typeof(obj.$Transform[attr])=='number'?obj.$Transform[attr]:100;break;default:return obj.$Transform[attr]?obj.$Transform[attr]:0}}var sCur=obj.currentStyle?obj.currentStyle[attr]:document.defaultView.getComputedStyle(obj,false)[attr];if(attr=='opacity'){return Math.round((parseFloat(sCur)*100))}else{return parseInt(sCur)}}else if(arguments.length==3){switch(attr){case 'scale':case 'scaleX':case 'scaleY':case 'rotate':case 'rotateX':case 'rotateY':case 'translateZ':case 'translateX':case 'translateY':setCss3(obj,attr,value);break;case 'width':case 'height':case 'paddingLeft':case 'paddingTop':case 'paddingRight':case 'paddingBottom':value=Math.max(value,0);case 'left':case 'top':case 'marginLeft':case 'marginTop':case 'marginRight':case 'marginBottom':if(typeof value=="string"){obj.style[attr]=value}else{obj.style[attr]=value+'px'}break;case 'opacity':obj.style.filter="alpha(opacity:"+value+")";obj.style.opacity=value/100;break;default:obj.style[attr]=value}}return function (attr_in,value_in){css(obj,attr_in,value_in)}}
function setCss3(obj,attr,value){var sTr="";var sVal="";var arr=["Webkit","Moz","O","ms",""];if(! obj["$Transform"]){obj["$Transform"]={}}obj["$Transform"][attr]=parseInt(value);for(sTr in obj["$Transform"]){switch(sTr){case 'scale':case 'scaleX':case 'scaleY':sVal+=sTr+"("+(obj["$Transform"][sTr]/100)+") ";break;case 'rotate':case 'rotateX':case 'rotateY':sVal+=sTr+"("+(obj["$Transform"][sTr])+"deg) ";break;case 'translateX':case 'translateY':case 'translateZ':sVal+=sTr+"("+(obj["$Transform"][sTr])+"px) ";break}}for(var i=0;i<arr.length;i++){obj.style[arr[i]+"Transform"]=sVal}};
