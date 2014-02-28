/*
 * grunt-contrib-bigot
 * https://github.com/FireZenk/grunt-contrib-bigot
 *
 * Copyright (c) 2014 FireZenk <firezenk@gmail.com>
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('bigot', 'Task to compile Bigot templates', function() {

    var options = this.options({
      data: [],
      src:  [],
      dest: ''
    });

    var bigot = require('bigot');

    var mSource, mData, mCompiled, newFileName;

    if (options.src.length !== options.data.length) {

      grunt.log.warn('>> The number of "data" files must be the same as the number of "src" files.');
      return false;
    
    } else {

      for (var i=0; i<options.src.length; i++) {

        if (!grunt.file.exists(options.src[i])) {

          grunt.log.warn('>> Source file "' + options.src[i] + '" not found.');
          return false;

        } else if (!grunt.file.exists(options.data[i])) {

          grunt.log.warn('>> Data file "' + options.data[i] + '" not found.');
          return false;

        } else {

          mSource = grunt.file.read(options.src[i]);
          mData = JSON.parse(grunt.file.read(options.data[i]));
          mCompiled = bigot.render(mSource, mData);

          newFileName = options.src[i].slice(options.src[i].lastIndexOf("/"),options.src[i].length);

          grunt.file.write(options.dest+newFileName, mCompiled);

          grunt.log.writeln('>> Bigot template "' + options.src[i] + '" compiled successfully.');
        }
      }
    }

    grunt.log.writeln('All Bigot templates compiled successfully.');
    return true;
  });

};