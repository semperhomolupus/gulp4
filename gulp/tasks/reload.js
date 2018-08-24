module.exports = function () {
  p.gulp.task("reload", function () {
    p.browserSync.init(p.paths.browserSync);
  });
};