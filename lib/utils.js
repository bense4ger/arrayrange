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
	Utils.prototype.max = function(array){};
	
	/**
	 * @public 
	 * @static 
	 * @function min
	 * @param {number[]} array - The array of values to be inspected
	 * @summary finds the minimum value in the array
	 * @returns {number}
	 * @throws Non-numeric array passed
	 */
	Utils.prototype.min = function(array){};
	
	/**
	 * @public
	 * @static
	 * @function range
	 * @param {number[]} array - The array of values to be inspected
	 * @summary finds the range of the values in the array
	 * @returns {number}
	 * @throws Non-numeric array passed
	 */
	Utils.prototype.range = function(array){};
	
	return new Utils();
})();
