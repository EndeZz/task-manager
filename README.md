#webpack

###Installation
Clone this repo and npm install.

==npm i==

###Usage
####Development server
==npm start==

You can view the development server at ==localhost:8080.==

####Production build
==npm run build==

###Features
-[webpack](https://webpack.js.org/)
-[Babel](https://babeljs.io/)
-[Sass](https://sass-lang.com/)
-[PostCSS](https://postcss.org/)

###Dependencies

####webpack
-[webpack](https://github.com/webpack/webpack) - Module and asset bundler.
-[webpack-cli](https://github.com/webpack/webpack-cli) - Command line interface for webpack
-[webpack-dev-server](https://github.com/webpack/webpack-dev-server) - Development server for webpack
-[webpack-merge](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
-[cross-env](https://github.com/kentcdodds/cross-env) - Cross platform configuration

####Babel
-[@babel/core](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
-[@babel/plugin](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - proposal-class-properties - Use properties directly on a class (an example Babel config)
-[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel

####Loaders
-[babel-loader](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
-[sass-loader](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
    -[node-sass](https://github.com/sass/node-sass) - Node Sass
-[postcss-loader](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
    -[postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
-[css-loader](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
-[style-loader](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

####Plugins
-[copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
-[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
-[mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
-[css-minimizer-webpack-plugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets
-[imagemin](https://www.npmjs.com/package/imagemin) - Minify images seamlessly.
    -[imagemin-gifsicle](https://www.npmjs.com/package/imagemin-gifsicle) - Imagemin plugin for Gifsicle
    -[imagemin-jpegtran](https://www.npmjs.com/package/imagemin-jpegtran) - Jpegtran imagemin plugin
    -[imagemin-optipng](https://www.npmjs.com/package/imagemin-optipng) - Imagemin plugin for OptiPNG
    -[imagemin-svgo](https://www.npmjs.com/package/imagemin-svgo) - SVGO imagemin plugin
-[image-minimizer-webpack-plugin](https://www.npmjs.com/package/image-minimizer-webpack-plugin) - This plugin uses imagemin to optimize your images.
-[autoprefixer](https://webpack.js.org/loaders/postcss-loader/) - Добавьте префиксы поставщиков в правила CSS с помощью autoprefixer.

####Linters
-[eslint](https://github.com/eslint/eslint) - Enforce styleguide across application
-[eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) - Base styleguide to enforce rules
-[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Implment prettier rules
-[eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) - Implment import rules
-[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Dependency for prettier usage with ESLint
-[eslint-import-resolver-webpack](https://github.com/import-js/eslint-plugin-import/tree/main/resolvers/webpack) - Throw exceptions for import/export in webpack
-[eslint-webpack-plugin](https://github.com/webpack-contrib/eslint-webpack-plugin) - ESLint configuration for webpack
-[prettier](https://github.com/prettier/prettier) - Dependency for prettier-webpack-plugin plugin
-[prettier-webpack-plugin](https://github.com/hawkins/prettier-webpack-plugin) - Prettier configuration for webpack
-[stylelint](https://www.npmjs.com/package/stylelint) - A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
-[stylelint-scss](https://www.npmjs.com/package/stylelint-scss) - A collection of SCSS specific linting rules for stylelint (in a form of a plugin).
-[stylelint-config-sass-guidelines](https://www.npmjs.com/package/stylelint-config-sass-guidelines) - A stylelint config inspired by sass-guidelin.es.
-[stylelint-webpack-plugin](https://webpack.js.org/plugins/stylelint-webpack-plugin/) - This plugin uses stylelint that helps you avoid errors and enforce conventions in your styles.

#####Author
[Alexey Kiselev](https://vk.com/alex.kiseleff)
