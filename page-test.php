<?php defined('ABSPATH') or header('Location: /'); ?>

<?php /* Template Name: Testing */ ?>

<?php

get_header();

if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
    <?=
      the_title();
    the_content();
    ?>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div style="height: 100vh"></div>
          <div class="d-flex justify-content-center">
            <h1>

              <?php
              $nameArray = explode(' ', 'Adam Macaulay');
              $titleArray = explode(' ', 'Web Developer');
              explodeAndSplit($nameArray);
              explodeAndSplit($titleArray);
              ?>
            </h1>
          </div>
          <div style="height: 100vh"></div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-1">a</div>
        <div class="col-1">a</div>
        <div class="col-1">a</div>
        <div class="col-1">a</div>
        <div class="col-1">a</div>
        <div class="col-1">a</div>
        <div class="col-1">a</div>
        <div class="col-1">a</div>
        <div class="col-1">a</div>
        <div class="col-1">a</div>
        <div class="col-1">a</div>
        <div class="col-1">a</div>
      </div>
    </div>
<?php endwhile;
endif; ?>