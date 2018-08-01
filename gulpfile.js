"use strict";

const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

// concatenates and minifies JavaScript files
gulp.task("scripts", function () {
    gulp.src(["js/circle/autogrow.js", "js/circle/circle.js", "js/global.js"])
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/scripts"));
});

gulp.task("default", ["build"], function () {
    // will be used to run gulp build task and serve project to local host
});