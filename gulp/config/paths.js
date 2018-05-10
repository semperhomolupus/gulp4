const source = "src"; // Название папки с исходными файлами
const build = "build"; // Название папки с готовыми файлами

// Экспортируем пути для gulpfile.js
module.exports = {
  project: build,
  src: {
    scss: source + "/sass/style.scss",
    pug: source + "/pug/pages/*.pug",
    js: source + "/js/*.js",
    fonts: source + "/fonts/*.{woff,woff2,eot,ttf}",
    img: [source + "/img/**/*.{png,jpg,jpeg,gif}", "!src/img/sprite/*.*"],
    sprite: source + "/img/sprite/*.png"
  },
  build: {
    styles: build + "/css",
    html: build,
    js: build + "/js",
    fonts: build + "/fonts",
    img: build + "/img",
    spritePNG: build + "/img/sprite",
    spriteCSS: source + "/sass/mixins"
  },
  watch: {
    sass: source + "/sass/**/*.scss",
    pug: source + "/pug/**/*.pug",
    js: source + "/js/**/*.*",
    fonts: source + "/fonts/**/*.*",
    img: source + "/img/**/*.*"
  }
};