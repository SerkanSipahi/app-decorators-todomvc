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
});
