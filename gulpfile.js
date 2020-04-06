var gulp        = require('gulp'),
    scss        = require('gulp-sass'),
    concat      = require('gulp-concat'),
    //uglify      = require('gulp-uglify'),
    terser      = require('gulp-terser'),
    csso        = require('gulp-csso'),
    prefixer    = require('gulp-autoprefixer'),
    sourcemaps  = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    shell       = require('gulp-shell'),
    reload      = browserSync.reload,
    src         = {
    scss  : 'src/scss',
    js    : 'src/js',
    vendor: 'node_modules'
  },
  dest = {
    css : 'dist/css',
    js  : 'dist/js',
    font: 'dist/fonts'
  };

gulp.task('css', function() {
  return gulp
    .src([
      // src.vendor + '/uikit/dist/css/uikit.css',
      // src.vendor + "/@fortawesome/fontawesome-free/scss/*.scss",
      src.vendor + '/uikit/src/scss/components/animation.scss',
      // src.vendor + '/aos/dist/aos.css',
      src.scss + '/*.scss'
    ])
    .pipe(sourcemaps.init())
    .pipe(scss())
    .pipe(
      prefixer({
        cascade: false
      })
    )
    .pipe(concat('app.css'))
    .pipe(
      csso({
        comments   : false,
        restructure: true
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest.css))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp
    .src([
      src.vendor + '/jquery/dist/jquery.js',
      src.vendor + '/popper.js/dist/umd/popper.min.js',
      src.vendor + '/bootstrap/dist/js/bootstrap.js',
      src.vendor + '/uikit/dist/js/uikit.js',
      // src.vendor + '/lax.js/lib/lax.min.js',
      src.vendor + '/swup/dist/swup.min.js',
      src.vendor + '/@swup/scroll-plugin/dist/SwupScrollPlugin.js',
      // src.vendor + '/number-to-words/numberToWords.js',
      // src.vendor + '/aos/dist/aos.js',
      // src.vendor + '/blobs/index.js',
      // src.vendor + "/scroll-parallax/dist/Parallax.js",
      // src.vendor + "/gsap/src/uncompressed/TimelineLite.js",
      // src.vendor + "/gsap/src/uncompressed/TimelineMax.js",
      // src.vendor + "/gsap/src/uncompressed/TweenLite.js",
      // src.vendor + "/gsap/src/uncompressed/TweenMax.js",
      // src.vendor + "/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js",
      // src.vendor + "/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js",
      // src.vendor + "/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js",
      src.js + '/theme.js',
      dest.js + '/app.bundle.js'
    ])
    .pipe(concat('app.js'))
    .pipe(terser())
    .pipe(gulp.dest(dest.js))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  browserSync.init({
    proxy: 'http://adamcantcode.local/'
  });
  gulp.watch(src.scss + '/*.scss', gulp.series('css'));
  gulp.watch(src.js + '/*.js', gulp.series('bundle', 'js')).on('change', reload);
  gulp.watch('**/*.php').on('change', reload);
});

// gulp.task('fonts', function() {
//   return gulp.src(src.vendor + '/@fortawesome/fontawesome-free/webfonts/*')
//     .pipe(gulp.dest(dest.fonts));
// });

gulp.task('bundle', shell.task([
  'browserify C:/wamp64/www/adamcantcode/wp-content/themes/adamcantcode/src/js/client.js -o C:/wamp64/www/adamcantcode/wp-content/themes/adamcantcode/dist/js/app.bundle.js'
]));

// gulp.task('default', gulp.series('css'));
// gulp.task('js', gulp.series('js'));
gulp.task('run', gulp.series('css', 'bundle', 'js' ));
gulp.task('build', gulp.series('bundle', 'js' ));
