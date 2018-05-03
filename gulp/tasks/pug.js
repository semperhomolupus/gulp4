module.exports = function() {
  plugins.gulp.task("pug", function() {
    return plugins.gulp
      .src("src/pug/pages/*.pug")
      .pipe(plugins.gp.pug({ pretty: true }))
      .pipe(plugins.gulp.dest("build"))
      .pipe(plugins.browserSync.reload({ stream: true }));
  });
};
