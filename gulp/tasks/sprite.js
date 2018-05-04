module.exports = function() {
  p.gulp.task("sprite", function() {
    // Спрайты из PNG
    var data = p.gulp.src(p.paths.src.sprite).pipe(
      p.spritesmith({
        imgName: "sprite.png",
        cssName: "_sprite.scss",
        cssFormat: "scss",
        padding: 20
      })
    );

    var imgStream = data.img.pipe(p.gulp.dest(p.paths.build.spriteIMG));
    var cssStream = data.css.pipe(p.gulp.dest(p.paths.build.spriteCSS));

    return p.merge(imgStream, cssStream);
  });
};
