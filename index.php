<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

get_header();

if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
    <div class="container-fluid">
      <div class="row">
        <div class="col-1 side-nav bg-bg-dark">

        </div>
        <div class="col-2 outline bg-bg-dark bg-bg-dark-gray">
          <div class="sticky-top">
            <?php
            $title = get_the_title();
            outlineHeadings($title);
            ?>
          </div>
        </div>
        <div class="col-6 article-content bg-bg-light">
          <article class="mx-auto">
            <?php
            the_content();
            ?>
          </article>
        </div>
        <div class="col-3 details bg-bg-dark">
          <div class="sticky-top">
            <div class="article-details">
              <h1><?php the_title(); ?></h1>
              <div>
                <?php
                $categories = get_the_category();
                echo get_the_author_meta('first_name') . ' ';
                echo get_the_author_meta('last_name');
                echo ' • ';
                echo get_the_date('M j, Y');
                ?>
              </div>
              <div class="test">
                <?php
                if (!empty($categories)) {
                  echo '<a href="' . esc_url(get_category_link($categories[0]->term_id)) . '">' . esc_html($categories[0]->name) . '</a>';
                }
                ?>
              </div>
              <div>
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
            <div class="article-more">
              <div class="pt-5 overflow-hidden">
                test
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<?php endwhile;
endif; ?>

<?php get_footer(); ?>