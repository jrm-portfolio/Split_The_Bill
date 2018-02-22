/* ---------------------------------------------- /*
* Scroll Animation
/* ---------------------------------------------- */

$('.section-scroll').bind('click', function(e) {
  var anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top - 50
  }, 1000);
  e.preventDefault();
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:50,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
