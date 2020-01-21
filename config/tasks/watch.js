import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';

import { handleError, project } from '../index';

// Styles
const styleSrcDir = project.sourceDirectory;
const styleDest = project.distDirectory;
const cssFileName = project.cssFileName;

export default function () {
  function styles() {
    return gulp
      .src(styleSrcDir + '/**/*.scss')
      .pipe(plumber({ errorHandler: handleError }))
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(concat(cssFileName))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(styleDest));
  }

  return function () {
    gulp.watch(styleSrcDir, styles);
  };
}
