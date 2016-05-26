//包装函数
module.exports=function(grunt){
	//任务配置,所有插件的配置信息
	grunt.initConfig({
	//获取package.json的信息
	pkg:grunt.file.readJSON('package.json'),
	//uglify插件配置信息
	uglify:{
		options:{
			stripBanners:true,
			banner:'/*! 项目名<%-pkg.name%>版本号<%-pkg.version%>.js时间<%-grunt.template.today("yyyy-mm-dd")%>*/\n'
		},
		build:{
			src:'src/grunttest.js',
			dest:'build/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
		}
	},
	cssmin:{
		options:{
			stripBanners:false,
			banner:'/*! 项目名<%-pkg.name%>版本号<%-pkg.version%>.css时间<%-grunt.template.today("yyyy-mm-dd")%>*/\n'
		},
		build:{
			src:'css/cssMax.css',
			dest:'build/<%=pkg.name%>-<%=pkg.version%>.css.min.css'
		}

	}		
	});
	//告诉grunt我们将使用插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	//告诉grunt当我们在终端中输入grunt时需要做些什么(注意这两者的先后)
	grunt.registerTask('default',['uglify','cssmin']);


}