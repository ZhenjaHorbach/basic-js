const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	if (options.repeatTimes === false || options.repeatTimes === undefined) {
		options.repeatTimes = 1;
	}
	if (options.separator === false || options.separator === undefined) {
		options.separator = '+';
	}
	if (options.additionSeparator === false || options.additionSeparator === undefined) {
		options.additionSeparator = ''
	}
	str = str + '';
	let separator = '+';

	if ('separator' in options) {
		separator = options.separator;
	}

	if ('additionRepeatTimes' in options) {
		for (let i = 1; i < options.additionRepeatTimes; i++) {
			if ('addition' in options) {
				str += options.addition;
			}
			if ('additionSeparator' in options) {
				str += options.additionSeparator;
			}
		}
	}

	if ('addition' in options) {
		str += options.addition;
	}

	if ('repeatTimes' in options) {
		let basicstr = str;
		for (let i = 1; i < options.repeatTimes; i++) {
			str += separator + basicstr;
		}
	}

	return str;
	throw new CustomError('Not implemented');
	// remove line with error and write your code here
};
