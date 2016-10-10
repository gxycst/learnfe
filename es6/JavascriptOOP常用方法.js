

/*1.instanceof,测试一个对象在其原型链构造函数上是否具有prototype属性,这种话说得很绕口，最终就是测试一个变量是否是某个构造函数的实例。
构造函数.prototype===对象.__proto__.constructor.prototype.
获取一个对象的原型对象可以使用Object.getPrototypeOf,或者Obj.__proto__.constructor.prototype
*/


function class1(){
this.name='name';
}
function class2(){

}

/*console.log(class1.prototype===new class2().__proto__.constructor.prototype);
console.log(class1.prototype===Object.getPrototypeOf(new class1()));
console.log(new class2().__proto__.constructor.prototype===Object.getPrototypeOf(new class2()));
hasOwnProperty：是用来判断一个对象是否有你给出名称的属性或对象。不过需要注意的是，此方法无法检查该对象的原型链中是否具有该属性，该属性必须是对象本身的一个成员。
isPrototypeOf是用来判断要检查其原型链的对象是否存在于指定对象实例中，是则返回true，否则返回false。和instanceof反了过来。
*/
function siteAdmin(nickName,siteName){
            this.nickName=nickName;
            this.siteName=siteName;
        }
        siteAdmin.prototype.showAdmin = function() {
            console.log(this.nickName+"是"+this.siteName+"的站长!")
        };
        siteAdmin.prototype.showSite = function(siteUrl) {
            this.siteUrl=siteUrl;
            return this.siteName+"的地址是"+this.siteUrl;
        };
        var matou=new siteAdmin("愚人码头","WEB前端开发");
        var matou2=new siteAdmin("愚人码头","WEB前端开发");
        matou.age="30";
        /*
        console.log(matou.hasOwnProperty("nickName"));//true
        console.log(matou.hasOwnProperty("age"));//true,因为直接写在了对象上
        console.log(matou.hasOwnProperty("showAdmin"));//false
        console.log(matou.hasOwnProperty("siteUrl"));//false
        console.log(siteAdmin.prototype.hasOwnProperty("showAdmin"));//true
        console.log(siteAdmin.prototype.hasOwnProperty("siteUrl"));//false
        console.log(siteAdmin.prototype.isPrototypeOf(matou))//true
        console.log(siteAdmin.prototype.isPrototypeOf(matou2))//true*/

//es6

class Father {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	clName(){
		console.log(this.name);
	}
	clAge(){
		console.log(this.age);
	}
}
class Son extends Father{
	constructor(x,y,color){
		super(x,y);//es5先创造子类的实例对象this然后再将父类的方法添加到this上.Father.call(this);
		//es6是先创造父类的方法然后再用子类的构造函数修改this.
//必须在构造函数内调用super,才可以使用this,否则报错.因为子类没有自己的this对象，是继承父类的this对象,然后对其加工
		this.color='我是子类的颜色';
	}
	Clcolor(){
		console.log(this.color);
	}
}

class jsClass{
	constructor(){
		this.name='nihao'
	}
	set name(){
		this.name='beigaile';
	}
	get name(){
		console.log(123);
	}
}

var objs=new jsClass();

