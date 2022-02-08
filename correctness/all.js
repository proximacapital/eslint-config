require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        sourceType: "module",
    },
    plugins: [
        "@typescript-eslint",
        "@typescript-eslint/tslint",
        "eslint-plugin-import",
        "import-newlines",
    ],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],

    overrides: [
        {
            files: ["*.js", "*.test.ts", "*.demo.ts", "*.bench.ts"],
        },
    ],
    ignorePatterns: ["Gulpfile.js", ".github", "Logs", "Dist", "Routes", "coverage"],
    rules: {
        "@typescript-eslint/array-type": ["error", { "default": "array" }],                                 // Prefer number[] over Array<number>
        "@typescript-eslint/dot-notation": "error",                                                         // Disallow obj["prop"] access
        "@typescript-eslint/explicit-member-accessibility": ["error", { "accessibility": "explicit" }],     // Must set private, public etc.
        "@typescript-eslint/explicit-module-boundary-types": [                                              // Enforce return types on exported methods
            "error",
            { "allowArgumentsExplicitlyTypedAsAny": true },
        ],
        "@typescript-eslint/member-delimiter-style": [                                                      // Require ";" after member declarations
            "error",                                                                                        // Last ";" is not required on single line
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true,
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false,
                }
            }
        ],
        "@typescript-eslint/no-empty-function": "off",                                                      // Disallow empty functions, including callbacks
        "@typescript-eslint/no-explicit-any": "error",                                                      // Disallow use of the "any" type
        "@typescript-eslint/no-unnecessary-condition": "error",                                             // Dissallows unnecessary "?.", "if (0 === 0)" etc
        "@typescript-eslint/strict-boolean-expressions": "error",                                           // Disallows coercing non-booleans to boolean
        "@typescript-eslint/no-non-null-assertion": "error",                                                // Disallows usage of "!" e.g: lUndefined!;
        "no-unused-vars": "off",                                                                            // turn off eslint variant for correct @typescript output
        "@typescript-eslint/no-unused-vars": ["error", { "ignoreRestSiblings": true, "varsIgnorePattern": "^__" }],     // Disallows unused vars, unless __Type;
        "@typescript-eslint/prefer-nullish-coalescing": "error",                                            // Prefer "??" over "||", so we don't do a falsy check
        "@typescript-eslint/prefer-readonly": "error",                                                      // Prefer readonly private members where possible
        "@typescript-eslint/quotes": ["error", "double", { "allowTemplateLiterals": true }],                // Use "" quotes instead of '', or ``
        "@typescript-eslint/type-annotation-spacing": "error",                                              // const foo: number, space after ":"
        "@typescript-eslint/switch-exhaustiveness-check": "error",                                          // Requires all branches to be covered or a default
        "@typescript-eslint/tslint/config": [                                                               // Legacy tslint rules, runs our semicolon rules
            "error",
            {
                "rules": {
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-separator",
                        "check-type",
                        "check-type-operator",
                        "check-preblock"
                    ],
                    "ordered-imports": true,
                    "semicolon": [true, "always"],
                },
            },
        ],

       /**
        * Tools for AST:
        * - AST query language: https://estools.github.io/esquery/
        * - AST explorer: https://astexplorer.net/
        * - ESLint on Selectors: https://eslint.org/docs/4.0.0/developer-guide/selectors
        * - ESLint Indent: https://eslint.org/docs/rules/indent
        * - Syntax Tree Format: https://esprima.readthedocs.io/en/latest/syntax-tree-format.html
       **/
    },
}
