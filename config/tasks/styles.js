import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import gif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';

import { handleError, liveEnv, project } from '../index';

const sassPaths = project.sourceDirectory + '/**/*.s+(a|c)ss';
const cssFileName = project.cssFileName;
const dest = project.distDirectory;

export default function () {
  return function () {
    return gulp
      .src(sassPaths)
      .pipe(plumber({ errorHandler: handleError }))
      .pipe(gif(!liveEnv, sourcemaps.init()))
      .pipe(sass({
          outputStyle: 'compressed',
        })
      )
      .pipe(autoprefixer())
      .pipe(concat(cssFileName))
      .pipe(gif(!liveEnv, sourcemaps.write()))
      .pipe(gulp.dest(dest));
  };
}
