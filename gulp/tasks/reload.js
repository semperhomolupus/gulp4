module.exports = function() {
  plugins.gulp.task("reload", function() {
    plugins.browserSync.init({ server: { baseDir: "./build" } });
  });
};
