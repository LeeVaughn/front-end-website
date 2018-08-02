"use strict";

const gulp = require("gulp");
const maps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const imageMin = require("gulp-imagemin");
const clean = require("del");
const runSequence = require("run-sequence");
const webserver = require("gulp-webserver");
const options = {
    src: "src",
    dist: "dist"
};

// creates source map for JavaScript files, concatenates and minifies them and saves the file to the dist folder
gulp.task("scripts", function () {
    return gulp.src([options.src + "/js/**"])
        .pipe(maps.init())
        .pipe(concat("all.min.js"))
        .pipe(uglify())
        .pipe(maps.write("./"))
        .pipe(gulp.dest(options.dist + "/scripts"));
});

// creates source map for SCSS files, compliles them to CSS, concat/minifies them and saves the file to the dist folder
gulp.task("styles", function () {
    return gulp.src(options.src + "/sass/global.scss")
        .pipe(maps.init())
        .pipe(sass())
        .pipe(concat("all.min.css"))
        .pipe(cleanCSS())
        .pipe(maps.write("./"))
        .pipe(gulp.dest(options.dist + "/styles"));
});

// optimizes images then saves them to the dist folder
gulp.task("images", function () {
    return gulp.src(options.src + "/images/**")
        .pipe(imageMin())
        .pipe(gulp.dest(options.dist + "/content"));
});

// copies index.html to dist folder
gulp.task("html", function () {
    return gulp.src(options.src + "/index.html")
        .pipe(gulp.dest("dist"));
});

// copies icons folder to dist folder
gulp.task("icons", function () {
    return gulp.src(options.src + "/icons/**", { base: "./src"})
        .pipe(gulp.dest("dist"));
});

// watches for changes to Sass files and then runs the gulp styles command
gulp.task("watchSass", function () {
    return gulp.watch(options.src + "/sass/**", ["styles"])
});

// removes previously created dist directory and contents
gulp.task("clean", function () {
    return clean("dist");
});

// runs clean task first, then runs other tasks in parallel
gulp.task("build", function () {
    return runSequence("clean", ["scripts", "styles", "images", "html", "icons"]);
});

// creates webserver on port 300 with live reload, uses build task as a dependency
gulp.task("webserver", function () {
    return gulp.src("dist")
        .pipe(webserver({
            port: 3000,
            livereload: true,
            open: true
        }));
});

// starts webserver, uses watchSass task as a dependency
gulp.task("default", ["watchSass"], function () {
    // runSequence("clean", ["scripts", "styles", "images", "html", "icons"], "webserver");
    runSequence(["build"], "webserver");
});
