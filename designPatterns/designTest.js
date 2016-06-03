function l(){
	console.log(arguments[0]);
}
var cost=(function(){
	var args=[];
	return function(){
		if(arguments.length===0){
			var money=0;
			for(var i=0;i<args.length;i++){
				money+=args[i];
			}
			return money;
		}else{
			args.push.apply(args,arguments);
		}
	}
})();






var jisuanHe=(function(){
	var arr=[];
	return function(){
		if(arguments.length==0){
			var a=1;
			a*=arguments[i];
			return a;
		}else{
			[].push.apply(arr,arguments);
		}
	}
})();







cost(100);
cost(200);
l(cost())
