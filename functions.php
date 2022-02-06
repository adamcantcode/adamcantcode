<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

/** 
 * Actions
 */
add_action('wp_enqueue_scripts', 'add_scripts_styles');

// add_action('init', 'redirect_login_page');

if (function_exists('acf_register_block_type')) {
  add_action('acf/init', 'register_acf_block_types');
}

/**
 * Get other files
 */
require_once get_template_directory() . '/inc/helpers.php';

/**
 * Enque CSS and JS
 */
function add_scripts_styles()
{
  wp_enqueue_style('acc-styles', get_theme_file_uri('/dist/css/app.css'));
  wp_enqueue_script('acc-script', get_theme_file_uri('/dist/js/app.js'), array('jquery'));
}

/**
 * Enable svg media uploads
 */
function my_myme_types($mime_types)
{
  $mime_types['svg'] = 'image/svg+xml';
  return $mime_types;
}
add_filter('upload_mimes', 'my_myme_types', 1, 1);

// /**
//  * Redirect login based on ip
//  */
// function redirect_login_page()
// {
//   $ipaddress = '';
//   if (isset($_SERVER['HTTP_CLIENT_IP'])) {
//     $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
//   } else if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
//     $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
//   } else if (isset($_SERVER['HTTP_X_FORWARDED'])) {
//     $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
//   } else if (isset($_SERVER['HTTP_FORWARDED_FOR'])) {
//     $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
//   } else if (isset($_SERVER['HTTP_FORWARDED'])) {
//     $ipaddress = $_SERVER['HTTP_FORWARDED'];
//   } else if (isset($_SERVER['REMOTE_ADDR'])) {
//     $ipaddress = $_SERVER['REMOTE_ADDR'];
//   } else {
//     $ipaddress = 'UNKNOWN';
//   }
//   if ($ipaddress !== '96.84.79.153' && $ipaddress !== '24.1.106.157' && $ipaddress !== '::1') {

//     $comingSoon  = '/coming-soon';
//     if (strpos($_SERVER['REQUEST_URI'], 'wp-login')) {

//       wp_redirect($comingSoon);
//       exit();
//     }
//   }
// }
