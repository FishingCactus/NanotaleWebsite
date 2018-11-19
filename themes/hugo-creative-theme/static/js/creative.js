/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

var easter_egg_counter = 0;
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    $(".white-world .btn").addClass("black-world");
    $(".black-world .btn").addClass("white-world");

    $(".btn.white-world,a.btn.black-world").mouseenter(function(){
        var jq_this = $(this);
        if ( jq_this.data("animating") != "true" ) {
            if ( jq_this.hasClass("white-world") ) {
                jq_this.removeClass("white-world").addClass("black-world");
            } else {
                jq_this.removeClass("black-world").addClass("white-world");
            }
            jq_this.addClass("animated");
            jq_this.data("animating", "true");
        }
    }).find("span").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
        var jq_this = $(this);
        jq_this.parent().removeClass("animated");
        jq_this.parent().data("animating", "false");

    });

    $(".header-content-inner img").click(function() {
        easter_egg_counter++;
        if ( easter_egg_counter >= 10 ) {
            var body = $("body");
            body.toggleClass("invert");
            body.addClass("easter_egg");
            body.bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
                body.removeClass("easter_egg");
            });
            easter_egg_counter = 0;
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
