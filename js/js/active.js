(function($) {
  'use strict';

  var browserWindow = $(window);

  // :: 1.0 Preloader Active Code
  browserWindow.on('load', function() {
    $('#preloader').fadeOut('slow', function() {
      $(this).remove();
    });
  });

  // :: 2.0 Nav Active Code
  if ($.fn.classyNav) {
    $('#academyNav').classyNav();
  }

  // :: 7.0 prevent default a click
  $('a[href="#"]').click(function($) {
    $.preventDefault();
  });

  // :: 8.0 wow Active Code
  if (browserWindow.width() > 767) {
    new WOW().init();
  }

  // :: 9.0 Sticky Active Code
  if ($.fn.sticky) {
    $('.academy-main-menu').sticky({
      topSpacing: 0
    });
  }
})(jQuery);
