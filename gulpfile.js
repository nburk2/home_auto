/* GULP COMMANDS

   *************** HAVE TO CREATE 'gulpfile.js' ***************

   CONSOLE COMMANDS:
   gulp: Runs all default and user defined tasks
   gulp 'task name': Runs all user defined tasks

   GULP FUNCTINOS:
   require(): is used to require gulp and all plugins
   .task('task name', callback or array): is used to define tasks that need to be run
   .pipe(some function): is used to connect what's run within each task
   .src('files to work from'): is the source of the files we are working on and minifying
   .dest('output folder'): is used to define the output folder of files
   .watch('files to watch', ['Tasks to run']): is used to watch for changes of files


*/
/*GULP and GULP Plugins are defined here after being installed via npm*/
var gulp = require('gulp'), // GULP
  plumber = require('gulp-plumber'), // SYNTAX ERROR CHECKER
  uglify = require('gulp-uglify'), // MINIFY JAVASCRIPT
  minifyCss = require('gulp-minify-css'), // MINIFY CSS
  // sass = require('gulp-sass'),
  template = require('gulp-template-compile'),
  concat = require('gulp-concat'),
  Builder = require('systemjs-builder');
  // connect = require('gulp-connect');

  gulp.task('bundle', function() {
      // optional constructor options
      // sets the baseURL and loads the configuration file
      var builder = new Builder('', 'systemjs.config.js');

      /*
         the parameters of the below buildStatic() method are:
             - your transcompiled application boot file (the one wich would contain the bootstrap(MyApp, [PROVIDERS]) function - in my case 'dist/app/boot.js'
             - the output (file into which it would output the bundled code)
             - options {}
      */
      return builder
          .buildStatic('app/main.js', 'dist/app/bundle.js', { minify: true, sourceMaps: true})
          .then(function() {
              console.log('Build complete');
          })
          .catch(function(err) {
              console.log('Build error');
              console.log(err);
          });
  });

var JAVASCRIPT_SRC = [
    'app/*.js',
    'app/*.map'
  ],

  TEMPLATE_SRC = "app/views/*.html",
  CSS_SRC = "creative.css",
  // IMAGE_SRC = "src/images/**/*",

  JAVASCRIPT_DEST = "dist/app",
  MODULES_DEST = "dist/node_modules",
  TEMPLATE_DEST = "dist/app/views",
  CSS_DEST = "dist",

  INDEX_SRC = "index.html",
  INDEX_DEST = "dist",
  SYSJS_SRC = "systemjs.config.js",
  SYSJS_DEST = "dist",
  FONT_SRC = "font-awesome/**",
  FONT_DEST = "dist/font-awesome"



gulp.task('scripts', function(){
  return gulp.src(JAVASCRIPT_SRC)
  .pipe(plumber())
  // .pipe(concat(JAVASCRIPT_DEST_FILE_NAME))
  // .pipe(uglify())
  .pipe(gulp.dest(JAVASCRIPT_DEST));
  // .pipe(connect.reload());
});

gulp.task('index', function(){
  return gulp.src(INDEX_SRC)
  .pipe(plumber())
  .pipe(gulp.dest(INDEX_DEST));
});

gulp.task('sysjs', function(){
  return gulp.src(SYSJS_SRC)
  .pipe(plumber())
  .pipe(gulp.dest(SYSJS_DEST));
});

gulp.task('css', function(){
  return gulp.src(CSS_SRC)
  .pipe(plumber())
  .pipe(gulp.dest(CSS_DEST));
});

/* This task watches css and minifies styles */
// gulp.task('styles', function(){
//   gulp.src(CSS_SRC)
//   .pipe(sass().on('error', sass.logError))
//   // .pipe(minifyCss())
//   .pipe(concat(CSS_DEST_FILE_NAME))
//   .pipe(gulp.dest(CSS_DEST))
//   .pipe(connect.reload());
// });

/* Handlebars templates */
gulp.task('templates', function () {
  gulp.src(TEMPLATE_SRC)
    // .pipe(concat('templates.js'))
    // .pipe(uglify())
    .pipe(gulp.dest(TEMPLATE_DEST));
});

gulp.task('font', function () {
  gulp.src((FONT_SRC))
    // .pipe(concat('templates.js'))
    // .pipe(uglify())
    .pipe(gulp.dest(FONT_DEST));
});

// gulp.task('images', function () {
//   gulp.src(IMAGE_SRC)
//     .pipe(gulp.dest('dist/f_safety_images'));
// });

// gulp.task('watch', function(){
//   gulp.watch(TEMPLATE_SRC, ['templates']);
//   gulp.watch(IMAGE_SRC, ['imagess']);
//   gulp.watch(JAVASCRIPT_SRC, ['scripts']);
//   gulp.watch(CSS_SRC, ['styles']);
// });

gulp.task("libs", function () {
    return gulp.src([
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/zone.min.js',
            'bootstrap/dist/css/bootstrap.min.css',
            'bootstrap/dist/js/bootstrap.min.js',
            'jquery/dist/jquery.min.js'
            // '@angular/**'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("dist/node_modules"));
});

gulp.task('default', ['templates', 'scripts', 'index','sysjs', 'css', 'font', 'libs', 'bundle']);
