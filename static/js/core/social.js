define(
    ['jquery'], 
    function ($) {
    	'use strict';
    	
    	// Elements
    		var el = {
    			link_class: 'a.js-social'
    		}
    
    	// Init
			$(document).on('click', el.link_class, function(e) {
				e.preventDefault();
				var data = $(this).data();
					socialLink(data);
			});

    	// Link function
    		var socialLink = function(d) {
    			if(d.link && d.type) {
    				switch(d.type) {
    					case 'fb':
    						window.open('//www.facebook.com/share.php?s=100&p[url]=' + encodeURIComponent(d.link) + '&p[images][0]=' + encodeURIComponent(d.media) + '&p[title]=' + encodeURIComponent(d.title) + '&p[summary]=' + encodeURIComponent(d.description),'Facebook','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    					break;
    					case 'tw':
    						window.open('https://twitter.com/intent/tweet?original_referer=' + encodeURIComponent(d.link) + '&text=' + encodeURIComponent(d.title) + '%20' + encodeURIComponent(d.link),'Twitter','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    					break;
    					case 'gp':
    						window.open('//plus.google.com/share?url=' + encodeURIComponent(d.link),'GooglePlus','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    					break;
    					case 'in':
    						window.open('//www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(d.link) + '&title=' + encodeURIComponent(d.title) + '&source=' + encodeURIComponent(d.link),'LinkedIn','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    					break;
    					case 'pt':
    						window.open('//pinterest.com/pin/create/button/?url=' + encodeURIComponent(d.link) + '&media=' + encodeURIComponent(d.media) + '&description=' + encodeURIComponent(d.title),'Pinterest','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    					break;
    					default:
    						console.log('No social media link selected');
    					break;
    				}
    			} else {
    				return false;
    			}
    		};
    
    }
);