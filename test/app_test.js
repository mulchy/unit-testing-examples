var addOne = require('../src/app').addOne;
var expect = require('chai').expect;

describe('all the tests', function(){
  describe('testing the addOne function', function() {
    it('should add 1 to the argument', function() {
  	  var number = 42;
  	  var result = addOne(number)
  	  expect(result).to.equal(43);
    });

    it('adds one to the number 0', function() {
      expect(addOne(0)).to.equal(1);
    });
  });

  ///describe....
})
