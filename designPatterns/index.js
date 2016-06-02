function l(){console.log(arguments[0]);}
// extend BaiDu
function inhertObject(o){
	function F(){};
	F.prototype=o;
	return new F();
}


function father(){
	this.name='父亲';
}
father.prototype={
	getName:function(){
		l(this.name);
	}
}
function test(){
	this.name=123;
}


function son(name){
	this.name=name;
}

var p=inhertObject(father.prototype);

son.prototype=p;

son.prototype.getName=function(){
	l(this.name);
}

var sonObj=new son('儿子');

l(sonObj.name);

sonObj.getName();



function son(){
	father.apply(this);
}
function inheritPrototype(subClass,superClass){
	var p=inhertObject(superClass.prototype);
	p.constructor=subClass;
	subClass.prototype=p;
}

function superClass(name){
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
}
var instance1=new subClass('js book',2014);
var instance2=new subClass('css book',2015);

instance1.colors.push('black');

