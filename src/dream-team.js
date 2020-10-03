const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(team) {
	if (team == null) {
		return false;
	}
	let result = '';
	for (let i = 0; i < team.length; i++) {
		if (typeof (team[i]) == 'string') {
			result += team[i].toUpperCase().trim()[0];
		} else {
			continue;
		}
	}
	return result.split('').sort().join('');

	throw new CustomError('Not implemented');
};
