module.exports = function () {
  p.gulp.task("reload", function () {
    p.browserSync.init({
      server: {
        baseDir: "./" + p.paths.project
      }
    });
  });
};