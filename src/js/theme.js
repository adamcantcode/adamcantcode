// init
$(document).ready(function () {
  // // Swup
  // const swup = new Swup({
  //   plugins: [
  //     new SwupScrollPlugin({
  //       doScrollingRightAway: false,
  //       animateScroll: true,
  //       scrollFriction: 0.35,
  //       scrollAcceleration: 0.06,
  //     }),
  //   ],
  // });

  // ANCHOR Items mostion
  let vH = $(window).height();

  $('.list-projects-container')
    .on('mousemove', function () {
      let mH = ((event.pageY * 100) / vH).toFixed(3) - 50;
      $('.list-projects').css('transform', 'translateY(' + -mH / 1.2 + '%)');
    })
    .on('mouseleave', function () {
      $('.list-projects')
        .addClass('out')
        .css('transform', 'translatey(0)')
        .on('transitionend webkitTransitionEnd oTransitionEnd', function () {
          $(this).removeClass('out');
        });
    });

  $('h2 a').hover(
    function () {
      $('.overlay').toggleClass('overlay-color');
      $('.bg-image').toggleClass('overlay-image');
    },
    function () {
      $('.overlay').toggleClass('overlay-color');
      $('.bg-image').toggleClass('overlay-image');
    }
  );
});
