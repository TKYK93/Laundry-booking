module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "sourceType": "module",
        "project": "./tsconfig.json",
    },
    root: true,
    rules: {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"]
    }

}