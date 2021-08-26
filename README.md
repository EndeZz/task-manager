# Video service htc

## Installation

Clone this repo and yarn install.

```bash
yarn install
```

## Usage

### Development server

```bash
yarn dev
```

You can view the development server at `localhost:8080`.

### Production build

```bash
yarn build
```

## Dependencies

### App

- [`prop-types`](https://github.com/facebook/prop-types) - Runtime type checking for React props and similar objects
- [`web-vitals`](https://www.npmjs.com/package/web-vitals/v/2.1.0) - Library for measuring all the Web Vitals metrics on real users

### React

- [`react`](https://www.npmjs.com/package/react) - Package contains only the functionality necessary to define React components
- [`react-dom`](https://www.npmjs.com/package/react-dom) - Package serves as the entry point to the DOM and server renderers for React
- [`react-scripts`](https://www.npmjs.com/package/react-scripts) - Package includes scripts and configuration used by Create React App

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-transform-runtime`](https://babeljs.io/docs/en/babel-plugin-transform-runtime) - A plugin that enables the re-use of Babel's injected helper code to save on codesize.
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel
- [`@babel/preset-react`](https://www.npmjs.com/package/@babel/preset-react) - Babel preset for all React plugins.

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`file-loader`](https://github.com/webpack-contrib/file-loader) - Resolves import/require() on a file into a url and emits the file into the output directory.
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Plugins

- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template

### Linters

- [`eslint`](https://github.com/eslint/eslint) - Enforce styleguide across application
- [`eslint-config-airbnb`](https://github.com/cjddny/eslint-config-airbnb) - Provides Airbnb's .eslintrc as an extensible shared config
- [`eslint-import-resolver-node`](https://www.npmjs.com/package/eslint-import-resolver-node) - Default Node-style module resolution plugin for eslint-plugin-import
- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) - Implment import rules
- [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) - Static AST checker for accessibility rules on JSX elements
- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) - React specific linting rules for ESLint
- [`eslint-plugin-react-hooks`](https://github.com/paboulos/react-hooks-eslint) - This ESLint plugin enforces the Rules of Hooks
- [`eslint-webpack-plugin`](https://github.com/webpack-contrib/eslint-webpack-plugin) - ESLint configuration for webpack
- [`stylelint`](https://www.npmjs.com/package/stylelint) - A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
- [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) - Turns on additional rules to enforce the common stylistic conventions found within a handful of CSS styleguides
- [`stylelint-webpack-plugin`](https://github.com/webpack-contrib/stylelint-webpack-plugin) - This plugin uses stylelint that helps you avoid errors and enforce conventions in your styles.

## Author

- [Elizaveta Shkliarova](https://gitlab.study.htc-cs.com/eshkliarova)
