<?php

get_header();

if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <p>Test</p>
            </div>
            <div class="card-body">
              <h4 class="card-title">Test Card</h4>
              <p class="card-text">ACC</p>
            </div>
            <div class="card-footer text-muted">
              <p><a href="/uncatogorized/test">Test post</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
<?php endwhile;
endif; ?>