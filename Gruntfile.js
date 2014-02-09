/*!
 * A LESS driven Bootstrap boilerplate integrated with Grunt, Bower, Jasmine, Istanbul & Karma
 * https://github.com/arvindr21/bootstrapBoilerPlate
 *
 * author : Arvind Ravulavaru
 * purpose : A Grunt task-config file to maintain all the tasks. Automating the Automator!! 
 * 
 */

'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    //require('load-grunt-tasks')(grunt);
	
	//https://github.com/maenu/grunt-template-jasmine-istanbul/issues/8
	 require('load-grunt-tasks')(grunt, {
      pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
    });


    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        baseProject: {
            // Configurable paths
            app: 'app',
            dist: 'dist',
			test : 'test',
			coverage : 'coverage',
			bower_components : 'bower_components'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= baseProject.app %>/scripts/{,*/}*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            jstest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['test:watch']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            less: {
                files: ['<%= baseProject.bower_components %>/**/*.less'],
                tasks: ['less:server', 'autoprefixer']
            },
            styles: {
                files: ['<%= baseProject.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= baseProject.app %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= baseProject.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= baseProject.app %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        '.tmp',
                        'test',
                        '<%= baseProject.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= baseProject.dist %>',
                    livereload: false
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= baseProject.dist %>/*',
                        '!<%= baseProject.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= baseProject.app %>/scripts/{,*/}*.js',
                '!<%= baseProject.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },


        /*// Mocha testing framework configuration options
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
                }
            }
        },*/
		jasmine: {
			pivotal: {
			  src: 'app/scripts/**/*.js',
			  options: {
				specs: 'test/spec/*-Spec.js',
				helpers: 'test/spec/*Helper.js'
			  }
			},
			coverage: {
				src: '<%= baseProject.app%>/scripts/**/*.js',
				options: {
					specs: '<%= baseProject.test %>/spec/*-Spec.js',
					template: require('grunt-template-jasmine-istanbul'),
					templateOptions: {
						coverage: '<%= baseProject.coverage %>/coverage.json',
						report: [
							{
								type: 'html',
								options: {
									dir: '<%= baseProject.coverage %>/html'
								}
							}
						]
					}
				}
			}
		  },
		 karma: {
		  options: {
			configFile: 'karma.conf.js'
		  },
		  continuous: {
			singleRun: false,
			browsers: ['PhantomJS']
		  },
		  dev: {
				reporters: 'progress',
				browsers: ['Chrome_without_security','Safari']
		  }
		},
		 // Compiles LESS to CSS and generates necessary files if requested
        less: {
            options: {
                paths: ['<%= baseProject.bower_components %>'],
            },
            dist: {
                options: {
                    yuicompress: true,
                    report: 'gzip'
                },
                files: {
                    '.tmp/styles/main.css': '<%= baseProject.app %>/styles/main.less'
                }
            },
            server: {
                options: {
                    sourceMap: false,
                    sourceMapBasepath: '<%= baseProject.app %>/',
                    sourceMapRootpath: '../'
                },
                files: {
                    '.tmp/styles/main.css': '<%= baseProject.app %>/styles/main.less',
					'app/styles/main.css': '<%= baseProject.app %>/styles/main.less'
                }
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the HTML file
        'bower-install': {
            app: {
                html: '<%= baseProject.app %>/index.html',
                ignorePath: '<%= baseProject.app %>/'
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= baseProject.dist %>/scripts/{,*/}*.js',
                        '<%= baseProject.dist %>/styles/{,*/}*.css',
                        '<%= baseProject.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
                        '<%= baseProject.dist %>/styles/fonts/{,*/}*.*'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= baseProject.dist %>'
            },
            html: '<%= baseProject.app %>/index.html'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= baseProject.dist %>']
            },
            html: ['<%= baseProject.dist %>/{,*/}*.html'],
            css: ['<%= baseProject.dist %>/styles/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= baseProject.app %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= baseProject.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= baseProject.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= baseProject.dist %>/images'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= baseProject.dist %>',
                    src: '{,*/}*.html',
                    dest: '<%= baseProject.dist %>'
                }]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= baseProject.app %>',
                    dest: '<%= baseProject.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'styles/fonts/{,*/}*.*',
                        'bower_components/bootstrap/fonts/*.*'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= baseProject.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },


        // Generates a custom Modernizr build that includes only the tests you
        // reference in your app
        modernizr: {
            devFile: '<%= baseProject.bower_components %>/modernizr/modernizr.js',
            outputFile: '<%= baseProject.dist %>/scripts/vendor/modernizr.js',
            files: [
                '<%= baseProject.dist %>/scripts/{,*/}*.js',
                '<%= baseProject.dist %>/styles/{,*/}*.css',
                '!<%= baseProject.dist %>/scripts/vendor/*'
            ],
            uglify: true
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                'less:server',
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [ 
                'less:dist',
                'copy:styles',
                'imagemin',
                'svgmin'
            ]
        }
    });


    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run([target ? ('serve:' + target) : 'serve']);
    });

    grunt.registerTask('test', function (target) {
        if (target !== 'watch') {
            grunt.task.run([
                'clean:server',
                'concurrent:test',
                'autoprefixer'
            ]);
        }

        grunt.task.run([
            'connect:test',
            'jasmine:coverage',
			'karma:dev'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
		'less',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'cssmin',
        'uglify',
		'copy:dist',
        'modernizr',
        'rev',
        'usemin',
        'htmlmin',
		'newer:jshint',     
		'jasmine:coverage',
		'karma:dev'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};
