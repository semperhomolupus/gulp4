module.exports = function() {
  const p = global.p;
  p.gulp.task("js", function() {
    return p.gulp
      .src(p.paths.src.js)
      .pipe(p.gp.newer(p.paths.build.js))
      .pipe(
        p.gp.plumber({
          errorHandler: p.gp.notify.onError(function(error) {
            return {
              title: "JavaScript - ошибка при сборке .js",
              message: error.message,
            };
          }),
        })
      ) // Предотвращает остановку плагина при возникновении ошибки
      .pipe(p.gp.sourcemaps.init()) // Инициализируем gulp-sourcemaps
      .pipe(
        p.gp.eslint({
          fix: true,
        })
      )
      .pipe(p.gp.eslint.format())
      .pipe(
        p.gp.babel({
          presets: ["env"],
        })
      ) // Babel
      .pipe(p.gp.concat("app.js")) // Объединяем все JS файлы в один
      .pipe(p.gp.uglify()) // Минифицируем наш js файл
      .pipe(p.gp.sourcemaps.write()) // Добавляем sourcemaps в файл .js
      .pipe(
        p.gp.rename({
          suffix: ".min",
        })
      ) // Переименовываем
      .pipe(p.gulp.dest(p.paths.build.js))
      .pipe(
        p.browserSync.reload({
          stream: true,
        })
      );
  });
};
