function l(){console.log(arguments[0]);}
// extend BaiDu->原型式继承
function inhertObject(o){
//声明一个过渡函数对象.o为一个prototype或者一个new出来的实例
	function F(){};
//过渡对象的原型继承父对象
	F.prototype=o;
//返回过渡对象的一个实例,该实例的原型继承了父对象
	return new F();
}
// extend BaiDu-> 寄生组合继承
function inheritPrototype(subClass,superClass){
	//复制一份父类的原型副本保存在变量中
	var p=inhertObject(superClass);
	p.constructor=subClass;//修正指向
	subClass.prototype=p;//设置子类原型
}

// extend BaiDu->多继承(浅拷贝)
function extend(target,source){
	for(var property in source){
		target[property]=source[property];
	}
	return target;
}
var books={
	name:"名字",
	alike:['1','2','3']
}

var antherBook={
	color:"颜色",
	name:"姓名",
	alike:['a','b','c']
}
extend(books,antherBook);
l(books);

/*function superClass(name){
	this.name=name;
	this.colors=['red','blue','green'];
}
superClass.prototype.getName=function(){
	l(this.name);
}
function subClass(name,time){
	superClass.call(this,name);
	this.time=time;
}
inheritPrototype(subClass,superClass);
subClass.prototype.getTime=function(){
	l(this.time);
}*/
