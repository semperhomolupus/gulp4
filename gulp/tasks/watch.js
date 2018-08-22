module.exports = function () {
  p.gulp.task("watch", function () {
    p.gulp.watch(p.paths.watch.pug, p.gulp.series("pug"));
    p.gulp.watch(p.paths.watch.sass, p.gulp.series("sass"));
    p.gulp.watch(p.paths.watch.js, p.gulp.series("js"));
    p.gulp.watch(p.paths.watch.fonts, p.gulp.series("fonts"));
    p.gulp.watch(p.paths.watch.img, p.gulp.series("img"));
    p.gulp.watch(p.paths.watch.svg, p.gulp.series("svg"));
    p.gulp.watch(p.paths.watch.spriteSVG, p.gulp.series("svg-sprite", "pug"));
    p.gulp.watch(p.paths.watch.spritePNG, p.gulp.series("png-sprite"));
  });
};