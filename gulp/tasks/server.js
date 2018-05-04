module.exports = function() {
  plugins.gulp.task("server", plugins.gulp.series("watch", "reload"));
};
