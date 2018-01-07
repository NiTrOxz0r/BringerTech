/*===============================================
         Servicios  Animación con el SCROLL
 ================================================*/
                $(document).ready(function(){
                
                    //Animate Scroll
                    new WOW().init();
                
                });     

/*===============================================
                    Trabajo
================================================*/
$(document).ready(function(){

    $("#trabajo").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/*===============================================
                     Equipo
================================================*/
$(document).ready(function(){

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

});

 /*===============================================
                       Stats
 ================================================*/
    $(document).ready(function(){

        $(".counter").counterUp({
            delay: 10,
            time: 3000
        });

    });

/*===============================================
                       Clientes
 ================================================*/
        $(document).ready(function(){

            $("#clients-list").owlCarousel({
                items: 6,
                autoplay: true,
                smartSpeed: 700,
                loop: true,
                autoplayHoverPause: true
            });

        });

 /*===============================================
                        Smooth-Scroll esta roto
================================================

$("a.smooth-scroll").click( function(evento){

    evento.preventDefault();
    var section = $(this).attr("href");

    $("html, body").animate({
        scrollTop: $(section).offset().top
    });

}, 0);*/

/*===============================================
                        Button Top
================================================*/

$(function(){

    $(window).scroll(function() {

        if($(this).scrollTop() < 50) {
            $("#back-to-top").fadeOut();
        }else{
            $("#back-to-top").fadeIn();
        }

    });

});

/*===============================================
                        Slider Principal
================================================*/

$(window).on('load', function() {
    $('#slider').nivoSlider(); 
}); 


// /*<!-- load jQuery 1.7.1 -->*/
// var jQuery_1_7_1 = $.noConflict(true);
// /*<!-- load jQuery 3.2.1 -->*/
// var jQuery_3_2_1 = $.noConflict(false);

// var $jQuery_1_7_1 = jQuery.noConflict();
//          $jQuery_1_7_1(document).ready(function() {
//           $jQuery_1_7_1("#slider").nivoSlider({
                
//                 keyPress:true,
//         item:4,
//             });
            
//     });

//          var $jQuery_3_2_1 = jQuery.noConflict();
//          $jQuery_3_2_1(document).ready(function() {
//          $jQuery_3_2_1("#clients-list").owlCarousel({
                
//                 keyPress:true,
//         item:4,
//             });
            
//     });

