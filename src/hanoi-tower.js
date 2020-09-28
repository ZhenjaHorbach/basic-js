const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disk, time) {
	let second = time / 3600;
	function Hanoi(disk, x, y, z) {
		if (disk <= 0)
			return;
		Hanoi(disk - 1, x, z, y);
		Hanoi(disk - 1, z, y, x);
		return;
	}
	throw new CustomError('Not implemented');
	// remove line with error and write your code here
};
