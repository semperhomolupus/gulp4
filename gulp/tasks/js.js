module.exports = function() {
  plugins.gulp.task("js", function() {
    return gulp
      .src("src/js/*.js")
      .pipe(
        plugins.gp.plumber({
          errorHandler: plugins.gp.notify.onError(function(error) {
            return {
              title: "JavaScript - ошибка при сборке .js",
              message: error.message
            };
          })
        })
      ) // Предотвращает остановку плагина при возникновении ошибки
      .pipe(plugins.gp.sourcemaps.init()) // Инициализируем gulp-sourcemaps
      .pipe(plugins.gp.concat("app.js")) // Объединяем все JS файлы в один
      .pipe(plugins.gp.uglify()) // Минифицируем наш js файл
      .pipe(plugins.gp.sourcemaps.write()) // Добавляем sourcemaps в файл .js
      .pipe(plugins.gp.rename({ suffix: ".min" })) // Переименовываем
      .pipe(plugins.gulp.dest("build/js"))
      .pipe(plugins.browserSync.reload({ stream: true }));
  });
};
