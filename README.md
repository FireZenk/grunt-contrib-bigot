# grunt-contrib-bigot

> Grunt plugin to automate Bigot template compilation
> About Bigot template engine: `https://github.com/FireZenk/bigot`

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-bigot --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bigot');
```

## The "bigot" task

### Overview
In your project's Gruntfile, add a section named `bigot` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  bigot: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.data
Type: `Array`
Default value: `'[]'`

Used to specify the data (json) files that will be compiled together with the source files.

#### options.src
Type: `Array`
Default value: `'[]'`

Used to specify the source code (html) files that will be compiled together with the data files.

#### options.dest
Type: `String`
Default value: `'[]'`

Used to set the target folder of the compiled files.

### Usage Examples

#### Options
In this example, the default options are used to create an html file compiled from a data file in JSON and source code file in HTML containing the Bigot template language.

```js
grunt.initConfig({
  bigot: {
    options: {
      data: ['test/bigot_test.json'],
      src:  ['test/bigot_test.html'],
      dest: 'test/compiled/'
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
