module.exports = function () {
	p.gulp.task("add-module", function (callback) {

		if (p.gp.util.env.name) {
			result = p.gulp.src("src/components/_template/*.*")
				.pipe(p.gp.replace("_template", p.gp.util.env.name))
				.pipe(p.gp.rename(function (path) {
					path.basename = p.gp.util.env.name;
				}))
				.pipe(p.gulp.dest("src/components/" + p.gp.util.env.name));
		}
		callback()

	});
};