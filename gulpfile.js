"use strict";

var gulp = require("gulp"),
  gp = require("gulp-load-plugins")(); //  Подключаем все плагины, начинающиеся с "gulp-".

gulp.task("default", function(callback) {
  console.log("Hello world");
  callback();
});

gulp.task("pug", function() {
  return gulp
    .src("src/pug/pages/*.pug")
    .pipe(gp.pug({ pretty: true }))
    .pipe(gulp.dest("build"));
});

gulp.task("sass", function() {
  return gulp
    .src("src/sass/style.scss")
    .pipe(
      gp.plumber({
        errorHandler: gp.notify.onError(function(error) {
          return {
            title: "SASS - ошибка при сборке .scss",
            message: error.message
          };
        })
      })
    ) // Предотвращает остановку плагина при возникновении ошибки
    .pipe(gp.sourcemaps.init()) // Инициализируем gulp-sourcemaps
    .pipe(gp.sass.sync()) // Зачем sync (?)
    .pipe(gp.autoprefixer()) // Автопрефиксер
    .pipe(gp.csso()) // Минификация css
    .pipe(gp.sourcemaps.write()) // Добавляем sourcemaps в файл .css
    .pipe(gp.rename({ suffix: ".min" })) // Переименовываем
    .pipe(gulp.dest("build/css"));
});

gulp.task("img", function() {
  return gulp.src("src/img/*.{png,jpg,jpeg,gif}").pipe(gulp.dest("build/img"));
});

gulp.task("fonts", function() {
  return gulp
    .src("src/fonts/*.{woff,woff2,eot,ttf}")
    .pipe(gulp.dest("build/fonts"));
});

gulp.task("js", function() {
  return gulp
    .src("src/js/*.js")
    .pipe(
      gp.plumber({
        errorHandler: gp.notify.onError(function(error) {
          return {
            title: "JavaScript - ошибка при сборке .js",
            message: error.message
          };
        })
      })
    ) // Предотвращает остановку плагина при возникновении ошибки
    .pipe(gp.sourcemaps.init()) // Инициализируем gulp-sourcemaps
    .pipe(gp.concat("app.js")) // Объединяем все JS файлы в один
    .pipe(gp.uglify()) // Минифицируем наш js файл
    .pipe(gp.sourcemaps.write()) // Добавляем sourcemaps в файл .js
    .pipe(gp.rename({ suffix: ".min" })) // Переименовываем
    .pipe(gulp.dest("build/js"));
});
