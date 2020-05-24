<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

/** 
 * Actions
 */
add_action('wp_enqueue_scripts', 'add_scripts_styles');

add_action('init', 'register_projects_cpt');
add_action('init', 'projects_taxonomy');
add_action('init', 'redirect_login_page');

add_action('after_setup_theme', 'register_navwalker');

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
 * Register Custom Navigation Walker
 */
function register_navwalker()
{
  require_once get_template_directory() . '/navwalker.php';
}
register_nav_menus(array(
  'primary' => __('Primary Menu', 'Adam Cant Code'),
));

/**
 * Enable svg media uploads
 */
function my_myme_types($mime_types)
{
  $mime_types['svg'] = 'image/svg+xml';
  return $mime_types;
}
add_filter('upload_mimes', 'my_myme_types', 1, 1);

/**
 * Register projects custom post type and taxonomy
 */
// CPT
function register_projects_cpt()
{

  $labels = array(
    'name'                  => _x('Projects', 'Post type General Name', 'text_domain'),
    'singular_name'         => _x('Project', 'Post type Singular Name', 'text_domain'),
    'menu_name'             => __('Projects', 'text_domain'),
    'name_admin_bar'        => __('Project', 'text_domain'),
    'archives'              => __('Project Archives', 'text_domain'),
    'attributes'            => __('Project Attributes', 'text_domain'),
    'parent_item_colon'     => __('Parent Project:', 'text_domain'),
    'all_items'             => __('All Projects', 'text_domain'),
    'add_new_item'          => __('Add New Project', 'text_domain'),
    'add_new'               => __('Add New', 'text_domain'),
    'new_item'              => __('New Project', 'text_domain'),
    'edit_item'             => __('Edit Project', 'text_domain'),
    'update_item'           => __('Update Project', 'text_domain'),
    'view_item'             => __('View Project', 'text_domain'),
    'view_items'            => __('View Projects', 'text_domain'),
    'search_items'          => __('Search Project', 'text_domain'),
    'not_found'             => __('Not found', 'text_domain'),
    'not_found_in_trash'    => __('Not found in Trash', 'text_domain'),
    'featured_image'        => __('Featured Image', 'text_domain'),
    'set_featured_image'    => __('Set featured image', 'text_domain'),
    'remove_featured_image' => __('Remove featured image', 'text_domain'),
    'use_featured_image'    => __('Use as featured image', 'text_domain'),
    'insert_into_item'      => __('Insert into Project', 'text_domain'),
    'uploaded_to_this_item' => __('Uploaded to this Project', 'text_domain'),
    'items_list'            => __('Projects list', 'text_domain'),
    'items_list_navigation' => __('Projects list navigation', 'text_domain'),
    'filter_items_list'     => __('Filter Projects list', 'text_domain'),
  );
  $args = array(
    'label'                 => __('Project', 'text_domain'),
    'description'           => __('Project Description', 'text_domain'),
    'labels'                => $labels,
    'supports'              => array('title', 'editor', 'thumbnail'),
    'taxonomies'            => array('type'),
    'hierarchical'          => false,
    'public'                => true,
    'show_ui'               => true,
    'show_in_menu'          => true,
    'menu_position'         => 5,
    'show_in_admin_bar'     => true,
    'show_in_nav_menus'     => true,
    'can_export'            => true,
    'has_archive'           => true,
    'exclude_from_search'   => false,
    'publicly_queryable'    => true,
    'capability_type'       => 'post',
    // 'rewrite'               => array('slug' => 'projects', 'with_front' => false),
  );
  register_post_type('projects', $args);
}
// Taxonomy
function projects_taxonomy()
{

  $labels = array(
    'name'                       => _x('Type', 'Taxonomy General Name', 'text_domain'),
    'singular_name'              => _x('Type', 'Taxonomy Singular Name', 'text_domain'),
    'menu_name'                  => __('Type', 'text_domain'),
    'all_items'                  => __('All Types', 'text_domain'),
    'parent_item'                => __('Parent Type', 'text_domain'),
    'parent_item_colon'          => __('Parent Type:', 'text_domain'),
    'new_item_name'              => __('New Type Name', 'text_domain'),
    'add_new_item'               => __('Add New Type', 'text_domain'),
    'edit_item'                  => __('Edit Type', 'text_domain'),
    'update_item'                => __('Update Type', 'text_domain'),
    'view_item'                  => __('View Type', 'text_domain'),
    'separate_items_with_commas' => __('Separate Types with commas', 'text_domain'),
    'add_or_remove_items'        => __('Add or remove Types', 'text_domain'),
    'choose_from_most_used'      => __('Choose from the most used', 'text_domain'),
    'popular_items'              => __('Popular Types', 'text_domain'),
    'search_items'               => __('Search Types', 'text_domain'),
    'not_found'                  => __('Not Found', 'text_domain'),
    'no_terms'                   => __('No Types', 'text_domain'),
    'items_list'                 => __('Types list', 'text_domain'),
    'items_list_navigation'      => __('Types list navigation', 'text_domain'),
  );
  $args = array(
    'labels'                     => $labels,
    'hierarchical'               => false,
    'public'                     => true,
    'show_ui'                    => true,
    'show_admin_column'          => true,
    'show_in_nav_menus'          => true,
    'show_tagcloud'              => true,
  );
  register_taxonomy('type', array('projects'), $args);
}

/**
 * Register block
 */
function register_acf_block_types()
{

  // register a skills block.
  acf_register_block_type(array(
    'name'              => 'skills',
    'title'             => __('Skills'),
    'description'       => __('My dev skills.'),
    'render_template'   => 'template-parts/blocks/skills/block-skills.php',
    'category'          => 'formatting',
    'icon'              => 'admin-comments',
    'keywords'          => array('skills', 'skills, frameworks, about'),
    'enqueue_style'     => get_template_directory_uri() . '/dist/css/app.css'
  ));
}

/**
 * Redirect login based on ip
 */
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
  if ($ipaddress !== '96.84.79.153' && $ipaddress !== '24.1.106.157' && $ipaddress !== '::1') {

    $comingSoon  = '/coming-soon';
    if (strpos($_SERVER['REQUEST_URI'], 'wp-login')) {

      wp_redirect($comingSoon);
      exit();
    }
  }
}
