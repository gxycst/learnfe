    var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    // Styles任务
gulp.task('styles', function() {
    //编译sass
    return gulp.src('sass/index.scss')
    .pipe(sass())
    //保存未压缩文件到我们指定的目录下面
    .pipe(gulp.dest(''))
    //给文件添加.min后缀
    .pipe(rename({ suffix: '.min' }))
    //压缩样式文件
    .pipe(minifycss())
    //输出压缩文件到指定目录
    .pipe(gulp.dest('assets'))
    //提醒任务完成
    .pipe(notify({ message: 'gulp任务完成!' }));
});

//默认任务
gulp.task('default', function() {
    gulp.start('cssTask');
});
//监听自动执行
gulp.task('watch',function(){
    gulp.watch('scss/*.scss','cssTask');
})