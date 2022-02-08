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
    extends: ["../correctness/all.js"],
    overrides: [
        {
            files: ["*.js"],
            rules: {
                "@typescript-eslint/tslint/config": "off",
                "no-undef": "off",
                "@typescript-eslint/no-var-requires": "off",
            },
        },
        {
            files: ["*.test.ts", "*.demo.ts", "*.bench.ts"],
            rules: {
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/dot-notation": "off",
            },
        },
        {
            files: ["*.ts"],
            "rules": {
              "@typescript-eslint/typedef": "off",
              "@typescript-eslint/no-inferrable-types": [
                "error",
                {
                  "ignoreParameters": true,
                  "ignoreProperties": true
                }
              ],
              "@typescript-eslint/explicit-function-return-type": "error",
            }
        },
    ],
    ignorePatterns: ["Gulpfile.js", ".github", "Logs", "Dist", "Routes", "coverage"],
    rules: {
        "@typescript-eslint/member-ordering": [                                                             // Grouping of similar properties together
            "error",
            {
                default: {
                    memberTypes: [
                        // private/protected members // Declare your data
                        // constructor               // Initialize your data
                        // private methods           // Manage your data
                        // public getters/setters    // Expose your data (read & write)
                        // public methods            // Expose your data (read, write & execute)

                        "signature",

                        "private-static-field",
                        "protected-static-field",

                        "private-field",
                        "protected-field",

                        "constructor",

                        "private-static-method",
                        "private-method",
                        "protected-static-method",
                        "protected-method",

                        "public-static-field",
                        "public-field",
                        "public-static-method",
                        "public-method",
                    ],
                },
            },
        ],
        "@typescript-eslint/naming-convention": [                                                           // Define acceptable naming styles
            "error",
            {
                "selector": "interface",
                "format": ["PascalCase"],
                "prefix": ["I"]
            },
            {
                "selector": "typeAlias",
                "format": ["PascalCase"],
                "prefix": ["T", "__T"]
            },
            {
                "selector": "enum",
                "format": ["PascalCase"],
                "prefix": ["E"]
            },
            {
                "selector": "variableLike",
                "format": ["camelCase", "PascalCase"],
            },
            {
                "selector": "variable",
                "modifiers": ["const"],
                "format": ["camelCase", "PascalCase", "UPPER_CASE"],
            },
        ],
        "arrow-parens": ["error", "always"],                                                                // Force parens around arrow arguments
        "brace-style": ["error", "allman", { "allowSingleLine": true }],                                    // Parenthetically correct braces
        "comma-dangle": [                                                                                   // Force dangling commas if }/]/) appears on newline
            "error",
            {
                arrays: "always-multiline",
                objects: "always-multiline",
                imports: "always-multiline",
                exports: "always-multiline",
                functions: "always-multiline",
            },
        ],
        "function-paren-newline": ["error", "multiline-arguments"],                                         // Multiline functions must have close paren on newline
        "function-call-argument-newline": ["error", "consistent"],                                          // Multiline arguments must all be on newline
        "curly": ["error", "multi-line", "consistent"],                                                     // Always use curly unless if and else are one-line
        "eol-last": "error",                                                                                // Force files to end with newline
        "max-len": ["error", { "ignorePattern": "//", "code": 120 }],                                       // Max line-length of 120 columns, ignore comments
        "newline-per-chained-call": "off",                                                                  // Force chained calls (.then) onto new lines
        "no-irregular-whitespace": "error",                                                                 // Disallow weird whitespace characters
        "no-multiple-empty-lines": "error",                                                                 // Allow at most one empty line between code
        "no-trailing-spaces": "error",                                                                      // Strip whitespace after line ends
        "object-curly-spacing": ["error", "always"], // TODO: Test { a:0 }                                  // Requires spaces like: { a: 0 }
        "one-var": ["error", "never"],                                                                      // Requires a keyword per declared var
        "prefer-spread": "error",                                                                           // Replace .apply with ... where possible
        "spaced-comment": ["error", "always", { "markers": ["/"] }],                                        // Require a space after "//" like in this file
        "space-before-function-paren": ["error", "never"], "space-in-parens": ["error", "never"],           // func(x) vs func (x), we use no space
        "space-before-blocks": ["error", "always"],                                                         // Space before "{}", like func() {}
        "arrow-spacing": "error",                                                                           // Require space before and after =>, () => {}
        "keyword-spacing": "error",                                                                         // Require spaces before and after keywords (if, else)
        "key-spacing": "error",                                                                             // No space before colon in object literals
        "operator-linebreak": [                                                                             // force operators to sit at beginning of new line
            "error",
            "before",
            {
                "overrides":
                {
                    "=": "ignore"
                }
            }
        ],
        "import-newlines/enforce": [
            "error",
            {
                "items": 6,
                "max-len": 120,
                "semi": false,
            }
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "ignoredNodes": ["ArrowFunctionExpression", "LogicalExpression", "SwitchCase[consequent]"],
            },
        ],
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
        "@typescript-eslint/type-annotation-spacing": "error",                                              // const foo: number, space after ":"
        "@typescript-eslint/quotes": ["error", "double", { "allowTemplateLiterals": true }],                // Use "" quotes instead of '', or ``
       /**
        * Tools for AST:
        * - AST query language: https://estools.github.io/esquery/
        * - AST explorer: https://astexplorer.net/
        * - ESLint on Selectors: https://eslint.org/docs/4.0.0/developer-guide/selectors
        * - ESLint Indent: https://eslint.org/docs/rules/indent
        * - Syntax Tree Format: https://esprima.readthedocs.io/en/latest/syntax-tree-format.html
       **/
    },
    reportUnusedDisableDirectives: true,
};
