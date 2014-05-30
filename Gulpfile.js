// Gulpfile.js
// Require the needed packages
var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    minifyCSS = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');
    flatten = require('gulp-flatten');


// Get one .styl file and render
gulp.task('styles', function() {
  gulp.src('./src/css/styles.styl')
    .pipe(stylus({errors: true, use: [nib()]}))
    // .pipe(minifyCSS(opts))
    // .pipe(concat('styles.css'))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

gulp.task('scripts', function() {
  gulp.src('./src/js/main.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./js'))
    // .pipe(rename({suffix: '.min'}))
    // .pipe(uglify())
    // .pipe(gulp.dest('./js'))
    .pipe(livereload());
});

gulp.task('html', function() {
  gulp.src('index.html')
    .pipe(livereload());
});

gulp.task('fonts', function() {
  gulp.src('./src/fonts/imagine/*.{ttf,woff,eof,svg}')
    .pipe(flatten())
    .pipe(gulp.dest('./fonts/'));
  gulp.src('./src/fonts/Fira-master/**/*.{ttf,woff,eot}')
    .pipe(flatten())
    .pipe(gulp.dest('./fonts/Fira/'));
  gulp.src('./src/fonts/Font-awesome/**/*.{svg,ttf,woff,eot}')
    .pipe(flatten())
    .pipe(gulp.dest('./fonts/font-awesome/'));
});

// Use nib
// Require nib
var nib = require('nib');
// either a String or an Array
gulp.task('nib', function() {
  gulp.src('./css/nib.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(gulp.dest('./css/nib'));
});

gulp.task('watch', function() {
  gulp.watch('./src/css/*.styl', ['styles']);
  gulp.watch('./src/js/*.js', ['scripts']);
  gulp.watch('index.html', ['html']);
});

// Default gulp task to run
gulp.task('default', ['styles', 'scripts', 'fonts', 'watch']);
