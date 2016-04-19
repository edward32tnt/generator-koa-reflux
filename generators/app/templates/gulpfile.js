var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var clean = require('gulp-clean');
var webpack = require('webpack-stream');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var browserSync = require('browser-sync').create()
var concat = require('gulp-concat');

gulp.task('clean', function() {
  return gulp.src('dist/**/*')
    .pipe(clean());
})

gulp.task('less', function() {
  return gulp.src('client/css/**/*')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.stream())
})

gulp.task('webpack', function() {
  return gulp.src([])
    .pipe(webpack(require('./webpack.config')))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.stream())
})

gulp.task('default', ['clean', 'less', 'webpack'], function() {
  nodemon({
    ext: 'js',
    script: './server/server.js',
    watch: ['server'],
  }).on('start', function() {
  }).on('restart', function() {
    console.log('server restart!')
  })
  browserSync.init({
    proxy: { target: 'localhost:'+ (process.env.PORT || 9000), }
  })

  gulp.watch(['client/**/*'], ['webpack', 'less'])
})

gulp.task('production', ['clean', 'less', 'webpack']);
