const source = "src"; // Название папки с исходными файлами
const build = "build"; // Название папки с готовыми файлами

// Эксплоьтоуем пути для gulpfile.js
module.exports = {
  project: build,
  src: {
    scss: source + "/sass/style.scss",
    pug: source + "/pug/pages/*.pug",
    js: source + "/js/*.js",
    fonts: source + "/fonts/*.{woff,woff2,eot,ttf}",
    img: source + "/img/*.{png,jpg,jpeg,gif}"
  },
  build: {
    styles: build + "/css",
    html: build,
    js: build + "/js",
    fonts: build + "/fonts",
    img: build + "/img"
  },
  watch: {
    sass: "src/sass/**/*.scss",
    pug: "src/pug/**/*.pug",
    js: "src/js/**/*.*",
    fonts: "src/fonts/**/*.*",
    img: "src/img/**/*.*"
  }
};
