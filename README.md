# gulp-style-semicolon

Plugin for [Gulp](https://github.com/gulpjs/gulp).

For an html file with inlined css, gulp-style-semicolon makes sure the style attribute has a closing semicolon on the last css rule.

# Install

```
npm install https://github.com/calebfoster/gulp-style-semicolon.git --save-dev
```

# Basic Usage

```javascript

var gulp = require('gulp');
var gulpStyleSemicolon = require('gulp-style-semicolon');

gulp.task('default', function () {
  return gulp.src('./index.html')
    .pipe(gulpStyleSemicolon())
    .pipe(gulp.dest('./dist'));
});
```