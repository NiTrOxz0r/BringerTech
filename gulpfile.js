var gulp = require('gulp');
                          var sass = require('gulp-sass');
                          var autoprefixer = require('gulp-autoprefixer');
                          var browserSync = require('browser-sync').create();
                           
                          gulp.task('server', ['sass'], function() {
                              
                              browserSync.init({
                                      server: "./"
                              });
                              
                              gulp.watch("./sass/*.scss", ['sass']);
                              gulp.watch("./*.html").on('change', browserSync.reload);
                          
                          });
                          
                          gulp.task('sass', function() {
                              gulp.src('./sass/*.scss')
                                  .pipe(sass())
                                  .pipe(autoprefixer({
                                    versions: ['last 2 browsers']
                                    }))
                                  .pipe(gulp.dest('./css'))
                                  .pipe(browserSync.stream());
                          });
                          
                          gulp.task('watch', function(){
                              gulp.watch(['./sass/*.scss'], ['sass']);
                          });                                    
                      

//Gulp Tareas

/*const gulp = require('gulp');

                  //4 Métodos de Gulp
                  gulp.task();//Definir Tarea
                  gulp.src();//Ruta de Origin
                  gulp.dest();//Resultado de la Tarea Indicada
                  gulp.watch();//Supervisar Directorio*/                 
              