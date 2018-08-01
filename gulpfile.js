"use strict";

const gulp = require("gulp");
const maps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const clean = require("gulp-clean-css");

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
    .pipe(clean())
    .pipe(maps.write("./"))
    .pipe(gulp.dest("dist/styles"));
});

// gulp build command will run scripts and styles
gulp.task("build", ["scripts", "styles"], function () {

});

gulp.task("default", ["build"], function () {
    // will be used to run gulp build task and serve project to local host
});