"use strict";

const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const clean = require("gulp-clean-css");

// concatenates and minifies JavaScript files
gulp.task("scripts", function () {
    gulp.src(["js/circle/autogrow.js", "js/circle/circle.js", "js/global.js"])
    .pipe(concat("all.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/scripts"));
});

// compliles SCSS files into CSS, then concatenates and minifies them
gulp.task("styles", function () {
    gulp.src("sass/global.scss")
    .pipe(sass())
    .pipe(concat("all.min.css"))
    .pipe(clean())
    .pipe(gulp.dest("dist/styles"));
});

gulp.task("default", ["build"], function () {
    // will be used to run gulp build task and serve project to local host
});