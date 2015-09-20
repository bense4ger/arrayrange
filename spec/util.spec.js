var utils = require('../lib/utils');

var passingSource = [1,2,3,4,5];
var passingSourceMixed = [1,2,3,'foo',5];
var failingSource = ['foo', 'bar'];

describe('max', function(){
	var actual, expected;
	beforeAll(function(){
		actual = utils.max(passingSource);
		expected = 5;
	});
	it('should find the maximum number in the array', function(){
		expect(actual).toEqual(expected);
	});
});

describe('max', function(){
	beforeAll(function(){
		spyOn(utils, 'max').and.callThrough();
		utils.max(failingSource);
		
	});
	it('should throw and error if an array of non-numeric values is passed', function(){
		expect(utils.max).toThrowError('Non-numeric array passed');
	})
});

describe('min', function(){
	var actual, expected;
	beforeAll(function(){
		actual = utils.min(passingSource);
		expected = 1;
	});
	it('should find the minimum number in the array', function(){
		expect(actual).toEqual(expected);
	});
});

describe('min', function(){
	beforeAll(function(){
		spyOn(utils, 'min').and.callThrough();
		utils.min(failingSource);
		
	});
	it('should throw and error if an array of non-numeric values is passed', function(){
		expect(utils.min).toThrowError('Non-numeric array passed');
	})
});

describe('range', function(){
	var actual, expected;
	beforeAll(function(){
		actual = utils.range(passingSource);
		expected = 4;
	});
	it('should calculate the range between the min and max in an array', function(){
		expect(actual).toEqual(expected);
	});
});

describe('range', function(){
	beforeAll(function(){
		spyOn(utils, 'range').and.callThrough();
		utils.range(failingSource);
		
	});
	it('should throw and error if an array of non-numeric values is passed', function(){
		expect(utils.range).toThrowError('Non-numeric array passed');
	})
});