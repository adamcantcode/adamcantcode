<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

/**
 * Skills Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'skills-' . $block['id'];
if (!empty($block['anchor'])) {
  $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'skills';
if (!empty($block['className'])) {
  $className .= ' ' . $block['className'];
}
if (!empty($block['align'])) {
  $className .= ' align' . $block['align'];
}

?>

<?php if (have_rows('skills')) : ?>
  <div class="container">
    <div class="row">
      <?php while (have_rows('skills')) : the_row(); ?>
        <div class="col-6 col-lg-3">
          <?php
          $icon = get_sub_field('icon');
          if ($icon) : ?>
            <img src="<?php echo esc_url($icon['url']); ?>" alt="<?php echo esc_attr($icon['alt']); ?>" class="img-fluid" />
          <?php endif; ?>

          <?php if ($skill = get_sub_field('skill')) : ?>
            <p class="font-weight-bold"><?php echo esc_html($skill); ?></p>
          <?php endif; ?>
        </div>
      <?php endwhile; ?>
    </div>
  </div>
<?php endif; ?>