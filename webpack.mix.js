const mix = require('laravel-mix')

mix.copy('./index.html', './build/index.html').js('./src/index.js', './build/js/index.js').js('./src/woof.es6.js', './build/js/woof.js')

mix.disableNotifications()