<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

get_header();

if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
    <div>test</div>
<?php endwhile;
endif; ?>

<?php get_footer(); ?>