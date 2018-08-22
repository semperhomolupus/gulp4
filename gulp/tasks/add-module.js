module.exports = function () {
	p.gulp.task("add-module", function (callback) {

		if (p.gp.util.env.name) {
			result = p.gulp.src(p.paths.addModule.template)
				.pipe(p.gp.replace("_template", p.gp.util.env.name))
				.pipe(p.gp.rename(function (path) {
					path.basename = p.gp.util.env.name;
				}))
				.pipe(p.gulp.dest(p.paths.addModule.result + p.gp.util.env.name));
		}
		callback()

	});
};