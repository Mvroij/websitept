// Maak de fotos van de slide groter

$( document ).ready(function() {
$('.tile')
// tile mouse actions
    .on('mouseover', function(){
        $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
        $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
        $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
        $(this)
        // add a photo container
            .append('<div class="photo"></div>')

            .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })
});

// einde


$( document ).ready(function() {
    particlesJS("particles-js", {
        "particles":{
            "number":{
                "value":80,"density":{
                    "enable":true,"value_area":300}},"color":{
                "value":"#ffffff"},"shape":{
                "type":"circle","stroke":{
                    "width":0,"color":"#000000"},"polygon":{
                    "nb_sides":5},"image":{
                    "src":"img/github.svg","width":100,"height":100}},"opacity":{
                "value":0.5,"random":false,"anim":{
                    "enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{
                "value":3,"random":true,"anim":{
                    "enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{
                "enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{
                "enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{
                    "enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{
            "detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{
                "enable":true,"mode":"push"},"resize":true},"modes":{"grab":{
                "distance":400,"line_linked":{"opacity":1}},"bubble":{
                "distance":400,"size":40,"duration":2,"opacity":4,"speed":3},"repulse":{
                "distance":80,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var update; update = function() {  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { }
        requestAnimationFrame(update); };
    requestAnimationFrame(update);
});
$( document ).ready(function() {
    particlesJS("particles-js2", {
        "particles":{
            "number":{
                "value":80,"density":{
                    "enable":true,"value_area":300}},"color":{
                "value":"#ffffff"},"shape":{
                "type":"circle","stroke":{
                    "width":0,"color":"#000000"},"polygon":{
                    "nb_sides":5},"image":{
                    "src":"img/github.svg","width":100,"height":100}},"opacity":{
                "value":0.5,"random":false,"anim":{
                    "enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{
                "value":3,"random":true,"anim":{
                    "enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{
                "enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{
                "enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{
                    "enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{
            "detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{
                "enable":true,"mode":"push"},"resize":true},"modes":{"grab":{
                "distance":400,"line_linked":{"opacity":1}},"bubble":{
                "distance":400,"size":40,"duration":2,"opacity":4,"speed":3},"repulse":{
                "distance":80,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var update; update = function() {  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { }
        requestAnimationFrame(update); };
    requestAnimationFrame(update);
});
$( document ).ready(function() {
    particlesJS("particles-js3", {
        "particles":{
            "number":{
                "value":80,"density":{
                    "enable":true,"value_area":300}},"color":{
                "value":"#ffffff"},"shape":{
                "type":"circle","stroke":{
                    "width":0,"color":"#000000"},"polygon":{
                    "nb_sides":5},"image":{
                    "src":"img/github.svg","width":100,"height":100}},"opacity":{
                "value":0.5,"random":false,"anim":{
                    "enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{
                "value":3,"random":true,"anim":{
                    "enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{
                "enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{
                "enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{
                    "enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{
            "detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{
                "enable":true,"mode":"push"},"resize":true},"modes":{"grab":{
                "distance":400,"line_linked":{"opacity":1}},"bubble":{
                "distance":400,"size":40,"duration":2,"opacity":4,"speed":3},"repulse":{
                "distance":80,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var update; update = function() {  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { }
        requestAnimationFrame(update); };
    requestAnimationFrame(update);
});
$( document ).ready(function() {
    particlesJS("particles-js4", {
        "particles":{
            "number":{
                "value":80,"density":{
                    "enable":true,"value_area":300}},"color":{
                "value":"#ffffff"},"shape":{
                "type":"circle","stroke":{
                    "width":0,"color":"#000000"},"polygon":{
                    "nb_sides":5},"image":{
                    "src":"img/github.svg","width":100,"height":100}},"opacity":{
                "value":0.5,"random":false,"anim":{
                    "enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{
                "value":3,"random":true,"anim":{
                    "enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{
                "enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{
                "enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{
                    "enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{
            "detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{
                "enable":true,"mode":"push"},"resize":true},"modes":{"grab":{
                "distance":400,"line_linked":{"opacity":1}},"bubble":{
                "distance":400,"size":40,"duration":2,"opacity":4,"speed":3},"repulse":{
                "distance":80,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var update; update = function() {  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { }
        requestAnimationFrame(update); };
    requestAnimationFrame(update);
});
$( document ).ready(function() {
    particlesJS("particles-js5", {
        "particles":{
            "number":{
                "value":80,"density":{
                    "enable":true,"value_area":300}},"color":{
                "value":"#ffffff"},"shape":{
                "type":"circle","stroke":{
                    "width":0,"color":"#000000"},"polygon":{
                    "nb_sides":5},"image":{
                    "src":"img/github.svg","width":100,"height":100}},"opacity":{
                "value":0.5,"random":false,"anim":{
                    "enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{
                "value":3,"random":true,"anim":{
                    "enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{
                "enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{
                "enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{
                    "enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{
            "detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{
                "enable":true,"mode":"push"},"resize":true},"modes":{"grab":{
                "distance":400,"line_linked":{"opacity":1}},"bubble":{
                "distance":400,"size":40,"duration":2,"opacity":4,"speed":3},"repulse":{
                "distance":80,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var update; update = function() {  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { }
        requestAnimationFrame(update); };
    requestAnimationFrame(update);
});



