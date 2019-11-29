$(document).ready(function () {
  $(".search-modal").click(function () {
      $("body").addClass("show-search");
  });
  $(".input-text").click(function () {
      $(".history-block").addClass("show-history");
  });
  $(".close_i,.overlay").click(function () {
      $("body").removeClass("show-search");
  });
});
$(document).ready(function () {
  $(".shop_i").click(function () {
      $(".cart-block").toggleClass("show");
  });
});
$(document).ready(function () {
  $(".user_i").click(function () {
      $(".login-block").toggleClass("show");
  });
});
$(document).ready(function () {
  $(".input-text").keypress(function () {
      $("body").addClass('show-suggestion');
  });
  // $(".input-text").blur(function(){
  //     $("body").removeClass('show-suggestion');
  // });
});
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 2
          }
      }
  })
});