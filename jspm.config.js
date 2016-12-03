SystemJS.config({
    transpiler: false,
    defaultJSExtensions: true,
    paths: {
        "github:": "jspm_packages/github/",
        "npm:": "jspm_packages/npm/",
        "app-dec:": "node_modules/app-decorators/",
        "src/": "src/",
        "test/": "test/",
    },
    map: {
        "app-decorators": "app-dec:lib/app-decorators",
        "app-decorators-helper/register-customelement": "app-dec:lib/libs/customelement",
        "app-decorators-helper/random-storage": "app-dec:lib/libs/random-storage"
    },
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {},
    packages: {}
});
