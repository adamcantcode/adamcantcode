// init
$(document).ready(function () {
  //Swup
  // const swup = new Swup({
  //   plugins: [
  //     new SwupScrollPlugin({
  //       doScrollingRightAway: false,
  //       animateScroll: true,
  //       scrollFriction: 0.35,
  //       scrollAcceleration: 0.06
  //     })
  //   ]
  // });

  /**
   * Enable tooltips when text-truncate
   */
  $('[data-toggle="tooltip"].text-truncate').tooltip();

  /**
   * Scroll transitions
   */

  var trig = 0;

  $(window).scroll(function () {
    const scroll = $(this).height() / 2;

    if ($(this).scrollTop() >= scroll && trig != 1) {
      $('.article-details').addClass('slide-up-out');
      setTimeout(function () {
        $('.article-details').addClass('d-none');
        $('.article-more').addClass('slide-in-left');
      }, 310);
      $('.bar-title').addClass('slide-up-out');
      setTimeout(function () {
        $('.bar-title').addClass('d-none');
        $('.bar-details').addClass('slide-up-in');
      }, 320);

      trig = 1;
    }

    if ($(this).scrollTop() < scroll && trig == true) {
      $('.article-more').removeClass('slide-in-left');
      setTimeout(function () {
        $('.article-details').removeClass('d-none');
      }, 350);
      setTimeout(function () {
        $('.article-details').removeClass('slide-up-out');
      }, 400);
      $('.bar-title').removeClass('d-none').removeClass('slide-up-out');
      $('.bar-details').removeClass('slide-up-in');

      trig = 0;
    }
  });
});

// var deadline = '2015-12-31 00:00:00 GMT-0500';
