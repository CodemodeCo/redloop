/**
 * Created by sasidhar on 07/08/16.
 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compile:{
                options: {
                    compress: true
                },
                files: {
                    "css/styles.css":"css/less/styles.less"
                }
            }
        },
        watch:{
            less:{
                files: "css/less/**/*.less",
                tasks: "less:compile",
                options:{
                    livereload: {
                        host: 'localhost',
                        port: 9000
                    }
                }
            }
        }
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['less', 'watch']);

};