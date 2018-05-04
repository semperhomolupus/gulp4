"use strict";

global.plugins = {
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(), //  Подключаем все плагины, начинающиеся с "gulp-".
  browserSync: require("browser-sync").create(),
  del: require("del"),

  path: {
    tasks: require("./gulp/config/tasks.js")
  }
};

plugins.path.tasks.forEach(function(taskPath) {
  require(taskPath)();
});

plugins.gulp.task("default", plugins.gulp.series("build", "watch", "reload"));
