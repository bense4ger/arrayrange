'use strict';
/* istanbul ignore next */
var utils = require('../lib/utils'),
	now = require('performance-now');

/* istanbul ignore next */	
(function(){
	function Performance(){}
	
	var generateRandomString = function(){
		var stringLength = Math.floor(Math.random() * 15);
		var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var randomString = [stringLength];
		for(var i = 0; i < stringLength; i++){
			randomString[i] = letters.charAt(Math.floor(Math.random() * letters.length));
		}
		return randomString.join();
	};
	
	var generateArray = function(arrayType){
		var array = [1000000];
		for(var i = 0; i < 1000000; i++){
			array[i] = arrayType === 'number' 
				? Math.floor(Math.random() * (10000000 + 1))
				: generateRandomString();
		}
		return array;
	};
	
	var tests = {
		sort_vs_unsorted : function(){
			var array = generateArray('number');
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
		},
		string_array : function(){
			var array = generateArray('string');
			var t0, t1, t2, t3, r0, r1;
			console.log('Started string_array');
			
			var stringToNumber = function(theString){
				var alphabet = 'abcdefghijklmnopqrstuvwxyz';
				var result;
				for(var i = 0; i < theString.length; i++){
					var lower = theString.charAt(i).toLowerCase();
					for(var j = 0; j < alphabet.length; j++){
						result += (alphabet.charAt(j) === lower) 
							? j + 1
							: 0;
					}
				}
				
				return result;
			};
			
			var numberArray = [array.length];
			t0 = now();
			array.forEach(function(val, ix){
				numberArray[ix] = stringToNumber(val);
			});
			utils.min(numberArray);
			t1 = now();
			r0 = t1 - t0;
			
			t2 = now();
			array.sort();
			var min = array[0];
			t3 = now();
			r1 = t3 - t2;
			
			console.log('Completed string_array');
			console.log('Without sort' + r0);
			console.log('With sort:' +  r1); 
		}
	}
	
	Performance.prototype.run = function(){
		Object.getOwnPropertyNames(tests).forEach(function(func){
			tests[func].call(this);
		});
	}
	
	module.exports = new Performance();
})()