$(document).ready(function(){
    // Enable Carousel Controls
    $('#customerReviewsCarousel').on('slide.bs.carousel', function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 5 ; // Number of items to display per slide

      var totalItems = $('.carousel-item').length;

      if (e.direction == "left") {
        if (idx >= totalItems - itemsPerSlide) {
          $('.carousel-item').slice(0, itemsPerSlide).appendTo('.carousel-inner');
        }
      } else {
        if (idx == 0) {
          $('.carousel-item').slice(-itemsPerSlide).prependTo('.carousel-inner');
        }
      }
    });
  });