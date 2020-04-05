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
<?php endwhile;
endif; ?>

<?php get_footer(); ?>