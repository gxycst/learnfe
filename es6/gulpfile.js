//1全局和开发环境安装gulp -> npm install -g gulp ,-> npm install gulp --save-dev
//2安装babel插件 npm install --save-dev gulp-babel
//3安装es6转es5插件  npm install --save-dev babel-preset-es2015
//4gulp 配置，此处配置了文件监听自动执行任务
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("es6toes5", function () {
  return gulp.src("src/**/*.js")// ES6 源码存放的路径
    .pipe(babel()) 
    .pipe(gulp.dest("dist")); //转换成 ES5 存放的路径
});
gulp.task("watch",function(){
	gulp.watch("src/**/*.js",["es6toes5"])
});
gulp.task('default',["es6toes5","watch"]);
//5Babel 配置.在项目根路径创建文件 .babelrc。内容为
/*{
  "presets": ["es2015"]
}*/

//6执行 gulp大功告成!

//如果需要生产sourcemap,则使用

//var gulp = require("gulp");
//var sourcemaps = require("gulp-sourcemaps");
//var babel = require("gulp-babel");
//var concat = require("gulp-concat");

//gulp.task("default", function () {
  //return gulp.src("src/**/*.js")
    //.pipe(sourcemaps.init())
    //.pipe(babel())
    //.pipe(concat("all.js"))
    //.pipe(sourcemaps.write("."))
    //.pipe(gulp.dest("dist"));
//});