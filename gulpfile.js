//引入gulp组件
var gulp = require('gulp');
//js语法检查
var jshint = require('gulp-jshint');
//sass预处理
var sass = require('gulp-sass');
//文件合并
var concat = require('gulp-concat');
//js压缩
var uglify = require('gulp-uglify');
//输出日志用
const gutil = require('gulp-util');
//重命名
var rename = require('gulp-rename');
//删除文件
var clean = require('gulp-clean');

//server服务
var browserSync = require('browser-sync').create();

var js_file = [
  './node_modules/angular/angular.js',
  './node_modules/angular-ui-router/release/angular-ui-router.js'
];

//合并、压缩来自npm的js资源文件
gulp.task('npmscripts', function () {
  return gulp.src(js_file, {allowEmpty: true})
    .pipe(concat('npm.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(rename('npm.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

//检查脚本
gulp.task('lint', function () {
  gulp.src('./app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));

});

//编译Sass
gulp.task('sass', function () {
  console.log('sass!');
  gulp.src('./app/style/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/style'));
  gulp.src('./app/style/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/css'))
});

//合并、压缩js文件
gulp.task('scripts', function () {
  gulp.src('./app/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: "src/app/",
      index: 'src/index.html',
      port: 4200,
      host: "0.0.0.0",
      ui: {
        port: 8000
      }
    }
  });
});

//默认任务 初始化browserSync
gulp.task('default',  gulp.series('npmscripts','browserSync', function () {

//监听js变化,如过发生变化则执行lint和scripts两个task
  gulp.watch('./app/**/*.js', gulp.series('lint', 'scripts'));

//监听js变化,如过发生变化则执行sass task
  gulp.watch('./app/style/**/*.scss', gulp.series('sass'));

//监听当app文件夹下任何文件发生变化，则自动刷新浏览器
  gulp.watch('./app/**', function () {
    console.log('reload');
    browserSync.reload();
  });
}));

