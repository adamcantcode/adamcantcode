<?php defined('ABSPATH') or header('Location: /'); ?>

<?php get_header(); ?>

<?php if (have_posts()) : ?>
  <div class="container-fluid overflow-hidden">
    <h1>Projects</h1>
  </div>
  <div class="container position-relative">
    <div class="row" style="min-height: 100vh;">
      <div class="col-12 col-lg-6 d-flex flex-column justify-content-center">
        <div class="details-container poition-relative">
          <?php
          $args = array(
            'post_type'  => 'projects',
            'order'      => 'ASC',
            'orderby'    => 'date',
          );
          $projects = new WP_Query($args);
          ?>

          <?php if ($projects->have_posts()) : while ($projects->have_posts()) : $projects->the_post(); ?>
              <?php
              $id = get_the_ID();
              ?>
              <div class="details id-<?php echo $id; ?>">
                <?php
                $term_obj_list = get_the_terms( $post->ID, 'type' );
                if ($term_obj_list) {
                  $terms_string = implode('', wp_list_pluck($term_obj_list, 'name'));
                }
                ?>
                <h4><?php echo $terms_string ? $terms_string : '' ; ?></h4>
                <h3><?php the_title(); ?></h3>
                <ul class="list-inline h5">
                  <li class="list-inline-item font-weight-bold">WordPress • Theme Dev • SEO</li>
                </ul>
              </div>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
          <?php endif; ?>
        </div>
      </div>
      <div class="col-12 col-lg-6 d-flex flex-column justify-content-center overflow-hidden list-projects-container">
        <div class="list-projects">
          <?php while (have_posts()) : the_post(); ?>
            <?php
            $id = get_the_ID();
            $title = get_the_title();
            $brand_color = get_field('brand_color');
            ?>
            <h2><a href="<?php echo get_the_permalink() ?>" id="<?php echo $id; ?>" class="d-block text-uppercase" onmouseenter="$(this).css('color','<?php echo $brand_color; ?>')" onmouseleave="$(this).css('color','white')"><?php echo firstLetter($title); ?></a></h2>
          <?php endwhile; ?>
        </div>
      </div>
    </div>
  </div>

  <?php
  $args = array(
    'post_type'  => 'projects',
    'order'      => 'ASC',
    'orderby'    => 'date',
  );
  $projects = new WP_Query($args);
  ?>

  <?php if ($projects->have_posts()) : while ($projects->have_posts()) : $projects->the_post(); ?>
      <?php
      $brand_color = get_field('brand_color');
      $id = get_the_ID();
      ?>
      <div class="overlay id-<?php echo $id; ?>" style="background: linear-gradient(to right,<?php echo hexToRgb($brand_color) ?>,rgba(0, 0, 0, 0));"></div>
      <div class="bg-image-container id-<?php echo $id ?> d-flex align-items-center justify-content-center">
        <div class="bg-image-image id-<?php echo $id ?>"><img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'large'); ?>" alt=""></div>
      </div>
    <?php endwhile; ?>
    <?php wp_reset_postdata(); ?>
  <?php endif; ?>

<?php endif; ?>

<?php get_footer(); ?>