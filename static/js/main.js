

        /*
        Require
        ------------------------------------------------ */
        
            require.config({

            	paths: {
            		// libs
						domReady: 		'lib/domReady',
						jquery: 		'lib/jquery',
						Modernizr: 		'lib/modernizr',
						waypoints: 		'lib/waypoints',
						
						fpxa: 			'lib/500px',
						photoset: 		'lib/jquery.photoset-grid',
						colorbox: 		'lib/jquery.colorbox',

            		// core
            			base: 			'core/base',
            			resize: 		'core/resize',
            			social: 		'core/social',
            			slider: 		'core/slider'
            	},
            	shim: {
            		Modernizr: {
                		exports: 'Modernizr'
            		},
            		waypoints: {
            			deps: ['jquery']
            		},
            		photoset: {
            			deps: ['jquery']
            		},
            		colorbox: {
            			deps: ['jquery']
            		}
            	}
            });
        
        /*
        Modules
        ------------------------------------------------ */
			
			require(['Modernizr']);        
            require(['base']);
            require(['social']);
            
        /*
        500px
        ------------------------------------------------ */

            require(['domReady!', 'fpxa', 'photoset', 'colorbox'], function() {

				_500px.init({
					sdk_key: '94031710488237b06315570e2f960a9c01eefe92'
				});
				
				var images = "";

				_500px.api('/photos', { feature: 'user', user_id: '2860815', image_size: 3 }, function (response) {
					$.each(response.data.photos, function(index, value) {

						var $img = $('<img data-id="'+value.id+'" class="js--colorbox-grp">');
							$img.attr('src', value.image_url);
							$img.appendTo('.js--photoset');
					});

					$(".js--photoset").photosetGrid().show();
				});

				/*
				var loadSingleImage = function() {
					_500px.api('/photos/'+id, { image_size: 4 }, function (r) {
						var $img = $('<img>');
							$img.attr('src', r.data.photo.image_url);
							console.log($img);
					});
				}
				*/
            });

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

