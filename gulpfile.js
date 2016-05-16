var gulp = require('gulp'),
	run = require('gulp-run'),
	plumber = require('gulp-plumber'),
	uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    css_minify = require('gulp-clean-css');



gulp.task('run', function() {
	return run('electron .').exec().pipe(plumber());
});

gulp.task('package', function() {

});

gulp.task('js-minify', function() {

});

gulp.task('minify-css', function() {

});

gulp.task('simply-copy', function() {

});

gulp.task('img-minify', function() {

});



gulp.task('build', ['package', 'js-minify', 'minify-css', 'simply-copy', 'img-minify']);
gulp.task('default', ['run']);