
    /*
    Base
    ------------------------------------------------ */

        define(
            [
            	'jquery',
            	'waypoints'
            ], 

            function($, waypoints) {
            	'use strict';
            	
            		var mobile = (/iphone|ipad|Android|webOS|iPod|BlackBerry|Windows Phone|ZuneWP7/gi).test(navigator.appVersion);
            	
            		var el = {
        				body: 'body',
        				go_to: 'a.js-goto'
            		};

                /*
                Goto, example <a href="#target" class="goto">goto target</a>
                ------------------------------------------------ */

    				$(document).on('click touchstart', el.go_to, function(e) {
        				e.preventDefault();
        					$('body, html').animate({scrollTop: $( $(this).attr('href') ).position().top }, 1200);
    				});
    				
                /*
                Menu
                ------------------------------------------------ */
	
					$(document).on('click', "#open-menu", function(e) {
						openMenu();
						e.preventDefault();
					});


					$(document).on('click', "#close-menu", function(e) {
						closeMenu();
						e.preventDefault();
					});


                /*
                Functions
                ------------------------------------------------ */
            		var detectWaypoints = function() {
                        $(".data-waypoint").waypoint(function() {
                        	console.log('detect! '+$(this).data('animation'));
                            $(this).addClass('animated ' + $(this).data('animation'));
                        }, {
                            offset: '80%'
                        });
            		}

                	if( !Modernizr.cssanimations || mobile ) {
                		$(".faded").css({opacity: 1});
                	} else {
                		$(".faded").css({opacity: 1});
                		//detectWaypoints();
                	}

					var openMenu = function() {
						$(".primary-nav").addClass('active');
						$(el.body).addClass('no-scroll');
					};
			
					var closeMenu = function() {
						$(".primary-nav").removeClass('active');
						$(el.body).removeClass('no-scroll');
					};
                	
            		
            }
        );