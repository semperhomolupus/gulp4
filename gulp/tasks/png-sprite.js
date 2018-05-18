module.exports = function() {
  const p = global.p;
  p.gulp.task("png-sprite", function() {
    // Спрайты из PNG
    var data = p.gulp
      .src(p.paths.src.spritePNG)
      .pipe(p.gp.cache(p.gp.tinypngNokey()))
      .pipe(
        p.spritesmith({
          imgName: "png-sprite.png",
          cssName: "_png-sprite.scss",
          cssFormat: "scss",
          imgPath: "../img/sprite/png-sprite.png",
          padding: 20,
          cssVarMap: function(sprite) {
            sprite.name = "sprite-" + sprite.name; // им файла + конструкция 'sprite-' в начале имени
          },
        })
      );

    var imgStream = data.img.pipe(p.gulp.dest(p.paths.build.spritePNG));
    var cssStream = data.css.pipe(p.gulp.dest(p.paths.build.spriteCSS));

    return p.merge(imgStream, cssStream);
  });
};
