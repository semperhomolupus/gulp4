module.exports = function() {
  plugins.gulp.task("build", function(done) {
    plugins.gulp.parallel("pug", "sass", "js", "img", "fonts");

    done();
  });
};
