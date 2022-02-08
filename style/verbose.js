require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    extends: "./standard.js",
    overrides: [
        {
            files: ["*.js", "*.ts"],
            "rules": {
                "@typescript-eslint/no-inferrable-types": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
            },
        },
    ],
    rules: {
        "@typescript-eslint/typedef": [
            "error",
            {
                "arrayDestructuring": false,                                                                // Infer types on array destructuring
                "arrowParameter": true,
                "memberVariableDeclaration": true,
                "objectDestructuring": false,                                                               // Infer types on object destructuring
                "parameter": true,
                "propertyDeclaration": true,
                "variableDeclaration": true,
                "variableDeclarationIgnoreFunction": true,
            },
        ],
    },
};
