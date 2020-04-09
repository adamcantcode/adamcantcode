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

              foreach($nameArray as $name) {
                
              }

              foreach ($name as $char) {
                $x = rand(-50, 50);
                $y = rand(0, -70);
                $r = rand(0, 360);
                echo '<span class="name" uk-parallax="x:' . $x . 'vw,0;y:' . $y . 'vh,0;rotate:' . $r . ',0;viewport:0.10" style="display: inline-block">' . $char . '</span>';
                unset($i);
              }
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