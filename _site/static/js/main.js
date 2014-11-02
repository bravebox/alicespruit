

        /*
        Require
        ------------------------------------------------ */
        
            require.config({

            	paths: {
            		// libs
						jquery: 	'lib/jquery-1.9.1.min',
						Modernizr: 	'lib/modernizr',
						waypoints: 	'lib/waypoints',
						500px: 		'lib/500px',
        
            		// core
            			base: 		'core/base',
            			resize: 	'core/resize',
            			social: 	'core/social',
            			slider: 	'core/slider',
        
            		// cycle2			
            			cycle2_lib: 		'lib/jquery.cycle2.min',
            			cycle2_carousel: 	'lib/jquery.cycle2.carousel.min',
						cycle2_fade: 		'lib/jquery.cycle2.ie-fade.min'
            	},

            	shim: {
            		Modernizr: {
                		exports: 'Modernizr'
            		},
            		waypoints: {
            			deps: ['jquery']
            		},
            		cycle2_lib: {
            			deps: ['jquery']
            		}
            	}

            });
        
        /*
        Modules
        ------------------------------------------------ */
        
            require(['base']);
            require(['social']);

            require(['500px'], function() {
	            
				_500px.init({
					sdk_key: '94031710488237b06315570e2f960a9c01eefe92'
				});
				
				_500px.api('/photos', { feature: 'popular', page: 1 }, function (response) {
				    console.log(response.data.photos);
				});				
	            
            });




        /*
        Cycle2 sliders
        ------------------------------------------------ */

			/*require(['jquery','cycle2_lib', 'cycle2_carousel'], function() {
				$('.cycle-slider').cycle();
			});*/

        /*
        Resize
        ------------------------------------------------ */

            require(['jquery'], function() {
				$(window).on('resize', function() {
					scaleElement();
        		});

        		var scaleElement = function() {
        			var window_height = $(window).height();
        			//$('.site-leader').css({height: window_height});
        		}

        		scaleElement();            
            });


		/* modernizr
		--------------------------------------------- */

			define(['Modernizr'],function(Modernizr) {
			    'use strict';
					if(console) console.log(Modernizr);
			});