<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

get_header();

if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
	<div class="text text-9xl">Test</div>
	<?php endwhile;
endif; ?>

<?php get_footer(); ?>