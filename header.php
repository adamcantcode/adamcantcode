<?php defined('ABSPATH') or header('Location: /'); ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title><?php wp_title() ?></title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
  <?php wp_head(); ?>
</head>

<body <?php body_class() ?>>
  <div class="container">
    <nav class="navbar navbar-expand-lg flex-column align-items-baseline position-absolute p-0">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#primaryNavContainer" aria-controls="primaryNavContainer" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <?php
      wp_nav_menu(array(
        'theme_location'    => 'primary',
        'depth'             => 1,
        'container'         => 'div',
        'container_class'   => 'collapse navbar-collapse flex-column',
        'container_id'      => 'primaryNavContainer',
        'menu_class'        => 'nav navbar-nav flex-column',
        'fallback_cb'       => 'BS_Navwalker::fallback',
        'walker'            => new BS_Navwalker(),
      ));
      ?>
    </nav>
  </div>
  <div id="swup" class="transition-fade">