module.exports = function (grunt) {

    /*
        Create template pages and their associated assets
        Run from the command line as follows: grunt create --name=$var
    */

    var name = grunt.option('name') || null;

    grunt.registerTask('create', function() {

        var assetsDirectory = 'src/assets/',
            pagesDirectory = 'src/templates/pages/',
            cssDirectory = 'src/assets/styl/',
            imagesDirectory = 'src/assets/img/',
            javascriptDirectory = 'src/assets/js/scripts/',
            modulePattern = 'var '+name+' = (function () {\n\tfunction init () {\n\t}\n\treturn {\n\t\tinit: init\n\t}\n}());\n\n$(function () {\n\t'+name+'.init();\n});',
            templateContent = '---\ntitle: '+name+'\n---';

        // // Cursory check that the file doesn't exist
        // if (grunt.file.exists(pagesDirectory+name+'.hbs')) {
        //     grunt.fail.warn('Sorry, that page already exists', 1);
        // }

        // Make img directory
        grunt.file.mkdir(imagesDirectory+name);

        // create css
        grunt.file.write(cssDirectory+name+'.styl', '.'+name+' \n\tposition relative');

        // create js module
        grunt.file.write(javascriptDirectory+name+'.js', modulePattern);

        // create page template
        grunt.file.write(pagesDirectory+name+'.hbs', templateContent);

    });
};