<?php

get_header();

if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
  
  <?php endwhile;
endif; ?>