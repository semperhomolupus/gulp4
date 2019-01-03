module.exports = function () {
    p.gulp.task("assets", function () {
      return p.gulp
        .src(p.paths.src.assets)
        .pipe(p.gulp.dest(p.paths.build.assets)) // Просто копируем папку
        .pipe(p.browserSync.reload({
          stream: true
        }));
    });
  };