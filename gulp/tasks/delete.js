module.exports = function() {
  plugins.gulp.task("delete", function(callback) {
    plugins.del.sync("build");
    callback();
  });
};
