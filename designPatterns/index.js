function l(){console.log(arguments[0]);}
// extend BaiDu||原型式继承
function inhertObject(somePrototype){
	function F(){};
	F.prototype=somePrototype;
	return new F();
}
// 寄生组合继承,虽然开销小，不过要传一个原型再使用,不如浅拷贝+call实际
function inheritPrototype(sonClass,fatherClassPrototype){
	var p=inhertObject(fatherClassPrototype);
	p.constructor=sonClass;
	sonClass.prototype=p;
}
function inheritExtend(sonClass,fatherClass){
	var p=new fatherClass();
	p.constructor=sonClass;
	sonClass.prototype=p;
}

//单继承(浅拷贝)
function extend(target,source){
	for(var property in source){
		target[property]=source[property];
	}
	return target;
}
//多继承
function moreExtend(){
	var i=1,
	len=arguments.length,
	target=arguments[0],
	arg;
	for(;i<len;i++){
		arg=arguments[i];
		for(var property in arg){
			target[property]=arg[property];
		}
	}
}
//综上继承到方法可以用单继承和寄生组合继承





