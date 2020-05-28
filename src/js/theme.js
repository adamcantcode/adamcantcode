// init
$(document).ready(function () {
  // Swup
  const swup = new Swup({
    plugins: [
      new SwupScrollPlugin({
        doScrollingRightAway: false,
        animateScroll: true,
        scrollFriction: 0.3,
        scrollAcceleration: 0.04,
      }),
      // new SwupBodyClassPlugin(),
    ],
  });

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
        .css('transform', 'translateY(0)')
        .on('transitionend webkitTransitionEnd oTransitionEnd', function () {
          $(this).removeClass('out');
        });
    });

  $('h2 a').hover(
    function () {
      let linkID = $(this).attr('id');

      $(`.overlay.id-${linkID}`).toggleClass('overlay-color');
      $(`.bg-image-container.id-${linkID}`).toggleClass('overlay-image');
      $(`.details.id-${linkID}`).toggleClass('overlay-details');
    },
    function () {
      let linkID = $(this).attr('id');

      $(`.overlay.id-${linkID}`).toggleClass('overlay-color');
      $(`.bg-image-container.id-${linkID}`).toggleClass('overlay-image');
      $(`.details.id-${linkID}`).toggleClass('overlay-details');
    }
  );
});
