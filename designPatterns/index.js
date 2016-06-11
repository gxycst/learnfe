function L(s){console.log(s)}
function T(a,b){if(a===b){return console.log('两个对象全等!!!');}if(a==b){return console.log('两个对象全等表面上相等!!!');}return console.log('两个对象风马牛不相及')}
function F(fn){
	if(typeof fn !== 'function'){
		L('不是一个函数');
		return;
	}
	fn.call(null);
}
/*
var Person={
	name:"默认名字",
	getName:function(){
		L(this.name);
	}
}
var Author=clone(Person);
Author.books=[];
Author.getBooks=function(){
	L(this.books);
}

var author=[];
author[0]=clone(Author);
author[0].name='TJQ';
author[0].books=['JS设计模式'];

author[1]=clone(Author);
author[1].name='WJQ';
author[1].books=['JS设计模式'];
author[1].getName();
author[1].getBooks();


function clone(obj){
	function F(){};
	F.prototype=obj;
	return new F();
}

*/

function father(name){
	this.name=name;
	this.age=100;
}
father.prototype.getName=function(){
	console.log(this.name);
}
father.prototype.getAge=function(){
	console.log('哈哈');
}


function son(name){
	father.call(this,name);
	this.age=50;
	this.sex='girl';
}
son.prototype.getAge=function(){
	console.log(this.age);
}

function extend(sonclass,fatherclass){
	for(var attr in fatherclass.prototype){
		sonclass.prototype[attr]=fatherclass.prototype[attr];
	}
}
extend(son,father);

son.prototype.getSex=function(){
	L(this.sex);
   }
var sonobj=new son('子类');
sonobj.getAge();
sonobj.getSex();


var faobj=new father('父类');
faobj.getName();






