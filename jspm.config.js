SystemJS.config({
    transpiler: false
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
});

SystemJS.config({
    defaultJSExtensions: true,
    paths: {
        "github:": "jspm_packages/github/",
        "npm:": "jspm_packages/npm/",
        "src/": "src/",
        "test/": "test/"
    },
    map: {
        "app-decorators": "node_modules/app-decorators/lib/app-decorators",
    },
    packages: {
        "node_modules": {
            defaultExtension: 'js',
        },
        "src": {
            defaultExtension: 'js',
        }
    },
});
