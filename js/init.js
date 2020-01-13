// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.carousel');
//   var instances = M.Carousel.init(elems, options);
// });

var instance = M.Carousel.init({
  fullWidth: true,
  indicators: true
});

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });


  // $(document).ready(function(){
  //   $('.carousel').carousel();
  // });
    
})(jQuery); // end of jQuery name space
