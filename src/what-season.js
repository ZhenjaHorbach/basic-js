const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if (date == null) {
		return 'Unable to determine the time of year!';
	}
	else if (date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)) {
		if (date.getMonth() <= 1 || date.getMonth() == 11) {
			return 'winter';
		}
		else if (date.getMonth() <= 4) {
			return 'spring';
		}
		else if (date.getMonth() <= 7) {
			return 'summer';
		}
		else if (date.getMonth() <= 10) {
			return 'autumn';
		}
	} else {
		throw new RangeError('THROW')
	}
	throw new CustomError('Not implemented');
};
