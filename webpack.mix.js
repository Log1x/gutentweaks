const mix = require('laravel-mix')
            require('@tinypixelco/laravel-mix-wp-blocks')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Sass file
 | for your application, as well as bundling up your JS files.
 |
 */

mix
  .setPublicPath('./public')
  .sass('resources/css/app.scss', 'public/css')
  .sass('resources/css/editor.scss', 'public/css')
  .js('resources/js/app.js', 'public/js')
  .blocks('resources/js/editor.js', 'public/js')
  .version()
  .options({
    processCssUrls: false,
    postCss: [require('tailwindcss')('./tailwind.config.js')]
  })
