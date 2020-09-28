const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disk, time) {
	let turns = 2 ** disk - 1;
	let seconds = Math.floor(3600 / time * turns);
	return { turns, seconds }
};
