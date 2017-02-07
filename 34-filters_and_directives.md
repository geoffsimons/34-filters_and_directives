![cf](https://i.imgur.com/7v5ASc8.png) Lab 34 - Filters and Directives
======

## To Submit this Assignment
  * create a fork of this repository
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Include
  * `.eslintrc`
  * `.babelrc`
  * `.gitignore`
  * `package.json`
    * create an npm `build` script for running `webpack`
    * create an npm `build-watch` script for running `webpack-dev-server --inline --hot`
    * create an npm `test` script for running karma and all associated tests
    * create an npm `test-watch` script for running karma on file system changes
    * create an npm `lint` script for linting your JS with `eslint`
  * **ignore the build directory**
  * `webpack.config.js`
    * this should include all of the production environment configurations used in lecture code
  * `karma.config.js`
  * **note:** *do not* forget to `npm uninstall -D camelcase` and reinstall it to use version 3.0 (`npm i -S camelcase@3.0.0`)

## Description
  * Create a custom `filter` that will allow for real time fuzzy searching of galleries
  * Use the `uppercase`, `lowercase`, `number`, `date`, `limitTo`, and `orderBy` built-in angular filters in your application *(note: this is simply for practice and can be used anywhere in your application)*
  * Create a custom `directive` that will allow for the use of elements, classes, and attributes (EAC) in a custom `<social-icons></icons>` element
    * this should include an `@` binding that is used to associate an attribute on the directive, along with an `ng-repeat` directive to print out a list of potential social icons, which are listed as an array on the `SocialIconsController`

## Bonus
  * **2pts:** create a sprite sheet of social icons, add an `<li>` and associated class for each social icon in the sprite sheet, and update the background position of each `<li>` to show the related social icon
