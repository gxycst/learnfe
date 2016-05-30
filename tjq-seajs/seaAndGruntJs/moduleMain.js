//合并之后的js
//A模块
define('moduAFunction',[],function(require,exports,module){
	function moduleA(){
		alert('我是模块A');
	}
	exports.moduleA=moduleA;
})
//B的依赖
define('moduBFunction',[],function(require,exports,module){
	var moduleC=3;
	exports.moduleC=moduleC;
})
//B模块
define('moduCFunction',['moduBFunction'],function(require,exports,module){
	var moduleC=require('moduBFunction').moduleC;
	function moduleB(){
		alert('我是模块B');
	}
	function alertModuleC(){
		alert('我是模块c中的c,值为'+moduleC);
	}	
	exports.moduleB=moduleB;
	exports.alertModuleC=alertModuleC;
})

//C调用以上模块
seajs.use('moduAFunction',function(ex){
			ex.moduleA();
	});
seajs.use('moduCFunction',function(ex){
			ex.moduleB();
			ex.alertModuleC();
});
