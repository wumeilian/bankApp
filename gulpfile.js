var gulp = require('gulp');

//文件重命名
rename = require('gulp-rename');
//js文件压缩
uglify = require("gulp-uglify");
//sass编译
sass = require("gulp-sass");
//css文件压缩
minifyCss = require("gulp-minify-css");

livereload = require('gulp-livereload');

del = require('del');

gulp.task('clean', function(cb) {
    del(['asset/css', 'asset/js', 'asset/images'], cb);
});

//编译Sass 压缩CSS
gulp.task('styles', function () {
    gulp.src('build/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('asset/css'))
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('asset/css'));
});

// Scripts
gulp.task('scripts', function() {
    gulp.src('build/js/**/*.js')
        // .pipe(jshint())
        // .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('asset/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('asset/js'));
    // console.log('script over');
});

// Images
gulp.task('images', function() {
    gulp.src('build/images/**/*')
        .pipe(gulp.dest('asset/images'));
});


// Watch
gulp.task('watch', ['styles', 'scripts','images'], function() {

    // Watch .scss files
    gulp.watch('build/css/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('build/js/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('build/images/**/*', ['images']);

    // Create LiveReload server
    livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['build/**']).on('change', livereload.changed);

});

// gulp.task('default',function(){
//     gulp.start('clean','styles', 'scripts', 'images','watch');
// });
//默认任务
gulp.task('build', ['styles', 'scripts','images']);
