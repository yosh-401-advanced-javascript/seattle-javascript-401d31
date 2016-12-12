401 JS -- class 2& Angular 
===========================

# Angular controller resources
 * Read [controller guide]
 * Read [$scope guide]
 * Read [ng-controller api docs]

# Webpack Resources

# Jasmine Resources

# Karma Resouces

# Learning Objectives

# Overview
### Webpack 
* Webpack is an all purpose module bundler
 * Webpack will take our moduler javascript code with commonJS `require` statements, and build our code into a single file that can be shipped to a browser
 * Webpack also supports ES6 import and RequireJS module loding statements 
* We can use webpack loaders to add behaveiors to webpack for loading non javascript files with require statments
* We can use webpack plugins to add behaveiors to webpack that are not specific to require statements
* We are using webpack 1.x because webpack 2.x is not yet stable
* List of loaders we use
 * [babel-loader] - transpiles es6 code into es5 code
 * [sass-loader] - converts sass into css
 * [resolve-url-loader] - allows us to use relitives paths with are sass Import statements
 * [css-loader] - converts css into objects that webpack can work with
 * [url-loader] - imbeds fonts and images into our css
 * [file-loader] - copys files into our build directory
 * [html-loader] - creates literal strings from html files that can be used in our javascript
* List of plugins we use
 * [webpack.DefinePlugin] - allows us to create constants from env variables at build time
 * [webpack.optimize.UglifyJsPlugin] - minifys and uglfys are js, css, and html
 * [webpack-clean-plugin] - clears the build directory between builds
 * [extract-text-webpack-plugin] - creates a bundle.css
 * [html-webpack-plugin] - create an index.html with dynamicly named script and link tags

[controller guide]: https://docs.angularjs.org/guide/controller
[$scope guide]: https://docs.angularjs.org/guide/scope
[ng-controller api docs]: https://docs.angularjs.org/api/ng/directive/ngController

[babel-loader]: https://github.com/babel/babel-loader
[sass-loader]: https://github.com/jtangelder/sass-loader
[css-loader]: https://github.com/webpack/css-loader
[resolve-url-loader]: https://github.com/bholloway/resolve-url-loader
[url-loader]: https://github.com/webpack/url-loader
[file-loader]: https://github.com/webpack/file-loader
[html-loader]: https://github.com/webpack/html-loader
[webpack-clean-plugin]: https://github.com/johnagan/clean-webpack-plugin
[html-webpack-plugin]: https://github.com/ampedandwired/html-webpack-plugin
[extract-text-webpack-plugin]: https://github.com/webpack/extract-text-webpack-plugin
[webpack.optimize.UglifyJsPlugin]: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
[webpack.DefinePlugin]: https://webpack.github.io/docs/list-of-plugins.html#defineplugin



