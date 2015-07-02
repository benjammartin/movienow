var gulp      = require('gulp'),
    rename    = require('gulp-rename'),     // Renommage des fichiers
    less     = require('gulp-less'),       // Conversion des SCSS en CSS
    minifyCss = require('gulp-minify-css'), // Minification des CSS
    uglify    = require('gulp-uglify');     // Minification/Obfuscation des JS


// LESS TASK
gulp.task('css', function() 
{
  return gulp.src('/css/*.less')    // Prend en entrée les fichiers *.scss
    .pipe(less())                      // Compile les fichiers
    .pipe(minifyCss())                 // Minifie le CSS qui a été généré
    .pipe(gulp.dest('/style/'));  // Sauvegarde le tout dans /src/style
});

