module.exports = function () {
  const p = global.p;
  p.gulp.task("pug", function () {
    return p.gulp
      .src(p.paths.src.pug)
      .pipe(p.gp.newer(p.paths.build.html)) // Проверяем из кеша
      .pipe(
        p.gp.plumber({
          errorHandler: p.gp.notify.onError(function (error) {
            return {
              title: "PUG - ошибка при сборке .pug",
              message: error.message,
            };
          }),
        })
      ) // Предотвращает остановку плагина при возникновении ошибки
      .pipe(
        p.gp.pug({
          pretty: true,
        })
      ) // Конвертируем
      .pipe(p.gulp.dest(p.paths.build.html)) // Копируем
      .pipe(
        p.gp.htmlhint({
          "attr-lowercase": false,
          "spec-char-escape": false,
        })
      ) // Валидация
      .pipe(p.gp.htmlhint.failAfterError())
      .pipe(
        p.browserSync.reload({
          stream: true,
        })
      );
  });
};