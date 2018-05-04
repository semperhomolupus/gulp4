module.exports = function() {
  plugins.gulp.task(
    "build",
    plugins.gulp.series("delete", "pug", "sass", "js", "img", "fonts")
  );
};
