'use strict';

module.exports = (function(){
	/**
	 * @static
	 * @class Utils
	 * @classdesc Static class which encapsulates the min, max and range functions
	 */
	function Utils(){}
		
	/**
	 * @public
	 * @static
	 * @function max
	 * @param {number[]} array - The array of values to be inspected
	 * @summary Finds the maximum value in the array
	 * @returns {number}
	 * @throws Non-numeric array passed
	 */
	Utils.prototype.max = function(array){
		var length = array.length,
			max = -Infinity,
			current = undefined;
			
		while(length--){
			current = array[length];
			if(typeof current !== 'number' ) throw new Error('Non-numeric array passed');
			if(current > max) max = current;
		}
		
		return max;
	};
	
	/**
	 * @public 
	 * @static 
	 * @function min
	 * @param {number[]} array - The array of values to be inspected
	 * @summary finds the minimum value in the array
	 * @returns {number}
	 * @throws Non-numeric array passed
	 */
	Utils.prototype.min = function(array){
		var length = array.length,
			min = Infinity,
			current = undefined;
		
		while(length--){
			current = array[length];
			if(typeof current !== 'number') throw new Error('Non-numeric array passed');
			if(current < min) min = current;
		}
		
		return min;
	};
	
	/**
	 * @public
	 * @static
	 * @function range
	 * @param {number[]} array - The array of values to be inspected
	 * @summary finds the range of the values in the array
	 * @returns {number}
	 * @throws Non-numeric array passed
	 */
	Utils.prototype.range = function(array){
		var min = this.min(array);
		var max = this.max(array);
		return max - min;
	};
	
	return new Utils();
})();
