<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

get_header();

if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
    <div class="container-fluid overflow-hidden">
      <h1>Projects</h1>
    </div>
    <div class="container position-relative">
      <div class="row" style="min-height: 100vh;">
        <div class="col-12 col-lg-5 d-flex flex-column justify-content-center">
          <div class="details-container poition-relative">
            <div class="details id-<?php echo $id; ?>">
              <?php
              $term_obj_list = get_the_terms($post->ID, 'type');
              if ($term_obj_list) {
                $terms_string = implode('', wp_list_pluck($term_obj_list, 'name'));
              }
              ?>
              <h4><?php echo $terms_string ? $terms_string : ''; ?></h4>
              <h3><?php the_title(); ?></h3>
              <ul class="list-inline h5">
                <li class="list-inline-item font-weight-bold">WordPress • Theme Dev • SEO</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-7">
          <div class="image-container">
            <img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'large'); ?>" alt="" class="img-fluid">
          </div>
        </div>
      </div>
      <div class="row mt-n5">
        <div class="col-12 col-lg-6"></div>
        <div class="col-12 col-lg-6">
          <?php the_content(); ?>
        </div>
      </div>
      <div class="additional-images">
        <img src="https://via.placeholder.com/640x360/FF0000/" alt="" class="img-fluid">
        <img src="https://via.placeholder.com/640x360/FF0000/" alt="" class="img-fluid">
        <img src="https://via.placeholder.com/640x360/FF0000/" alt="" class="img-fluid">
      </div>
    </div>
<?php endwhile;
endif; ?>

<?php get_footer(); ?>