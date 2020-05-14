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
      trig = 1;
      $('.article-details')
        .addClass('slide-up-out')
        .on(
          'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
          function (e) {
            $(this).addClass('d-none');
            $('.article-more > p').removeClass('d-none');
            setTimeout(function () {
              $('.article-more > p').addClass('slide-in-left');
            }, 50);

            $(this).off(e);
          }
        );

      // $('.bar-title').addClass('slide-up-out');
      // setTimeout(function () {
      //   $('.bar-title').addClass('d-none');
      //   $('.bar-details').addClass('slide-up-in');
      // }, 320);
    }

    if ($(this).scrollTop() < scroll && trig == true) {
      trig = 0;
      $('.article-more > p')
        .removeClass('slide-in-left')
        .on(
          'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
          function (e) {
            $(this).addClass('d-none');
            $('.article-details').removeClass('d-none');
            setTimeout(function () {
              $('.article-details').removeClass('slide-up-out');
            }, 50);
            $(this).off(e);
          }
        );

      // $('.bar-title').removeClass('d-none').removeClass('slide-up-out');
      // $('.bar-details').removeClass('slide-up-in');
    }
  });
});

// var deadline = '2015-12-31 00:00:00 GMT-0500';
