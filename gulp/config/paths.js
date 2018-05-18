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
    img: [source + "/img/**/*.{png,jpg,jpeg,gif}", "!src/img/png-sprite/*.*", "!src/img/svg-sprite/*.*"],
    svg: source + "/img/svg/*.svg",
    spritePNG: source + "/img/png-sprite/*.png",
    spriteSVG: source + "/img/svg-sprite/*.svg",
  },
  build: {
    styles: build + "/css",
    html: build,
    js: build + "/js",
    fonts: build + "/fonts",
    img: build + "/img",
    svg: build + "/img/svg",
    spritePNG: build + "/img/sprite",
    spriteSVG: build + "/img",
    spriteCSS: source + "/sass/mixins", // Генерируемый файл с данными для PNG-спрайта
  },
  watch: {
    sass: source + "/sass/**/*.scss",
    pug: source + "/pug/**/*.pug",
    js: source + "/js/**/*.*",
    fonts: source + "/fonts/**/*.*",
    img: source + "/img/**/*.*",
    svg: source + "/img/svg/*.svg",
    spritePNG: source + "/img/png-sprite",
    spriteSVG: source + "/img/svg-sprite",
  },
};
