module.exports = function (config) {

    config.set({
        basePath: './dist',
        frameworks: [
            'jspm',
            'mocha',
            'sinon',
            'should',
        ],
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-safari-launcher',
            'karma-mocha',
            'karma-sinon',
            'karma-should',
            'karma-jspm',
        ],
        browsers: [
            'Chrome',
            'ChromeCanary',
            'Firefox',
            'Safari',
        ],
        files: [{
            pattern: '**/*.js.map',
            included: false
        }],
        jspm: {

            browser: "jspm.browser.js",
            config: "jspm.config.js",

            loadFiles: [
                'test/*spec.js',
            ],
            serveFiles: [
                // internal libs/files
                'src/*.js',
                // external libs/files
                'node_modules/core-js/**/*.js',
                'node_modules/handlebars/dist/handlebars.js',
                'node_modules/immutable/dist/immutable.js',
                'node_modules/webcomponents.js/webcomponents-lite.js',
                'node_modules/pouchdb/dist/pouchdb.js',
                'node_modules/bluebird/js/browser/bluebird.js',
                'node_modules/xregexp/src/index.js',
                'node_modules/xregexp/src/**/*.js'
            ]
        },
        singleRun: false,
        port: 9876,
    });

    if(process.env.TRAVIS){
        config.browsers = ['Chrome_travis_ci'];
    }

};
