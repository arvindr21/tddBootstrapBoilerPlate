/*!
 * A LESS driven Bootstrap boilerplate integrated with Grunt, Bower, Jasmine, Istanbul & Karma
 * https://github.com/arvindr21/bootstrapBoilerPlate
 *
 * author : Arvind Ravulavaru
 * purpose : Karma config file
 * 
 */


module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
	// hard dependency 
	'bower_components/modernizr/modernizr.js', // load modernizr
	'bower_components/jquery/jquery.js',  // load jQuery
	
	// load all bootstrap files 
	'bower_components/bootstrap/js/affix.js', 
	'bower_components/bootstrap/js/alert.js', 
	'bower_components/bootstrap/js/dropdown.js', 
	'bower_components/bootstrap/js/tooltip.js', 
	'bower_components/bootstrap/js/modal.js', 
	'bower_components/bootstrap/js/transition.js', 
	'bower_components/bootstrap/js/button.js', 
	'bower_components/bootstrap/js/popover.js', 
	'bower_components/bootstrap/js/carousel.js', 
	'bower_components/bootstrap/js/scrollspy.js', 
	'bower_components/bootstrap/js/collapse.js', 
	'bower_components/bootstrap/js/tab.js',
		
	// source files
	'app/scripts/*.js',
	// Specs/Test Cases	
	'test/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome_without_security'],

	 // you can define custom flags
    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      }
    },


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

	plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
			'karma-safari-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
            ]
  });
};
