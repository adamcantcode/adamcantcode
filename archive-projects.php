<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

get_header();

if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
    <div class="container-fluid overflow-hidden">
      <h1><?php the_title(); ?></h1>
    </div>
    <div class="container position-relative">
      <div class="row" style="min-height: 100vh;">
        <div class="col-12 col-lg-6 d-flex flex-column justify-content-center">
          <h4>Web Development</h4>
          <h3>XL.net</h3>
          <ul class="list-inline">
            <li class="list-inline-item font-weight-bold">WordPress • Theme Dev • SEO</li>
          </ul>
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column justify-content-center overflow-hidden list-projects-container">
          <div class="list-projects">
            <h2>Adam Macaulay</h2>
            <h2>Adam Macaulay</h2>
            <h2>Adam Macaulay</h2>
            <h2>Adam Macaulay</h2>
            <h2>Adam Macaulay</h2>
            <h2><a href="#">Adam Macaulay</a></h2>
            <h2>Adam Macaulay</h2>
            <h2>Adam Macaulay</h2>
            <h2>Adam Macaulay</h2>
            <h2>Adam Macaulay</h2>
            <h2>Adam Macaulay</h2>
            <h2>Adam Macaulay</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay"></div>
    <div class="bg-image d-flex align-items-center justify-content-center">
      <div class="bg-image-image"><img src="https://via.placeholder.com/320x180/FF0000/" alt=""></div>
    </div>
<?php endwhile;
endif; ?>

<?php get_footer(); ?>