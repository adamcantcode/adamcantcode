<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

get_header();

if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
    <div class="container-fluid">
      <div class="row">
        <?php $title = get_the_title();
        outlineHeadings($title); ?>
        <?php the_content(); ?>
        <?php the_title(); ?>
        <?php
        $categories = get_the_category();
        echo get_the_author_meta('first_name') . ' ';
        echo get_the_author_meta('last_name');
        echo ' • ';
        echo get_the_date('M j, Y');
        ?>
        <?php
        if (!empty($categories)) {
          echo '<a href="' . esc_url(get_category_link($categories[0]->term_id)) . '">' . esc_html($categories[0]->name) . '</a>';
        }
        ?>
        <?php
        $post_tags = get_the_tags();
        $separator = ' • ';
        if (!empty($post_tags)) {
          echo '<ul class="list-inline">';
          $output = '';
          foreach ($post_tags as $tag) {
            $output .= '<li class="list-inline-item mr-0"><a href="' . get_tag_link($tag->term_id) . '">' . $tag->name . '</a></li>' . $separator;
          }
          echo trim($output, $separator);
          echo '</ul>';
        }
        ?>
      </div>
    </div>
<?php endwhile;
endif; ?>

<?php get_footer(); ?>