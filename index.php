<?php

get_header();

if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
    <?=
      the_title();
    the_content();
    ?>
  <?php endwhile;
endif; ?>