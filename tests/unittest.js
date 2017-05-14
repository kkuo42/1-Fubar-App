var stylejs = require('../lib/style.js');
var authIndexjs = require('../routes/api/auth/index.js');

var assert = require('assert');


/**
 * Test Auth API
 * Tests:
 *   decodeAuthString() under api/auth/index.js
 */
describe('routes/api/auth/index.js', function() {
  describe('* decodeAuthString() function', function() {

    it('Test to see if decoding the empty string is invalid', function() {
      const result = authIndexjs.decodeAuthString('');
      assert.equal(result, false);
    });

    it('Test to see if valid email/password object is returned #1',  function() {
      // Courtesy of http://decodebase64.com/ to encode the string
      const result = authIndexjs.decodeAuthString('YXBwbGU6dHJlZQ==');
      assert.equal(result.email, 'apple');
      assert.equal(result.password, 'tree');
    });

    it('Test to see if valid email/password object is returned #2', function() {
      // Courtesy of http://decodebase64.com/ to encode the string
      const result = authIndexjs.decodeAuthString('cGluZWFwcGxlOmNoaWxpLXBlcHBlcg==');
      assert.equal(result.email, 'pineapple');
      assert.equal(result.password, 'chili-pepper');
    });

    it('Test to see if valid email/password object is returned #3', function() {
      // Courtesy of http://decodebase64.com/ to encode the string
      const result = authIndexjs.decodeAuthString('cG90YXRvOTI6YmFjb24xMDA6ZnJpZWQ=');
      assert.equal(result.email, 'potato92');
      assert.equal(result.password, 'bacon100:fried');
    });

    it('Test to see if decoding fails on string with no colon', function() {
      // Courtesy of http://decodebase64.com/ to encode the string
      const result = authIndexjs.decodeAuthString('d2F0ZXJtZWxvbg==');
      assert.equal(result, false);
    });
  });
});

describe('lib/style.js', function() {
  describe('* rgbObjectToCSS', function() {
    it('Test to see if a valid CSS string is returned #1', function() {
      const rgb = {r:242, g:8, b:182, a:0.2};
      const result = stylejs.rgbObjectToCSS(rgb);
      assert.equal(result, 'rgba(242,8,182,0.2)');
    });

    it('Test to see if a valid CSS string is returned #2', function() {
      const rgb = {r:12, g:5, b:151, a:1.0};
      const result = stylejs.rgbObjectToCSS(rgb);
      assert.equal(result, 'rgba(12,5,151,1)');
    });

    it('Test to see if undefined fields are outputted as undefined', function() {
      const rgb = {r:12, b:151};
      const result = stylejs.rgbObjectToCSS(rgb);
      assert.equal(result, 'rgba(12,undefined,151,undefined)');
    });

    it('Test to see if bad input leads to undefined fields', function() {
      const rgb = 10;
      const result = stylejs.rgbObjectToCSS(rgb);
      assert.equal(result, 'rgba(undefined,undefined,undefined,undefined)');
    });

  });
});
