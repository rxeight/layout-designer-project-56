const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

const browserSyncJob = () => {
  browserSync.init({
    server: "src/"
  });
  watch('src/scss/**/*.scss', buildSass);
};

const buildSass = () => {
  console.log('Компиляция SASS');

  return src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('src/css'))
    .pipe(browserSync.stream());
}

exports.server = browserSyncJob;