module.exports = function () {
	p.gulp.task("js", function () {
		return (
			p.gulp
			.src(p.paths.src.js)
			.pipe(p.gp.newer(p.paths.build.js))
			.pipe(
				p.gp.plumber({
					errorHandler: p.gp.notify.onError(function (error) {
						return {
							title: "JavaScript - ошибка при сборке .js",
							message: error.message,
						};
					}),
				})
			) // Предотвращает остановку плагина при возникновении ошибки
			.pipe(develop ? p.gp.sourcemaps.init() : p.gp.util.noop()) // Инициализируем gulp-sourcemaps
			// .pipe(
			// 	p.gp.eslint({
			// 		fix: true,
			// 	})
			// )
			// .pipe(p.gp.eslint.format())
			.pipe(develop ?
				p.gp.util.noop() :
				p.gp.babel({
					presets: ["env"],
				})
			) // Babel
			.pipe(p.gp.concat("app.js")) // Объединяем все JS файлы в один
			.pipe(develop ? p.gp.util.noop() : p.gp.uglify()) // Минифицируем наш js файл
			.pipe(develop ? p.gp.sourcemaps.write() : p.gp.util.noop()) // Добавляем sourcemaps в файл .js
			.pipe(
				p.gp.rename({
					suffix: ".min",
				})
			) // Переименовываем
			.pipe(p.gulp.dest(p.paths.build.js))
			.pipe(
				p.browserSync.reload({
					stream: true,
				})
			)
		);
	});
};