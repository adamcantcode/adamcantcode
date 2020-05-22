<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

get_header();

if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
    <div class="container-fluid overflow-hidden">
      <h1><?php the_title(); ?></h1>
    </div>
    <div class="container">
      <div class="d-flex flex-column justify-content-center" style="height:95vh">
        <h3>I'm a web developer.</h3>
      </div>
      <?php the_content(); ?>
    </div>
<?php endwhile;
endif; ?>

<?php get_footer(); ?>