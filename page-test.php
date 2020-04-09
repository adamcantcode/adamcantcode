<?php defined('ABSPATH') or header('Location: /'); ?>

<?php /* Template Name: Testing */ ?>

<?php

get_header();

if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
    <div class="container">
      <div class="row">
        <div class="parent">
          <div class="div1">a</div>
          <div class="div2">a</div>
          <div class="div3">a</div>
          <div class="div4">a</div>
          <div class="div5">a</div>
          <div class="div6">a</div>
          <div class="div7">a</div>
          <div class="div8">a</div>
          <div class="div9">a</div>
          <div class="div10">a</div>
          <div class="div11">a</div>
          <div class="div12">a</div>
          <div class="div13">a</div>
          <div class="div14">a</div>
          <div class="div15">a</div>
        </div>
      </div>
      <div class="row">
        <div class="col-2 p-0">
          <div class="align-items-center d-flex h-100">
            <div class="border-top border-bottom w-100">
              <p class="mb-0">Test</p>
              <p class="mb-0">Test</p>
              <p class="mb-0">Test</p>
              <p class="mb-0">Test</p>
            </div>
          </div>
        </div>
        <div class="col-10">
          <p>test</p>
          <div style="height: 100vh"></div>

        </div>
      </div>
      <div class="row">
        <div class="col-1 border-0">

        </div>
        <div class="col-11">
          <div>
            <h1 class="text-uppercase text-right">
              <?php
              $nameArray = explode(' ', 'Adam Macaulay');
              $titleArray = explode(' ', 'Web Developer');
              explodeAndSplit($nameArray);
              explodeAndSplit($titleArray);
              ?>
            </h1>
          </div>
          <!-- <div style="height: 100vh"></div> -->
        </div>
      </div>
    </div>
<?php endwhile;
endif; ?>