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

function redirect_login_page()
{
  $ipaddress = '';
  if (isset($_SERVER['HTTP_CLIENT_IP'])) {
    $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
  } else if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
  } else if (isset($_SERVER['HTTP_X_FORWARDED'])) {
    $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
  } else if (isset($_SERVER['HTTP_FORWARDED_FOR'])) {
    $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
  } else if (isset($_SERVER['HTTP_FORWARDED'])) {
    $ipaddress = $_SERVER['HTTP_FORWARDED'];
  } else if (isset($_SERVER['REMOTE_ADDR'])) {
    $ipaddress = $_SERVER['REMOTE_ADDR'];
  } else {
    $ipaddress = 'UNKNOWN';
  }
  if ($ipaddress !== '96.84.79.153' && $ipaddress !== '::1' && $ipaddress !== '24.1.106.157'  ) { 
    // Where we want them to go
    $comingSoon  = '/coming-soon';
    if (strpos($_SERVER['REQUEST_URI'], 'wp-login')) {

      // And away they go...
      wp_redirect($comingSoon);
      exit();
    }
  }
}

add_action('init', 'redirect_login_page');
