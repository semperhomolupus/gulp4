module.exports = function() {
  const p = global.p;
  p.gulp.task("sass", function() {
    return p.gulp
      .src(p.paths.src.scss)
      .pipe(p.gp.newer(p.paths.build.styles)) // Проверяем из кеша
      .pipe(
        p.gp.plumber({
          errorHandler: p.gp.notify.onError(function(error) {
            return {
              title: "SASS - ошибка при сборке .scss",
              message: error.message,
            };
          }),
        })
      ) // Предотвращает остановку плагина при возникновении ошибки
      .pipe(p.gp.sourcemaps.init()) // Инициализируем gulp-sourcemaps
      .pipe(p.gp.sass.sync()) // Зачем sync (?)
      .pipe(
        p.gp.autoprefixer({
          browsers: ["last 10 versions", "> 1%"],
          cascade: true,
        })
      ) // Автопрефиксер
      .pipe(p.gp.csso()) // Минификация css
      .pipe(p.gp.sourcemaps.write()) // Добавляем sourcemaps в файл .css
      .pipe(
        p.gp.rename({
          suffix: ".min",
        })
      ) // Переименовываем
      .pipe(p.gulp.dest(p.paths.build.styles))
      .pipe(
        p.browserSync.reload({
          stream: true,
        })
      );
  });
};
