module.exports = function () {
  p.gulp.task("sass", function () {
    return p.gulp
      .src(p.paths.src.scss)
      .pipe(p.gp.concat("style.min.css"))
      .pipe(p.gp.newer(p.paths.build.styles)) // Проверяем из кеша
      .pipe(
        p.gp.plumber({
          errorHandler: p.gp.notify.onError(function (error) {
            return {
              title: "SASS - ошибка при сборке .scss",
              message: error.message,
            };
          }),
        })
      ) // Предотвращает остановку плагина при возникновении ошибки
      .pipe(develop ? p.gp.sourcemaps.init() : p.gp.util.noop()) // Инициализируем gulp-sourcemaps
      .pipe(p.gp.sass.sync()) // Зачем sync (?)
      .pipe(develop ?
        p.gp.util.noop() :
        p.gp.autoprefixer({
          browsers: ["last 10 versions", "> 1%"],
          cascade: true,
        })
      ) // Автопрефиксер
      .pipe(develop ? p.gp.util.noop() : p.gp.csso()) // Минификация css
      .pipe(develop ? p.gp.sourcemaps.write() : p.gp.util.noop()) // Добавляем sourcemaps в файл .css
      .pipe(p.gulp.dest(p.paths.build.styles))
      .pipe(
        p.browserSync.reload({
          stream: true,
        })
      );
  });
};