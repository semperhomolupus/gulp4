module.exports = function() {
  p.gulp.task("svg-sprite", function() {
    config = {
      mode: {
        symbol: {
          sprite: "svg-sprite.svg",
          render: {
            scss: {
              dest: "../../../src/sass/components/_svg-sprite.scss"
            }
          }
        }
      }
    }; // Activate CSS output (with default options)

    return p.gulp
      .src("src/img/svg-sprite/*.svg")
      .pipe(p.gp.svgSprite(config))
      .pipe(p.gulp.dest(p.paths.project + "/img"));
  });
};
