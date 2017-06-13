var app = {};
app.ajax = 4;
app.ui = {
    particle:false,
    particles:function(){
        if($('body').hasClass('white')){
            nb = 85;
        }else {
            nb = 95;
        }
        particlesJS('particles-js', {
            particles: {
                color: '#6EE7E0',
                color_random: false,
                shape: 'circle', // "circle", "edge" or "triangle"
                opacity: {
                    opacity: 0.8,
                    anim: {
                        enable: true,
                        speed: 1.5,
                        opacity_min: 0,
                        sync: false
                    }
                },
                size: 2,
                size_random: true,
                nb: nb,
                line_linked: {
                    enable_auto: true,
                    distance: 130,
                    color: '#819a99', // particles line color
                    opacity: 1,
                    width: 2,
                    condensed_mode: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 600
                    }
                },
                anim: {
                    enable: true,
                    speed: 4
                }
            },
            interactivity: {
                enable: true,
                mouse: {
                    distance: 500
                },
                detect_on: 'window', // "canvas" or "window"
                mode: 'grab', // "grab" of false
                line_linked: {
                    opacity: .5
                },
                events: {
                    onclick: {
                        enable: true,
                        mode: 'push', // "push" or "remove"
                        nb: 2
                    },
                    onresize: {
                        enable: true,
                        mode: 'out', // "out" or "bounce"
                        density_auto: false,
                        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                    }
                }
            },
            /* Retina Display Support */
            retina_detect: true
        });
    }
};

$(function () {
    app.ui.particles();
    if (Modernizr.localstorage) {
        if(localStorage.getItem("color") == "white") {
            $('body').addClass('white');
        }
    }
});

var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

//scroll

$(window).on("load",function() {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.5;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

        $('.content_container').each(function() {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
                    $(this).css( {
                        transition: 'opacity 0.6s linear',
                        opacity: 1
                    } );

                } else {

                    $(this).css( {
                        transition: 'opacity 0.6s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            }
        });
    }
    $('.content_container').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
});


// smoothscroll p2
$(document).ready(function(){
    $("a").on('click', function(event) {

        if (this.hash !== "page2") {
            // event.preventDefault();  deze funtie zorgde ervoor dat alle andere links op mijn pagina opeens niet meer werkte.

            var hash2 = this.hash;

            $('html, body').animate({
                scrollTop: $(hash2).offset().top
            }, 800, function(){

                window.location.hash = hash2;
            });
        }
    });
});

//smoothscroll p3
$(document).ready(function(){

    $("a").on('click', function(event) {

        if (this.hash !== "page3") {

            var hash3 = this.hash;

            $('html, body').animate({
                scrollTop: $(hash3).offset().top
            }, 800, function(){

                window.location.hash = hash3;
            });
        }
    });
});