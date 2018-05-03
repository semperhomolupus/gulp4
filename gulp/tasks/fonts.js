module.exports = function() {
  plugins.gulp.task("fonts", function() {
    return plugins.gulp
      .src("src/fonts/*.{woff,woff2,eot,ttf}")
      .pipe(plugins.gulp.dest("build/fonts"))
      .pipe(plugins.browserSync.reload({ stream: true }));
  });
};
