module.exports = function() {
  const p = global.p;
  p.gulp.task("server", p.gulp.parallel("watch", "reload"));
};
