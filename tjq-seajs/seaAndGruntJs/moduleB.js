define(function(require,exports,module){
	var moduleC=require('./moduleC.js');
	function moduleB(){
		alert('我是模块B');
	}
	function alertModuleC(){
		alert('我是模块c中的c,值为'+moduleC.moduleC);
	}	
	exports.moduleB=moduleB;
	exports.alertModuleC=alertModuleC;
})