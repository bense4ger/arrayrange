var util = require('../lib/util');

var passingSource = [1,2,3,4,5];
var failingSource = ['foo', 'bar'];

describe('max', function(){
	var actual, expected;
	beforeAll(function(){
		actual = util.max(passingSource);
		expected = 5;
	});
	it('should find the maximum number in the array', function(){
		expect(actual).toEqual(expected);
	});
});

describe('min', function(){
	var actual, expected;
	beforeAll(function(){
		actual = util.min(passingSource);
		expected = 1;
	});
	it('should find the minimum number in the array', function(){
		expect(actual).toEqual(expected);
	});
});

describe('range', function(){
	var actual, expected;
	beforeAll(function(){
		actual = util.range(passingSource);
		expected = 4;
	});
	it('should calculate the range between the min and max in an array', function(){
		expect(actual).toEqual(expected);
	});
});