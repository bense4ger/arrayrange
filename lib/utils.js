module.exports = (function(){
	/**
	 * @static
	 * @class Utils
	 * @classdesc Static class which encapsulates the min, max and range functions
	 */
	function Utils(){}
	
	var testNumeric = function(source){
		
	}
	
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
		if(!testNumeric(array)) throw new Error('Non-numeric array passed');
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
		if(!testNumeric(array)) throw new Error('Non-numeric array passed');
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
		if(!testNumeric(array)) throw new Error('Non-numeric array passed');
	};
	
	return new Utils();
})();
