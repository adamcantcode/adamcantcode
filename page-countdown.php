<?php defined('ABSPATH') or header('Location: /'); ?>

<?php /* Template Name: Countdown */ ?>

<?php

get_header();

if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
    <div class="container-fluid">
      <div class="countdown d-flex align-items-end p-5">
        <h1 class="font-weight-bold">
          <div class="box">
            <div class="num day d-flex">
              <span class="font-weight-bold"></span>
              <span class="font-weight-light"></span>
            </div>
            <div class="num hour d-flex">
              <span class="font-weight-bold"></span>
              <span class="font-weight-light"></span>
            </div>
            <div class="num min d-flex">
              <span class="font-weight-bold"></span>
              <span class="font-weight-light"></span>
            </div>
            <div class="num sec d-flex">
              <span class="font-weight-bold"></span>
              <span class="font-weight-light"></span>
            </div>
            <div class="num mil d-flex">
              <span class="font-weight-bold"></span>
              <span class="font-weight-light"></span>
            </div>
            <!-- <span class="num mil d-flex"></span> -->
          </div>
        </h1>
      </div>
    </div>
<?php endwhile;
endif; ?>

<?php get_footer(); ?>