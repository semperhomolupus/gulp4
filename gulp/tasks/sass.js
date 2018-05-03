module.exports = function() {
  plugins.gulp.task("sass", function() {
    return gulp
      .src("src/sass/style.scss")
      .pipe(
        plugins.gp.plumber({
          errorHandler: plugins.gp.notify.onError(function(error) {
            return {
              title: "SASS - ошибка при сборке .scss",
              message: error.message
            };
          })
        })
      ) // Предотвращает остановку плагина при возникновении ошибки
      .pipe(plugins.gp.sourcemaps.init()) // Инициализируем gulp-sourcemaps
      .pipe(plugins.gp.sass.sync()) // Зачем sync (?)
      .pipe(
        plugins.gp.autoprefixer({
          browsers: ["last 10 versions", "> 1%"]
        })
      ) // Автопрефиксер
      .pipe(plugins.gp.csso()) // Минификация css
      .pipe(plugins.gp.sourcemaps.write()) // Добавляем sourcemaps в файл .css
      .pipe(plugins.gp.rename({ suffix: ".min" })) // Переименовываем
      .pipe(plugins.gulp.dest("build/css"))
      .pipe(plugins.browserSync.reload({ stream: true }));
  });
};
