module.exports = function() {
  const p = global.p;
  p.gulp.task("reload", function() {
    p.browserSync.init({ server: { baseDir: "./" + p.paths.project } });
  });
};
