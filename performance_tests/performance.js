var utils = require('../lib/utils');
(function(){
	function Performance(){}
	
	var generateArray = function(){
		var array = [10000];
		for(var i = 0; i < 10000; i++){
			array[i] = Math.floor(Math.random() * (100000 - 0 + 1));
		}
		return array;
	}
	
	var tests = {
		sort_vs_unsorted : function(array){
			
		}
	}
	
	Performance.prototype.run = function(){
		var testArray = generateArray();
		Object.getOwnPropertyNames(tests).forEach(function(func){
			tests[func].call(this, testArray);
		});
	}
	
	module.exports = new Performance();
})()