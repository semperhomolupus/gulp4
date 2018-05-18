module.exports = [
  // Список наших тасков
  "./gulp/tasks/pug", // Конвертируем PUG
  "./gulp/tasks/sass", // Конвертируем SCSS to CSS + минификация
  "./gulp/tasks/js", // Минификация JS
  "./gulp/tasks/img", // Минификация картинок
  "./gulp/tasks/svg", // Минификация SVG
  "./gulp/tasks/fonts", // Копируем шрифты
  "./gulp/tasks/png-sprite", // Спрайты из PNG
  "./gulp/tasks/svg-sprite", // Спрайты из SVG
  "./gulp/tasks/delete", // Удаляем build
  "./gulp/tasks/watch", // Наблюдение за файлами
  "./gulp/tasks/reload", // Перезагрузка browserSync
  "./gulp/tasks/build", // Удаляем билд и собираем все таски
  "./gulp/tasks/server", // Таски watch + reload
];
