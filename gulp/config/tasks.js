module.exports = [
  "./gulp/tasks/pug", // Конвертируем PUG
  "./gulp/tasks/sass", // Конвертируем SCSS to CSS + минификация
  "./gulp/tasks/js", // Минификация
  "./gulp/tasks/img", // Минификация
  "./gulp/tasks/fonts", // Копируем
  "./gulp/tasks/delete", // Удаляем build
  "./gulp/tasks/watch", // Наблюдение за файлами
  "./gulp/tasks/reload", // Перезагрузка browsersync
  "./gulp/tasks/build", // Удаляем билд и собираем все таски
  "./gulp/tasks/server" // Таски watch + reload
];
