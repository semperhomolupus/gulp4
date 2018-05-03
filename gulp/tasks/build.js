module.exports = function() {
  plugins.gulp.task(
    "build",
    plugins.gulp.series("pug", "sass", "js", "img", "fonts")
  );
};
