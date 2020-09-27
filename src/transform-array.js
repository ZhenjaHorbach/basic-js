const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	throw new CustomError('Not implemented');
	// if (typeof arr !== 'object') {
	// 	throw new CustomError('THROWN');
	// } else {
	// 	let result = [];
	// 	for (let i = 0; i < arr.length; i++) {
	// 		if (arr[i] == '--discard-next') {
	// 			i += 1;
	// 		} else if (arr[i] == '--discard-prev') {
	// 			result.length(i - 1);
	// 		} else if (arr[i] == '--double-next') {
	// 			result += arr[i + 1];
	// 			result += arr[i + 1];
	// 			i += 1;
	// 		} else if (arr[i] == '--double-prev') {
	// 			result.length(i - 1);
	// 			result += arr[i - 1];
	// 			result += arr[i - 1];
	// 		} else {
	// 			result += arr[i];
	// 		}
	// 	}
	// 	return result;
	// };
};