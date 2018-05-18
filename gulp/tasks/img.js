module.exports = function() {
  const p = global.p;
  p.gulp.task("img", function() {
    return p.gulp
      .src(p.paths.src.img)
      .pipe(p.gp.cache(p.gp.tinypngNokey())) // Оптимизируем
      .pipe(p.gulp.dest(p.paths.build.img)) // Копируем
      .pipe(p.browserSync.reload({ stream: true }));
  });
};
