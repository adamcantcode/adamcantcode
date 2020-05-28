<?php defined('ABSPATH') or header('Location: /'); ?>

<?php

/**
 * Create weird text
 */

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

/**
 * Generate outline of blocks from headings
 * h2,h3,h4,h5
 */
function outlineHeadings($title)
{
  $blocks = parse_blocks(get_the_content());
  $outline = [];
  $classLvl = '2';
  $trim = '35';
  echo '<div class="lvl-1">' . $title . '</div>';
  foreach ($blocks as $block) {
    if (isset($block['blockName'])) {
      if ($block['blockName'] === 'core/heading') {
        if (isset($block['attrs']['level'])) {
          $lvl = $block['attrs']['level'];
          switch ($lvl) {
            case 3:
              $item = $block['innerHTML'];
              $classLvl = '3';
              $trim = 45;
              break;
            case 4:
              $item = $block['innerHTML'];
              $classLvl = '4';
              $trim = 55;
              break;
            case 5:
              $item = $block['innerHTML'];
              $classLvl = '5';
              $trim = 65;
              break;
          }
        } elseif (!isset($block['attrs']['level'])) {
          $item = $block['innerHTML'];
        }
        if (isset($item)) {
          $output = '';
          $output .= '<div class="lvl-' . $classLvl . ' text-truncate" data-toggle="tooltip" data-placement="top" title="' . wp_strip_all_tags($item) . '">';
          $output .= wp_strip_all_tags($item);
          $output .= '</div>';
          echo $output;
        }
      }
    }
  }
}

/**
 * Hex to RGB
 */
function hexToRgb($color)
{
  if ($color[0] == '#') {
    $color = substr($color, 1);
  }
  if (strlen($color) == 6) {
    list($r, $g, $b) = array($color[0] . $color[1], $color[2] . $color[3], $color[4] . $color[5]);
  } elseif (strlen($color) == 3) {
    list($r, $g, $b) = array($color[0] . $color[0], $color[1] . $color[1], $color[2] . $color[2]);
  } else {
    return false;
  }
  $r = hexdec($r);
  $g = hexdec($g);
  $b = hexdec($b);
  return 'rgb(' . $r . ',' . $g . ',' . $b . ')';
}

/**
 * Get the first letter
 */
function firstLetter($title) // Choose Chicago
{
  $scramble = array();
  $words = explode(" ", $title); // ['choose', 'chicago']
  foreach ($words as $word) {
    array_push($scramble, $word[0]);
  }
  $firstLetters = implode("", $scramble);
  return $firstLetters;
}
