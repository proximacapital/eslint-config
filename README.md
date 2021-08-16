# Proxima Capital's ESLint-Config

This repo contains Proxima's canonical `eslint` config, it is strongly recommended that you keep your `TypeScript` repositories in-line with this config where possible. Currently all the rules are sitting inside the `index.js` (which is exported via the `package.json`); however a refactor may eventually occur that breaks the rules up into various files for easier management.

This package has peer dependencies and you'll want to resolve them when using this as a dev dependence. See [below](#usage-pkg).

## Usage
In line with the [eslint recommendations](https://eslint.org/docs/developer-guide/shareable-configs), the easiest way to use this config in your repo is to extend the `eslintrc.js` in your root directory. That is,
```js
// repo_root/.eslintrc.js
module.exports = {
    extends: "@proximacapital/eslint-config"
}
```
### <a href="#usage-pkg" id="usage-pkg">`package.json` modifications</a>
You can also opt to specify your configuration via `package.json` and in this instance you wouldn't need an `eslintrc` file in your root directory:
```json
  "eslintConfig": {
    "extends": "./Src/Rules/eslint-config"
  },
  "devDependencies": {
    "@proximacapital/eslint-config": "0.0.2",
    "eslint": "7.32.0",
    "eslint-plugin-import": "2.24.0",
    "eslint-plugin-import-newlines": "1.1.4",
    "eslint-plugin-typescript-sort-keys": "1.7.0",
    "eslint-plugin-unicorn": "35.0.0",
  },
  "peerDependencies": {
    "@typescript-eslint/eslint-plugin": "4.29.1",
    "@typescript-eslint/eslint-plugin-tslint": "4.29.1",
    "@typescript-eslint/parser": "4.29.1",
    "eslint": "7.32.0",
    "eslint-plugin-import": "2.24.0",
    "eslint-plugin-import-newlines": "1.1.4",
    "eslint-plugin-typescript-sort-keys": "1.7.0",
    "eslint-plugin-unicorn": "35.0.0",
  }
```

## Development
If you want to make additions to this configuration and don't want to wait between npm publishes, your best bet is to use [`npm link`](https://medium.com/dailyjs/how-to-use-npm-link-7375b6219557) to symbolically link your changes to the package you want to try it out in.

Let's say you wanted to make changes here and test them out in the `infrastructure` repo:
```bash
# inside this repo
npm link # <- this makes a symbolic link in the global node_modules folder
cd ../infrastructure
# copy the symlink into the ./node_modules/@proximacapital/eslint-config/
npm link @proximacapital/eslint-config
```

Now, provided your `infrastructure/.eslintrc.js` or `infrastructure/package.json` is configured as above, you should see the effects of your changes.

Don't forget to `npm unlink` (`npm uninstall`) after you publish your changes:
```bash
# inside the infrastructure repo
npm unlink --no-save @proximacapital/eslint-config
npm install # download latest eslint-config
```
