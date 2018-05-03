module.exports = function() {
  plugins.gulp.task("img", function() {
    return gulp
      .src("src/img/*.{png,jpg,jpeg,gif}")
      .pipe(plugins.gulp.dest("build/img"))
      .pipe(plugins.browserSync.reload({ stream: true }));
  });
};
