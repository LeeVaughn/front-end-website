# Front End Website Deployed with Gulp

This project uses a Gulp build process to deploy a front-end website.

## Motivation

This project was created as a part of the Treehouse Full Stack JavaScript Techdegree program.

## Features

* Uses a Gulp build process to deploy a front-end website
* Concatenates and minifies JavaScript files
* Compiles SCSS into a concatenated and minified CSS file
* Generates source maps for JavaScript and CSS files
* Compresses JPEG and PNG files
* Moves all source files to dist directory
* Dist directory can be removed with the ```gulp clean``` command
* The ```gulp``` command runs the build task as a dependency and starts the project on a local server
* The ```gulp``` command automatically calls the ```gulp styles``` task when changes are made to Sass files
* When the server is running, the browser will reload anytime there are changes made to a Sass file
* Running ```npm install``` installs relevant dependencies

## To Run

* Download project files by running ```git clone https://github.com/LeeVaughn/front-end-website```
* Navigate to the project folder
* Install dependencies with ```npm install```
* The ```gulp build``` command can be used to deploy the source files to the dist directory
* The ```gulp``` command uses the build task as a dependency and starts a local server on port 3000
* The webpage will automatically open in a browser window when the ```gulp``` command is run

## Links

* Project Homepage - coming soon!
* [Repository](https://github.com/LeeVaughn/front-end-website)

## Author

[Daniel Lee Vaughn](https://github.com/LeeVaughn)