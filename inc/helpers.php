<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

function explodeAndSplit($array)
{
  $weight = '';
  foreach ($array as $key => $word) {

    if ($key == 0) {
      echo '<div class="first-line">';
    }

    if ($key == 1) {
      $weight = ' font-weight-light';
    }
    
    $word = str_split($word);
    foreach ($word as $char) {
      $x = rand(-50, 50);
      $y = rand(0, -70);
      $r = rand(0, 360);
      echo '<span class="name d-inline-block' . $weight . '" uk-parallax="x:' . $x . 'vw,0;y:' . $y . 'vh,0;rotate:' . $r . ',0;opacity:0,1;viewport:0.10" style="opacity: 0">' . $char . '</span>';
    }

    end($array);
    if ($key == key($array)) {
      echo '</div>';
    }
    reset($array);
  }
  return;
}
