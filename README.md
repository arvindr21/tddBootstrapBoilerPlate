LESS Driven Bootstrap Boiler Plate
==================================

Impressed by a lot of scaffolding templates, I have come with my own with some custom settings. 

What does this package have? 
----------------------------
Package Management
-  [Node](http://nodejs.org)
-  [Bower](http://bower.io) 

Task Runner
-  [Grunt](http://gruntjs.com)

Grunt Tasks
- [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy/blob/master/README.md) : Copy files across folders
- [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat/blob/master/README.md) : Concat multiple files
- [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify/blob/master/README.md) : Minify files
- [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less/blob/master/README.md) : Compiles LESS files to CSS
- [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint/blob/master/README.md) :JS file validator
- [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin/blob/master/README.md) : Compress CSS files
- [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect/blob/master/README.md) : This task was designed to be used in conjunction with others tasks that are run immediately afterwards, like the grunt-contrib-qunit plugin qunit task.
- [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean/blob/master/README.md) : Cleans files and folders
- [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin/blob/master/README.md) : Minify HTML
- [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin/blob/master/README.md) : Minify PNG, JPEG and GIF images
- [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch/blob/master/README.md) : Run predefined tasks whenever watched file patterns are added, changed or deleted.
- [grunt-rev](https://github.com/cbas/grunt-rev/blob/master/README.md) : Static file asset revisioning through content hashing
- [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer/blob/master/README.md) : Autoprefixer parses CSS and adds vendor-prefixed CSS properties using the Can I Use database.
- [grunt-usemin](https://github.com/yeoman/grunt-usemin/blob/master/README.md) : Replaces references to non-optimized scripts or stylesheets into a set of HTML files (or any templates/views).
- [grunt-modernizr](https://github.com/Modernizr/grunt-modernizr/blob/master/README.md) : Sifts through your project files, gathers up your references to Modernizr tests and outputs a lean, mean Modernizr machine.
- [grunt-newer](https://github.com/tschaub/grunt-newer/blob/master/README.md) : Configure Grunt tasks to run with newer files only. The newer task will configure another task to run with src files that are a) newer than the dest files or b) newer than the last successful run (if there are no dest files).
- [grunt-svgmin](https://github.com/sindresorhus/grunt-svgmin/blob/master/readme.md) : Minify SVG using SVGO
- [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent/blob/master/readme.md) : Run grunt tasks concurrently
- [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks/blob/master/readme.md) : Load multiple grunt tasks using globbing patterns
- [time-grunt](https://github.com/sindresorhus/time-grunt/blob/master/readme.md) : Displays the execution time of grunt tasks
- [jshint-stylish](https://github.com/sindresorhus/jshint-stylish/blob/master/readme.md) : Stylish reporter for JSHint

AMD
- [requirejs](http://requirejs.org/) : A JavaScript file and module loader
- [karma-requirejs](http://karma-runner.github.io/0.8/plus/RequireJS.html) : Requirejs for Karma


Testing Frameworks

Karma - Jasmine
- [karma](http://karma-runner.github.io/0.10/index.html) : A spectacular Test Runner for Javascript
- [grunt-karma](https://github.com/karma-runner/grunt-karma/blob/master/README.md) : Grunt plugin for Karma 
- [karma-jasmine](https://github.com/karma-runner/karma-jasmine/blob/master/README.md) : Adapter for the Jasmine testing framework.
- [grunt-contrib-jasmine](https://github.com/gruntjs/grunt-contrib-jasmine/blob/master/README.md) : Run jasmine specs headlessly through PhantomJS.

karma Pre-processors
- [karma-html2js-preprocessor](https://github.com/karma-runner/karma-html2js-preprocessor/blob/master/README.md) : This plugin ships with Karma by default. Preprocessor for converting HTML files into JS strings.
- [karma-coffee-preprocessor](https://github.com/karma-runner/karma-coffee-preprocessor/blob/master/README.md) : Preprocessor to compile CoffeeScript on the fly.

Karma Browser Launchers
- [karma-script-launcher](https://github.com/karma-runner/karma-script-launcher/blob/master/README.md) : Launcher for a shell script.
This plugin allows you to use a shell script as a browser launcher. The script has to accept a single argument - the url that the browser should open.
- [karma-firefox-launcher](https://github.com/karma-runner/karma-firefox-launcher/blob/master/README.md) : Launcher for Mozilla Firefox.
- [karma-phantomjs-launcher](https://github.com/karma-runner/karma-phantomjs-launcher/blob/master/README.md) : Launcher for PhantomJS.
- [karma-chrome-launcher](https://github.com/karma-runner/karma-chrome-launcher/blob/master/README.md) : Launcher for Google Chrome and Google Chrome Canary.
- [karma-opera-launcher](https://github.com/karma-runner/karma-opera-launcher/blob/master/README.md) : Launcher for Opera.
- [karma-safari-launcher](https://github.com/karma-runner/karma-safari-launcher/blob/master/README.md) : Launcher for Safari.
- [karma-ie-launcher](https://github.com/karma-runner/karma-ie-launcher/blob/master/README.md) : Launcher for Internet Explorer.

Karma reporter 
- [karma-junit-reporter](https://github.com/karma-runner/karma-junit-reporter/blob/master/README.md) : Reporter for the JUnit XML format. 

Mocha (Added as another option)
- [grunt-mocha](https://github.com/kmiyashiro/grunt-mocha/blob/master/README.md) : Automatically run client-side mocha specs via grunt/mocha/PhantomJS


Code coverage Framework
- [grunt-template-jasmine-istanbul](https://github.com/maenu/grunt-template-jasmine-istanbul/blob/master/README.md) : Code coverage template mix-in for grunt-contrib-jasmine, using istanbul
