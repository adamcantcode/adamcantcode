<?php

get_header();

if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
    <?php
    $launch = strtotime("2020-05-01");
    $countDown = round(($launch - time()) / (60 * 60 * 24));
    $format = new NumberFormatter("en", NumberFormatter::SPELLOUT);
    $word = $format->format($countDown);
    $wordSpace = str_replace('-', ' ', $word);
    $words = explode(' ', $wordSpace);
    ?>
    <div class="container-fluid">
      <div class="countdown d-flex justify-content-center align-items-center">
        <h1 class="font-weight-bold">
          <div class="box p-5">
            <?php

            $i = 0;
            $len = count($words);
            if ($len > 1) {
              foreach ($words as $num) {
                if ($i == 0) {
                  echo $num;
                } elseif ($i == $len - 1) {
                  echo '<span class="font-weight-lighter">' . $num . '</span>';
                }
                $i++;
              }
            } else {
              echo $word;
            }
            ?>
          </div>
        </h1>
      </div>
    </div>
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
<?php endwhile;
endif; ?>

<?php get_footer(); ?>