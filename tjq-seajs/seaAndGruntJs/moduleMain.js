//合并之后的js
//A模块
define('moduANme',[],function(require,exports,module){
	function moduleA(){
		alert('我是模块A');
	}
	exports.moduleA=moduleA;
})
//B的依赖
define('./moduleC.js',[],function(require,exports,module){
	var moduleC=3;
	exports.moduleC=moduleC;
})
//B模块
define('./js/moduleB.js',['./moduleC.js'],function(require,exports,module){
	var moduleC=require('./moduleC.js');
	function moduleB(){
		alert('我是模块B');
	}
	function alertModuleC(){
		alert('我是模块c中的c,值为');
	}	
	exports.moduleB=moduleB;
	exports.alertModuleC=alertModuleC;
})

//C调用以上模块
seajs.use('moduANme',function(ex){
			ex.moduleA();
	});
seajs.use('./js/moduleB.js',function(ex){
			ex.moduleB();
			ex.alertModuleC();
});
