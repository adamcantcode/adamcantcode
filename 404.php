<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

get_header();

?>
<div class="container-fluid">
  <div class="countdown d-flex justify-content-center align-items-center">
    <h1 class="font-weight-bold" style="min-width: 40vw">
      <div class="box p-5">
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
        <!-- <span class="num mil d-flex"></span> -->
      </div>
    </h1>
  </div>
</div>

<?php get_footer(); ?>