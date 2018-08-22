module.exports = function () {
  p.gulp.task("server", p.gulp.parallel("watch", "reload"));
};