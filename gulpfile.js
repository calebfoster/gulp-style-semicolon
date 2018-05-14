var gulp = require('gulp');

gulp.task('test', function() {
    var gulpStyleSemicolon = require('./index');

    return gulp.src('test.html')
        .pipe(gulpStyleSemicolon())
        .pipe(gulp.dest('finished.html'));
});

gulp.task('watch', ['test'], function() {
    gulp.watch('./**/*', ['test']);
});