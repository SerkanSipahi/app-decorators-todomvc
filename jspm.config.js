SystemJS.config({
    transpiler: false,
    defaultJSExtensions: true,
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    paths: {
        "github:": "jspm_packages/github/",
        "npm:": "jspm_packages/npm/",
        "app-dec:": "node_modules/app-decorators/",
        "src/": "src/",
        "test/": "test/",
    },
    map: {
        "bootstrap": "app-dec:lib/bootstrap",
        "app-decorators": "app-dec:lib/index",
        "app-decorators-helper/register-customelement": "app-dec:lib/libs/customelement",
        "app-decorators-helper/random-storage": "app-dec:lib/libs/random-storage"
    },
    packages: {
        "node_modules": {
            "defaultExtension": "js"
        },
        "src": {
            "defaultExtension": "js"
        },
        "test": {
            "defaultExtension": "js"
        }
    }
});