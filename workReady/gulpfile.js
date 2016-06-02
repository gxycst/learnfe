var gulp = require('gulp');
var allGulpPlugins=require('gulp-load-plugins')();
gulp.task('cssMin',function(){
	gulp.src('css/*.css').pipe(allGulpPlugins.minifyCss()).pipe(gulp.dest('cssMin'));
});
gulp.task('jsMin',function(){
	gulp.src('js/*.js').pipe(allGulpPlugins.uglify()).pipe(gulp.dest('jsMin'));
});
gulp.task('default', function() {
    gulp.start('cssMin','jsMin');
});