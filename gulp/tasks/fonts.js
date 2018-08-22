module.exports = function () {
  p.gulp.task("fonts", function () {
    return p.gulp
      .src(p.paths.src.fonts)
      .pipe(p.gulp.dest(p.paths.build.fonts)) // Просто копируем шрифты
      .pipe(p.browserSync.reload({
        stream: true
      }));
  });
};