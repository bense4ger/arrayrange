'use strict';

var utils = require('../lib/utils'),
	now = require('performance-now');
	
(function(){
	function Performance(){}
	
	var generateArray = function(){
		var array = [1000000];
		for(var i = 0; i < 1000000; i++){
			array[i] = Math.floor(Math.random() * (10000000 - 0 + 1));
		}
		return array;
	}
	
	var tests = {
		sort_vs_unsorted : function(array){
			var originalArray = array;
			var lastIndex = array.length - 1;
			
			var compare = function(a,b){
				return a <= b ? -1 : 1;
			};
			var m0, m1, m2, m3, mr0, mr1, ma0, ma1, ma2, ma3, mar0, mar1, r0, r1, r2, r3, rr0, rr1;
			
			console.log('Starting sort vs unsorted test');
			
			//Test min without sort
			m0 = now();
			utils.min(array);
			m1 = now();
			mr0 = m1 - m0;
			
			//Test min with sort
			m2 = now();
			array.sort(compare);
			var min = array[0];
			m3 = now();
			mr1 = m3 - m2;
			
			//Reset the array
			array = originalArray;
			
			//Test max without sort
			ma0 = now();
			utils.max(array);
			ma1 = now();
			mar0 = ma1 - ma0;
			
			//Test max with sort
			ma2 = now();
			array.sort(compare);
			var max = array[lastIndex];
			ma3 = now();
			mar1 = ma3 - ma2;
			
			//Reset the array
			array = originalArray;
			
			//Test range without sort
			r0 = now();
			utils.range(array);
			r1 = now();
			rr0 = r1 - r0;
			
			//Test range with sort
			r2 = now();
			array.sort(compare);
			var range = array[lastIndex] - array[0];
			r3 = now();
			rr1 = r3 - r2;
			
			console.log('Completed sort vs unsorted test');
			console.log('Unsorted min:' + m0);
			console.log('Sorted min:' + m1);
			console.log('Unsorted max:' + mar0);
			console.log('Sorted max:' + mar1);
			console.log('Unsorted range:' + rr0);
			console.log('Sorted range:' + rr1);
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