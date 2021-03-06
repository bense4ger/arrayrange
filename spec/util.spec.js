var utils = require('../lib/utils');

var passingSource = [1,2,3,4,5];
var passingSourceString = ['foo', 'bar'];
var passingSourceMixed = [1,2,3,'foo',5];
var failingSource = [{foo : 'bar'}, {another: 'foo'}];

describe('utils', function(){
	it('should be defined', function(){
		expect(utils).toBeDefined();
	});
});

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
	var actual, expected;
	beforeAll(function(){
		actual = utils.max(passingSourceString);
		expected = 'foo';
	});
	it('should find the maximum string in the array', function(){
		expect(actual).toEqual(expected);
	});
});

describe('max', function(){
	it('should throw and error if an array of non-numeric or non-string values is passed', function(){
		expect(function(){ utils.max(failingSource)} ).toThrowError('Non-numeric array passed');
	});
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
	var actual, expected;
	beforeAll(function(){
		actual = utils.min(passingSourceString);
		expected = 'bar';
	});
	it('should find the minimum string in the array', function(){
		expect(actual).toEqual(expected);
	});
});

describe('min', function(){
	it('should throw and error if an array of non-numeric or non-string values is passed', function(){
		expect(function(){ utils.min(failingSource)} ).toThrowError('Non-numeric array passed');
	});
});

describe('range', function(){
	var actual, expected;
	beforeAll(function(){
		actual = utils.range(passingSource);
		expected = 4;
	});
	it('should calculate the range between the min and max in a numeric array', function(){
		expect(actual).toEqual(expected);
	});
});


describe('range', function(){
	it('should throw and error if an array of non-numeric or non-string values is passed', function(){
		expect(function(){ utils.range(failingSource)} ).toThrowError('Non-numeric array passed');
	})
});