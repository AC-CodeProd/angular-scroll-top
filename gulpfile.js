var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
var pathsSrc = {
    less: ['src/less/*.less','!src/less/components/*.less','!src/less/utilities/*.less'],
    lessWatch: ['src/less/*.less'],
    scripts: ['src/*.js']
};
gulp.task('less', function() {
    return gulp.src(pathsSrc.less)
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer("last 8 version", "> 1%", "ie 8", "ie 7"), {
            cascade: true
        })
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('dist'));
});
gulp.task('scripts', function() {
    return gulp.src(pathsSrc.scripts)
        .pipe(plugins.plumber())
        .pipe(plugins.uglify({
            mangle: false
        }))
        .pipe(plugins.jsmin())
        .pipe(gulp.dest('dist'));
});
gulp.task('watch', function() {
    gulp.watch(pathsSrc.lessWatch, ['less']);
    gulp.watch(pathsSrc.scripts, ['scripts']);
});
gulp.task('default', ['watch', 'less', 'scripts']);