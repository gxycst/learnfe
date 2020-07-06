节流：sroll，resize等，一定时间内会执行很多次，影响性能，在规定时间内只执行一次；

防抖：在规定时间内，执行最后一次；



节流的两种方式：
function throwTime(dealy,func){
    var pre=Date.now();
    return function(){
        var now=Date.now();
        if(now-pre>=dealy){
            func.apply(this,arguments);
        }
    }
}

function setTimeoutFunc(delay,func){
    var timer=null;
    return function(){
        var This=this;
        var arg=arguments;
        if(!timer){
            timer=setTimeout(function(){
                func.apply(this,arguments);
            },delay)
        }
    }
}


防抖：
function fd(delay,func){
    var timer=null;
    return function(){
        clearTimeout(timer);
        var This=this;
        var arg=arguments;
        timer=setTimeout(function(){
            func.apply(This,arg);
        },delay);
    }
}

