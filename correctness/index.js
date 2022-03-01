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
    extends: ["plugin:@typescript-eslint/recommended"],
    ignorePatterns: ["Gulpfile.js", ".github", "Logs", "Dist", "Routes", "coverage"],
    rules: {
        "@typescript-eslint/array-type": ["error", { "default": "array" }],                                 // Prefer number[] over Array<number>
        "@typescript-eslint/dot-notation": "error",                                                         // Disallow obj["prop"] access
        "@typescript-eslint/explicit-member-accessibility": ["error", { "accessibility": "explicit" }],     // Must set private, public etc.
        "@typescript-eslint/explicit-module-boundary-types": [                                              // Enforce return types on exported methods
            "error",
            { "allowArgumentsExplicitlyTypedAsAny": true },
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
        "@typescript-eslint/switch-exhaustiveness-check": "error",                                          // Requires all branches to be covered or a default
        "no-extend-native": "error",                                                                        // Disallow adding properties to in-built prototypes
        "no-console": "error",                                                                              // Disallow calls to console.log
        "no-async-promise-executor": "error",                                                               // Only allow synchronous promise executors
        "no-duplicate-imports": "error",                                                                    // Imports from the same file must be merged
        "no-useless-escape": "error",                                                                       // Disallow char escapes with no effect
        "no-useless-call": "error",                                                                         // Disallow uselss usage of .call & .apply
        "no-useless-catch": "error",                                                                        // Disallow catching only to throw
        "no-useless-computed-key": ["error", { "enforceForClassMembers": true }],                           // Prefer { a: 0 } over { ["a"]: 0 }
        "prefer-const": "error",                                                                            // If a var is not re-assigned, force const
        "import/no-default-export": "error",                                                                // Disallow default (unnamed) exports
        "no-fallthrough": "error",                                                                          // Require explicit comment when switch cases fall through
        "no-implicit-coercion": "error",
        "eqeqeq": "error",
        "constructor-super": "error",
        "for-direction": "error",
        "getter-return": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-import-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-new-symbol": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-self-assign": "error",
        "no-setter-return": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-this-before-super": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unused-labels": "error",
        "no-useless-backreference": "error",
        "no-with": "error",
        "require-yield": "error",
        "use-isnan": "error",
        "valid-typeof": "error",                                                                                  // enforce === and !==
    },
}
