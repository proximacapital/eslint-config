require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: "ESLINT-CONFIG/Stylistic/StrictStyle",
  overrides: [
    {
      files: ["*.ts", "*.js"],
      "parserOptions": {
        "project": [
          "./tsconfig.json"
        ]
      },  
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
        "no-constant-condition": "off"
      }
    }
  ],  
};
