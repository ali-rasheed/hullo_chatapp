var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
gulp.task('vulcanize', function () {
    return gulp.src('index.html')
        .pipe(vulcanize({
        inlineCss: true,
        inlineScripts: true,
        stripComments: true,
    }))
        .pipe(gulp.dest("build")).pipe(gulp.dest("build/src/"));
});
gulp.task('default', ['vulcanize']);
//# sourceMappingURL=gulpfile.js.map
//# sourceMappingURL=gulpfile.js.map