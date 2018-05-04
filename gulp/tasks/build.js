module.exports = function() {
  // Сначала удаляем проект, потом выполняем таски
  p.gulp.task(
    "build",
    p.gulp.series("delete", "pug", "sass", "js", "img", "sprite", "fonts")
  );
};
