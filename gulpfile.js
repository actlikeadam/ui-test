'use strict';

const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');

/**
 * SASS to CSS
 */
const sassTocss = () => {
  return (
    src('scss/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(cssnano())
      .pipe(dest('www/css'))
  );
}

exports.default = () => {
  watch('scss/**/*.scss', sassTocss);
};
