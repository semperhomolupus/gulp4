module.exports = function () {
  p.gulp.task("img", function () {
    return p.gulp
      .src(p.paths.src.img)
      .pipe(p.gp.cache(develop ? p.gp.util.noop() : p.gp.tinypngNokey())) // Оптимизируем
      .pipe(
        p.gp.rename(path => {
          path.dirname = path.dirname.replace("\\assets", "");
          path.dirname = path.dirname.replace("/assets", "");
        })
      )
      .pipe(p.gulp.dest(p.paths.build.img)) // Копируем
      .pipe(p.browserSync.reload({
        stream: true
      }));
  });
};