A  Boiler Plate for Test Driven Developement using LESS Bootstrap
=================================================================

Impressed & Inspired by a lot of scaffolding templates, I have come up with my own framwork, with some custom settings. 

Setup
-----
- Install Node from [here](http://nodejs.org/)
- Open a command window and run `npm -v` to validate the install
- Install git from [here](http://git-scm.com/downloads). [Needed to fetch packages using Bower]
- Verify the same by right clicking on any folder and you should be able to see the git commands (git bash, git ui, etc..)
- Install Bower `npm install bower -g` the flag `-g` is for the package to available globally
- Verify the same by running ```bower -v```
- Create a new folder and name it `boilerplate`
- Right click inside the folder and open `gitbash`
- Then execute ```git clone git@github.com:arvindr21/tddBootstrapBoilerPlate.git```
- Once the clone is completed, you will have the base files that we need to work on top of.
- Using gitbash, navigate inside `boilerplate/tddBootstrapBoilerPlate` folder and execute ```npm install && bower install```
- Wait for a couple of mins, and Bam!! all the files needed to run the app are downloaded for you. Neat  right?

Development & Build
-------------------
Now lets see what all can be done with this setup
- Open `boilerplate/tddBootstrapBoilerPlate/app` folder and launch `index.html`. You will find a sample bootstrap template loaded. Resize your browser, play around.
- Lets Make a couple of changes to the file. Open `index.html` in your favorite text editor and look for the h1 tag with text "Bootstrap starter template" and change it to "Hello World!!" and p tag content after that to "This template is awesome!! "
- Save and close the file. 
- Refresh the browser and you should see the new changes reflecting.

Lets Build the app and make it production ready (yes! production ready) 
- Now back to `gitbash`. Navigate to the root folder - `boilerplate/tddBootstrapBoilerPlate` and run `grunt build`
- This will run for around 30 secs to 1 min depending on the machine and will create a folder called `dist` short for Distribution. Ignore any errors for now.
- Now using file explorer go to `boilerplate/tddBootstrapBoilerPlate/dist` and launch `index.html`.

But.. but.. It looks the same as my dev? whats the difference you ask? 
- Right click on the `dist/index.html` page in your browser and "View Source". -- What!! yes, your html is minified! 
- And so are your js/css files. They are bundled and minified 

JS

- modernizr.js
- vendor.js
- plugins.js
- main.js

CSS

- main.js

With jshint's code quality testing, dependency management, autoprefixing & file hashing (for browser caching)!
- You can compare your `app/index.html` with `dist/index.html` and also their respective js and css.

What all can Grunt do?
======================
Grunt is a very powerful task runner that will do what you say (& do mind your tone.. Grunt is pretty serious). 
Handling LESS changes
--------------------
- Lets say that we are trying to build a custom theme for our application. So lets leverage the power of LESS by defining variables, mixins etc. 
- Now for fun, lets change the background of the page. We will naviagate to ```boilerplate\tddBootstrapBoilerPlate\bower_components\bootstrap\less```
- Find a file called `variables.less` and open it in your favourite editor. 
- Search for `@body-bg` and update the value from `#fff` to `#eee` a tinge of gray.
- Now wat? Now, we build all the bootstrap less files to build the `bootstrap.css` again.  
- Okay, back to `gitbash` and to the root folder [from now on the root folder is `boilerplate\tddBootstrapBoilerPlate`] and run `grunt less`. Wait a few seconds and command prompts back. No errors cool! our css file is built. 
- Awesome lets head back app/index.html and launch it. Wow! the background is no more white! yay!
- Now, to build after every single change is kind of boring.. so lets ask grunt to do that. Oh!! can I do that?? Yes! ofcourse you can! 
- Now back to `gitbash` and run `grunt watch`. You see a message "Running 'watch' task" 
[The boilerplate has already been configured to watch for changes. You can check `Gruntfile.js` in the root folder for a whole bunch of configs]
- Lets go back to `variables.less` and lets change the top banner color from Black to say CadetBlue (#5F9EA0)? 
- Search for `@navbar-inverse-bg` and replace the value from `#222` to `#5F9EA0`, save the file and hurry back to the bash.
- You can see a message `File "bower_components\bootstrap\less\variables.less" changed.` and grunt will invoke the `less` task to rebuild our files. 
- Back to app/index.html and refresh. Bam!! our header is changed! 
You can play around to get a hang of both grunt and less. 
Once done press `ctrl + c` to stop the watch.

Running test cases
------------------
In a Test Driven Development environment, executing test cases manually again and again is a painful & boring. So lets see how we can leverage Grunt for this.

Our mantra here

`Write s Test Case --> Watch it Fail --> Fix it --> Watch it pass --> Refactor the code`

- Back to `gitbash`, lets run `grunt jasmine`. Jasmine is our unit testing framework.
- You will see a few lines roll by and you will see a green tick and `says hello`. This is a sample test case, that comes out of box with this framework. Neat right? 

Lets make some changes and see what all can we do with Grunt + TDD + Jasmine
- Back to `gitbash` run `grunt watch`, let grunt watch for our changes and run test cases. 
- Using file explorer navigate to `boilerplate\tddBootstrapBoilerPlate\test\spec` and open `Test-spec.js` in your favorite editor.
- For a quick intro, we will replace `expect(helloWorld()).toEqual("Hello world!");` to `expect(helloWorld()).toEqual("Hello Jasmine & Grunt!");` save and file and run back to `gitbash`
- You will see that grunt has detected changes to our file, and since it is a spec file and not a less file, it ran jasmine to validate our changes. But! our test case failed. 
- Jasmine says `Expected 'Hello world!' to equal 'Hello Jasmine & Grunt!'. (1)`
- So how do we fix it? Lets navigate to `boilerplate\tddBootstrapBoilerPlate\app\scripts` and open `main.js`. Ahh! here is our source which we are testing.
- Lets change the return statement from `return 'Hello world!';` to `return 'Hello Jasmine & Grunt!';` and save our file. 
- Grunt will detect the changes and will run all the test cases again and check. Since we have an integration with Karma as well, a couple of browsers will open and all the code will be tested. You can scroll through the bash to see your test pass. 
- And also you will notice a new folder in your root directory named as `coverage`. This is the output of `jasmine-istanbul`. This will provide a detail info on how much of your source code is tested. You can open `boilerplate\tddBootstrapBoilerPlate\coverage\html` and launch `index.html` file and check. For now it should be 100%.  

Cool right? A framework with practically everything {Integrated & working together} ! 

Customizing Grunt for your needs
--------------------------------
Now we are ready to open up the `Gruntfile.js`
- To get started, come to the very end of the file, you will see a few `grunt.registerTask()`. This is where we config all our tasks like `build, test, less etc..`. You can configure your own ones too and name them whatever you want! Yes whatever!!
- Lets add a new custom task 
- After the `default` task, add the following piece of code `grunt.registerTask('fixVendor', ['autoprefixer']);` Now back to `gitbash`, and run `grunt fixVendor`. 
- So what does this task do? `It parses CSS and adds vendor-prefixed CSS properties using the Can I Use database`. Now no more hassle of writting the same `background-image` 5 times one for each browser! Sweet huh?

In this way, you can customize your own tasks to increase your laziness! Well, not exactly but you can focus better on the actual business logic! And emphasise on TDD!


Appendix
========

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
- [grunt-newer](https://github.com/tschaub/grunt-newer/blob/master/README.md) : Configure Grunt tasks to run with newer files only. The newer task will configure another task to run with src files that are a) newer than the dest files or b) newer than the last successful run (if there are no dest files).
- [grunt-svgmin](https://github.com/sindresorhus/grunt-svgmin/blob/master/readme.md) : Minify SVG using SVGO
- [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent/blob/master/readme.md) : Run grunt tasks concurrently
- [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks/blob/master/readme.md) : Load multiple grunt tasks using globbing patterns
- [time-grunt](https://github.com/sindresorhus/time-grunt/blob/master/readme.md) : Displays the execution time of grunt tasks
- [jshint-stylish](https://github.com/sindresorhus/jshint-stylish/blob/master/readme.md) : Stylish reporter for JSHint

AMD
- [requirejs](http://requirejs.org/) : A JavaScript file and module loader
- [karma-requirejs](http://karma-runner.github.io/0.8/plus/RequireJS.html) : Requirejs for Karma

LESS Driven Bootstrap
- [Bootstrap](https://github.com/twbs/bootstrap/blob/master/README.md) : A RWD Framework
- [Jquery](https://github.com/jquery/jquery/blob/master/README.md) : A DOM Manipulation library

Browser Detection Library
- [grunt-modernizr](https://github.com/Modernizr/grunt-modernizr/blob/master/README.md) : Sifts through your project files, gathers up your references to Modernizr tests and outputs a lean, mean Modernizr machine.


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
