## Installation

### How to use

Clone this repo and npm install.

```
npm i
```

### Pre-defined npm scripts

``` bash
# Build project to the dist folder.
npm run build

# Run webpack dev server with eslint and stylelint plugins and open browser.
npm run start

# Run eslint
npm run lint

# Run fix eslint
npm run fix
```

You can view the development server at `localhost:8080`.

## Applied technology
- Webpack
- Babel
- TypeScript
- SCSS
- Pug
## Dependencies

### Webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel

### TypeScript

- [`TypeScript`](https://webpack.js.org/guides/typescript/) - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript
### Loaders

- [`html-loader`](https://webpack.js.org/loaders/html-loader/) - Exports HTML as string. HTML is minimized when the compiler demands.
- [`pug-loader`](https://www.npmjs.com/package/pug-loader) - Pug loader for webpack
- [`ts-loader`](https://webpack.js.org/guides/typescript/) -This is the TypeScript loader for webpack
- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
  - [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`imagemin-webpack-plugin`](https://github.com/Klathmon/imagemin-webpack-plugin) - This plugin that uses [`Imagemin`](https://github.com/imagemin/imagemin) to compress all images in your project.
- [`css-minimizer-webpack-plugin`](https://www.npmjs.com/package/css-minimizer-webpack-plugin) - This plugin uses cssnano to optimize and minify your CSS.
### Linters

- [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) - Base styleguide to enforce rules
- [`eslint-webpack-plugin`](https://github.com/webpack-contrib/eslint-webpack-plugin) - ESLint configuration for webpack
- [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) - The standard shareable config for stylelint
- [`stylelint-webpack-plugin`](https://github.com/webpack-contrib/stylelint-webpack-plugin) - This plugin uses [`stylelint`](https://stylelint.io/) that helps you avoid errors and enforce conventions in your styles
- [`eslint-config-airbnb-typescript`](https://github.com/iamturns/eslint-config-airbnb-typescript) - Enhances Airbnb's ESLint config with TypeScript support
- [`@typescript-eslint/eslint-plugin`]() - Is a peer dependency due to a limitation within ESLin
- [`@typescript-eslint/parser`]() - An ESLint parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code
