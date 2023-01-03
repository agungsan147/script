$(document).ready(function () {
   $(".owl-carousel").owlCarousel({
      loop: false,
      responsiveClass: true,
      responsive: {
         0: {
            items: 3,
            nav: false
         },
         576: {
            items: 4,
            nav: false
         },
         764: {
            items: 5,
            nav: true,
            loop: false
         }
      }
   });
});