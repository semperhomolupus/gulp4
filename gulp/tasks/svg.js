module.exports = function() {
  const p = global.p;
  p.gulp.task("svg", function() {
    return p.gulp
      .src(p.paths.src.svg)
      .pipe(
        p.gp.cache(
          p.gp.svgmin({
            js2svg: {
              pretty: true,
            },
          })
        )
      ) // Оптимизируем
      .pipe(p.gulp.dest(p.paths.build.svg)) // Копируем
      .pipe(
        p.browserSync.reload({
          stream: true,
        })
      );
  });
};
