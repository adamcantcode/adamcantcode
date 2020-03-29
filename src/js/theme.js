//import Swup from 'swup';

// Swup
$(document).ready(function() {
  const swup = new Swup({
    plugins: [
      new SwupScrollPlugin({
        doScrollingRightAway: false,
        animateScroll: true,
        scrollFriction: 0.35,
        scrollAcceleration: 0.06
      })
    ]
  });
});
