module.exports = function () {
  p.gulp.task("ftp", function () {
    const conn = p.ftp.create(p.paths.FTP.params);

    return p.gulp.src(['./build/**'], {
        base: './build',
        buffer: false
      })
      .pipe(conn.dest(p.paths.FTP.sitePath));
  });
};