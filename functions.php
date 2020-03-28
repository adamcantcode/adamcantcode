<?php

add_action('wp_enqueue_scripts', 'add_scripts_styles');

/**
 * Enque JS and CSS
 */
function add_scripts_styles()
{
  // wp_enqueue_script( 'acc_script_tween', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js', array( 'jquery' ));
  // wp_enqueue_script( 'acc_script_gsap', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js', array( 'jquery' ));
  // wp_enqueue_script( 'acc_script_sm', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js', array( 'jquery' ));
  // wp_enqueue_script( 'acc_script_inidcate', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js', array( 'jquery' ));
  // wp_enqueue_script('acc_script_swup', get_theme_file_uri('/node_modules/swup/dist/swup.min.js'), array('jquery'));
  // wp_enqueue_script('acc_script_swup_scroll', get_theme_file_uri('/node_modules/@swup/scroll-plugin/dist/SwupScrollPlugin.min.js'), array('jquery'));
  wp_enqueue_script('acc-script', get_theme_file_uri('/dist/js/app.js'), array('jquery'));
  wp_enqueue_style('acc-styles', get_theme_file_uri('/dist/css/app.css'));
}

