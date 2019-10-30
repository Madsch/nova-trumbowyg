let mix = require('laravel-mix');

mix.js('resources/js/field.js', 'dist/js')
   .js('resources/js/plugins/trumbowyg.arrowLink.js', 'dist/js')
   .sass('resources/sass/field.scss', 'dist/css')
    .webpackConfig({
        resolve: {
            symlinks: false
        }
    });

mix.autoload({
    'jquery': ['$', 'window.jQuery', 'jQuery'],
    'vue': ['Vue','window.Vue'],
});
