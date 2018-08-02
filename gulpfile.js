"use strict";

const gulp = require("gulp");
const maps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const clean = require("del");

// concatenates and minifies JavaScript files
gulp.task("scripts", function () {
    return gulp.src(["js/circle/autogrow.js", "js/circle/circle.js", "js/global.js"])
        .pipe(maps.init())
        .pipe(concat("all.min.js"))
        .pipe(uglify())
        .pipe(maps.write("./"))
        .pipe(gulp.dest("dist/scripts"));
});

// compliles SCSS files into CSS, then concatenates and minifies them
gulp.task("styles", function () {
    return gulp.src("sass/global.scss")
        .pipe(maps.init())
        .pipe(sass())
        .pipe(concat("all.min.css"))
        .pipe(cleanCSS())
        .pipe(maps.write("./"))
        .pipe(gulp.dest("dist/styles"));
});

// watches for changes to Sass files and then runs the gulp styles command
gulp.task("watchSass", function () {
    gulp.watch(["sass/**/*.scss", "sass/**/*.sass"], ["styles"]);
});

// removes previously created dist directory and contents
gulp.task("clean", function () {
    return del("dist");
});

// gulp build command will run scripts and styles
gulp.task("build", ["scripts", "styles"], function () {

});

gulp.task("default", ["build"], function () {
    // will be used to run gulp build task and serve project to local host
});
