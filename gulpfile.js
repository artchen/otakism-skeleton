var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');

var path = {
  DATA: [
    'src/data/**'
  ],
  HTML: [
  	'src/*.html', 
  	'src/views/**/*.html', 
  	'src/views/*.html',
  	'src/fonts/**/*',
  	'src/favicon.ico'
  ],
  JS: [
  	'src/js/*.js', 
  	'src/js/**/*.js'
  ],
  CSS: [
	  'node_modules/angular-material/angular-material.css'
  ],
  LESS: [
  	'src/less/style.less'
  ],
  LESS_WATCH: [
  	'src/less/*.less',
  	'src/less/**/*.less'
  ],
  IMG: [
    'src/img/**'
  ],
  VENDOR: [
  	'node_modules/angular/angular.js', 
  	'node_modules/angular-aria/angular-aria.js',
	  'node_modules/angular-animate/angular-animate.js', 
    'node_modules/angular-sanitize/angular-sanitize.js',
    'node_modules/angular-material/angular-material.js',
	  'node_modules/angular-ui-router/release/angular-ui-router.js',
	  'node_modules/angular-loading-bar/build/loading-bar.js'
  ],
  DIST: 'public'
};

var all_tasks = ['lint', 'less', 'vendor', 'js', 'html', 'img', 'data'];

gulp.task('clean', function() {
  return gulp.src(path.DIST + '/*', {read: false})
    .pipe(clean());
});

gulp.task('lint', function() {
  return gulp.src(path.JS)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('less', function () {
  gulp.src(path.LESS)
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest(path.DIST + '/css'));
  gulp.src(path.CSS)
    .pipe(concat('vendor.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(path.DIST + '/css'));
});

gulp.task('js', function () {
  gulp.src(path.JS)
  	.pipe(sourcemaps.init())
	  .pipe(concat('app.js'))
	  .pipe(ngAnnotate())
	  .pipe(uglify())
	.pipe(sourcemaps.write())
    .pipe(gulp.dest(path.DIST + '/js'));
});

gulp.task('vendor', function () {
	gulp.src(path.VENDOR)
  	.pipe(concat('vendor.js'))
    .pipe(gulp.dest(path.DIST + '/js'));
});

gulp.task('html', function() {
  gulp.src(path.HTML, {base: 'src'})
    .pipe(gulp.dest(path.DIST));
});

gulp.task('img', function(){
  gulp.src(path.IMG)
    .pipe(imagemin())
    .pipe(gulp.dest(path.DIST + '/img'));
});

gulp.task('data', function() {
  gulp.src(path.DATA)
    .pipe(gulp.dest(path.DIST + "/data"));
});

gulp.task('watch', function () {
  gulp.watch(path.LESS_ALL, ['less']);
  gulp.watch(path.VENDOR, ['vendor']);
  gulp.watch(path.JS, ['lint', 'js']);
  gulp.watch(path.HTML, ['html']);
  gulp.watch(path.IMG, ['img']);
  gulp.watch(path.DATA, ['data']);
});

gulp.task('default', ['clean'], function() {
  gulp.start(all_tasks);
});
