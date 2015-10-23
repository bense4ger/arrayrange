'use strict';

(function(){
	/**
	 * @static
	 * @class Utils
	 * @classdesc Static class which encapsulates the min, max and range functions
	 */
	function Utils(){}
	
	/**
	 * @private
	 * @static
	 * @enum arrayType
	 */
	var arrayType = {
		number : 0,
		string : 1
	};
	
	/**
	 * @private
	 * @static
	 * @function determineType
	 * @param {number[] | string[]} array - The array to be inspected
	 * @summary Finds which type of array is being processed
	 * @returns {arrayType}
	 */
	var determineType = function(array){
		//Just checking the first element in the array
		//This will need to be improved when we switch to handling mixed arrays
		switch(typeof array[0]){
			case 'number':
				return arrayType.number;
				break;
			case 'string':
				return arrayType.string;
				break;
			default:
				throw new Error('Non-numeric array passed');	//Kept for now to ensure non-breaking change.
		}
	}
		
	/**
	 * @public
	 * @static
	 * @function max
	 * @param {number[]|string[]} array - The array of values to be inspected
	 * @summary Finds the maximum value in the array
	 * @returns {number|string}
	 * @throws Non-numeric array passed
	 */
	Utils.prototype.max = function(array){
		var length = array.length,
			max = -Infinity,
			current = undefined;
		
		if(determineType(array) === arrayType.number){	
			while(length--){
				current = array[length];
				if(typeof current !== 'number') throw new Error('Non-numeric array passed');
				if(current > max) max = current;
			}
		}
		else{
			array.sort();
			max = array[length - 1];
		}
		return max;
	};
	
	/**
	 * @public 
	 * @static 
	 * @function min
	 * @param {number[]|string[]} array - The array of values to be inspected
	 * @summary finds the minimum value in the array
	 * @returns {number|string}
	 * @throws Non-numeric array passed
	 */
	Utils.prototype.min = function(array){
		var length = array.length,
			min = Infinity,
			current = undefined;
		
		if(determineType(array) === arrayType.number){
			while(length--){
				current = array[length];
				if(typeof current !== 'number') throw new Error('Non-numeric array passed');
				if(current < min) min = current;
			}
		}
		else{
			array.sort();
			min = array[0];
		}
		return min;
	};
	
	/**
	 * @public
	 * @static
	 * @function range
	 * @param {number[]|string[]} array - The array of values to be inspected
	 * @summary finds the range of the values in the array
	 * @returns {number}
	 * @throws Non-numeric array passed
	 */
	Utils.prototype.range = function(array){
		var max, min, range;
		min = this.min(array);
		max = this.max(array);
		if(determineType(array) === arrayType.number){
			range = max - min;
		}
		else{
			
		}
		return range;
	};
	
	module.exports = new  Utils();
})();
