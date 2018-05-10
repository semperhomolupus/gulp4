module.exports = function () {
  p.gulp.task("watch", function () {
    p.gulp.watch(p.paths.watch.pug, p.gulp.series("pug"));
    p.gulp.watch(p.paths.watch.sass, p.gulp.series("sass"));
    p.gulp.watch(p.paths.watch.js, p.gulp.series("js"));
    p.gulp.watch(p.paths.watch.fonts, p.gulp.series("fonts"));
    p.gulp.watch(
      p.paths.watch.img,
      p.gulp.series("img", "png-sprite", "svg-sprite")
    );
  });
};