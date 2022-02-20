<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

get_header();

if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
	<div id="button" class="inline-block hover:cursor-pointer">click</div>
	<div id="list"></div>
	<!-- Need to place tailwind classes -->
	<?php endwhile;
endif; ?>

<?php get_footer(); ?>