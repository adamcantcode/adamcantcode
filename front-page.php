<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

get_header();

if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
		<div class="container mx-auto px-4">
			<div class="flex items-center flex-col">
				<div class="flex items-center w-1/2 bg-[#2D293D]">
						<input type="text" id="search" class="w-full">
				</div>
				<div id="button" class="inline-block hover:cursor-pointer">click</div>
				<div id="list" class="text-center"></div>
			</div>
		</div>
		<!-- Need to place tailwind classes -->
<?php endwhile;
endif; ?>

<?php get_footer(); ?>