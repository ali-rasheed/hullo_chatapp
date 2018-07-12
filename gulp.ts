var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');

gulp.task('vulcanize', function () {
  return gulp.src('index.vulcanize.html')
    .pipe(vulcanize([
      stripComments: true,
      inlineScripts: true,
      inlineCss: true
    ]))
    .pipe(gulp.dest('dist/elements'));
});

gulp.task('default', ['vulcanize']);
