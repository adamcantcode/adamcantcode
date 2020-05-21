<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

get_header();

if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
		<div class="container-fluid">
			<h1>Adam</h1>
		</div>
		<div class="container">
			<div class="d-flex flex-column justify-content-center" style="height:100vh">
				<h3>Adam Macaulay</h3>
				<h4>Web Developer</h4>
			</div>
		</div>
<?php endwhile;
endif; ?>

<?php get_footer(); ?>