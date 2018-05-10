module.exports = function () {
  p.gulp.task("svg-sprite", function () {
    config = {
      mode: {
        symbol: {
          sprite: "svg-sprite.svg",
          render: {
            scss: {
              dest: "../../../src/sass/mixins/_svg-sprite.scss",
              template: "src/sass/mixins/_svg-sprite-template.scss"
            }
          }
        }
      }
    }; // Activate CSS output (with default options)

    return p.gulp
      .src("src/img/svg-sprite/*.svg")
      .pipe(p.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe(p.gp.cheerio({
        run: function (elem) {
          elem('[fill]').removeAttr('fill');
          elem('[stroke]').removeAttr('stroke');
          elem('[style]').removeAttr('style');
          elem('style').remove();
        },
        parserOptions: {
          xmlMode: true
        }
      }))
      .pipe(p.gp.replace('&gt;', '>'))
      .pipe(p.gp.svgSprite(config))
      .pipe(p.gulp.dest(p.paths.project + "/img"));
  });
};