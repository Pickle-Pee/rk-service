$(document).ready(function(){
  $('#js-carousel-1').owlCarousel({
    items: 5,
    loop: true,
    responsive: {
      900: {
        items: 3
      },
      375: {
        items: 2
      }
    }
  });

  $('#js-carousel-2').owlCarousel({
    items: 5,
    loop: true,
    responsive: {
      900: {
        items: 3
      },
      375: {
        items: 3
      }
    }
  });

  $('#js-carousel-1').each(function () {
    var owl = $(this).find('.owl-carousel').owlCarousel();
    $(this).find('.arrow-left').on('click', function () {
      owl.trigger('prev.owl.carousel');
    });
    $(this).find('.arrow-right').on('click', function () {
      owl.trigger('next.owl.carousel');
    });
  });

});