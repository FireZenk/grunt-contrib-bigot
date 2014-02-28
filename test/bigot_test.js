'use strict';

var grunt = require('grunt');

exports.bigot = {
  setUp: function(done) {
    done();
  },
  default_options: function(test) {
    test.expect(4);

    test.ok(grunt.file.read('test/bigot_test.html'),"should exist.");
    test.ok(grunt.file.read('test/bigot_test.json'),"should exist.");
    test.ok(grunt.file.read('test/compiled/bigot_test.html'),"should exist.");

    var actual = grunt.file.read('test/compiled/bigot_test.html');
    var expected = "<ul><li>Abby, 24 <span>hockey and drive</span></li><li>Matt, 32 <span>football and pets</span></li><li>John, 18 <span>tennis and videogames</span></li></ul>";
    test.notStrictEqual(actual, expected, 'should be not strict equals.');

    test.done();
  }
};
