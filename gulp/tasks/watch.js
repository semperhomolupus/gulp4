module.exports = function() {
  plugins.gulp.task("watch", function() {
    plugins.gulp.watch("src/pug/**/*.pug", plugins.gulp.series("pug"));
    plugins.gulp.watch("src/sass/**/*.scss", plugins.gulp.series("sass"));
  });
};
