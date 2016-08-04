var addOne = require('../src/app').addOne;
var expect = require('chai').expect;

describe('testing the addOne function', function() {
    it('should add 1', function() {
	var number = 42;
	var result = addOne(number)
	expect(result).to.equal(43);
    });
});
