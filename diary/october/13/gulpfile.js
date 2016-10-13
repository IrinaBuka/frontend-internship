var gulp = require('gulp');
var less = require('gulp-less');
var bs = require('browser-sync').create();

bs.init({
    files: [
        'dist/**/*.*'
    ],
    proxy: '0.0.0.0:8888'
});

gulp.task('styles', function() {
    gulp.src('src/less/all.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('php', function () {
	// Copy all php files to dist/
    gulp.src('src/**/*.php')
        .pipe(gulp.dest('dist'));
});

gulp.watch('src/less/*.less', ['styles']);
gulp.watch('src/**/*.php', ['php']);

gulp.task('default', ['styles', 'php']);