const mix = require('laravel-mix');

require('laravel-mix-polyfill');
mix.sass('scss/index.scss', 'web/css/index.min.css');

mix.js('js/index.js', 'web/js/index.min.js').polyfill({
    enabled: true,
    useBuiltIns: "usage",
    targets: "firefox 50, IE 11"
});