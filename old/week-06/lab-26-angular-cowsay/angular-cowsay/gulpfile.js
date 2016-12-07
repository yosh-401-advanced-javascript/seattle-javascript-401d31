'use strict'

const gulp = require('gulp')
const webpack = require('webpack-stream')
const paths = {
  entry: `${__dirname}/js/index.js`
  , html: `${__dirname}/html/**/*.html`
  , css: `${__dirname}/css/**/*.css`
  , public: `${__dirname}/public`
};

gulp.task('webpack', () => {
  gulp.src(paths.entry)
  .pipe(webpack({
    output: {filename: 'bundle.js'}
  }))
  .pipe(gulp.dest(paths.public))
})

gulp.task('copy:css', () => {
  gulp.src(paths.css)
  .pipe(gulp.dest(paths.public))
})

gulp.task('copy:html', () => {
  gulp.src(paths.html)
  .pipe(gulp.dest(paths.public))
})

gulp.task('default', ['webpack', 'copy:css', 'copy:html'])
