var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('zip', function () {
	gulp.src(['./*.js', './*.css', './*.woff', './*.png', './*.json'])
		.pipe(zip('bundle.zip'))
		.pipe(gulp.dest(''));
});
