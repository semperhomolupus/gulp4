module.exports = function() {
  p.gulp.task("sprite", function() {
    // Спрайты из PNG
    var data = p.gulp
      .src(p.paths.src.sprite)
      .pipe(p.gp.cache(p.gp.tinypngNokey()))
      .pipe(
        p.spritesmith({
          imgName: "sprite.png",
          cssName: "_sprite.scss",
          cssFormat: "scss",
          imgPath: "../img/sprite/sprite.png",
          padding: 20,
          cssVarMap: function(sprite) {
            sprite.name = "sprite-" + sprite.name; //им файла + конструкция 'sprite-' в начале имени
          }
        })
      );

    var imgStream = data.img.pipe(p.gulp.dest(p.paths.build.spriteIMG));
    var cssStream = data.css.pipe(p.gulp.dest(p.paths.build.spriteCSS));

    return p.merge(imgStream, cssStream);
  });
};
