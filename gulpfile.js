"use strict";

// p = plugins, корневой объект нашей сборки для расширения области видимости
global.p = {
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(), //  Подключаем все плагины, начинающиеся с "gulp-".
  browserSync: require("browser-sync").create(),
  del: require("del"),
  spritesmith: require("gulp.spritesmith"),
  merge: require("merge-stream"),
  ftp: require("vinyl-ftp"),
  webpack: require('webpack-stream'),
  paths: require("./gulp/config/paths.js"),
  tasks: require("./gulp/config/tasks.js"),
};

p.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

global.production = p.gp.util.env.prod ? true : false;
global.develop = p.gp.util.env.dev ? true : false;

if (production) {
  p.gulp.task("default", p.gulp.series("build"));
} else if (develop) {
  p.gulp.task("default", p.gulp.series("build", "server"));
} else {
  p.gulp.task("default", function (done) {
    console.log("\n\nВведите 'gulp --dev' или 'gulp --prod'\n\n")
    done()
  });
}

// For PhpStorm's lovers 

p.gulp.task("dev", p.gulp.series(function (done) {
  global.develop = true;
  global.production = false;
  done()
}, "build"));

p.gulp.task("prod", p.gulp.series(function (done) {
  global.develop = false;
  global.production = true;
  done()
}, "build", "server"));