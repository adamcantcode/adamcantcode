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
  // let mY = vH / 2;
  // var direction = 0;

  $('.list-projects-container')
    .on('mousemove', function () {
      let mH = ((event.pageY * 100) / vH).toFixed(3) - 50;
      $('.list-projects').css('transform', 'translateY(' + -mH / 1.2 + '%)');
      // if (e.pageY < mY) {
      //   direction = 1;
      // }
    })
    .on('mouseleave', function () {
      $('.list-projects')
        .addClass('out')
        .css('transform', 'translateY(0)')
        .on('transitionend webkitTransitionEnd oTransitionEnd', function () {
          $(this).removeClass('out');
        });
    });

  $('h2 a').hover(
    function () {
      $('.overlay').toggleClass('overlay-color');
      $('.bg-image-container').toggleClass('overlay-image');
      $('.details-container').toggleClass('overlay-details');
      // if (direction) {
      //   $('.details-container').toggleClass('up');
      // }
    },
    function () {
      $('.overlay').toggleClass('overlay-color');
      $('.bg-image-container').toggleClass('overlay-image');
      $('.details-container').toggleClass('overlay-details');
      // if (direction) {
      //   $('.details-container').toggleClass('up');
      // }
    }
  );
});
