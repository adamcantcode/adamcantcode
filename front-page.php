<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

get_header();

if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
		<div class="container-fluid overflow-hidden">
			<h1>Adam</h1>
		</div>
		<div class="container">
			<div class="d-flex flex-column justify-content-center" style="height:100vh">
				<h4>Adam Macaulay</h4>
				<h5>Web Developer</h5>
			</div>
		</div>
<?php endwhile;
endif; ?>

<?php get_footer(); ?>