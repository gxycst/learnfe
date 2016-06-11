function A(s){alert(s)}function C(s){console.log(s)}function T(a,b){if(a===b){return console.log('全等!');}if(a==b){return console.log('表面等!')}return console.log('不等')}
function clones(obj){
	function F(){}
	F.prototype=obj;
	return new F();
}

/*var Father=function(){
	this.name='Father Name';
	this.age=100;
}

var fatherObj=new Father();
fatherObj.name='jicheng Father Name';
fatherObj.age=120;
//L(fatherObj);
function F(){}
F.prototype=fatherObj;
var s=new F();
//var cloneFather=clones(fatherObj);

L(s.prototype);
*/

var Plane=function(){
	this.blood=100;
	this.attacklevel=1;
	this.defenselevel=1;
}
var plane=new Plane();
plane.blood=500;
plane.attacklevel=10;
plane.defenselevel=7;
var clonePlane=Object.create(plane);
L(clonePlane)