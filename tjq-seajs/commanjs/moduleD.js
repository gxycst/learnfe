seajs.use('./js/moduleA.js',function(ex){
			ex.moduleA();
	});
		seajs.use('./js/moduleB.js',function(ex){
			ex.moduleB();
			ex.alertModuleC();
});