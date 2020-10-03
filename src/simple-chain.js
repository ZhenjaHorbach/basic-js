const CustomError = require("../extensions/custom-error");

const chainMaker = {
	obj: [],
	getLength() {
		return this.obj.length;
		throw new CustomError('Not implemented');
	},
	addLink(value) {
		this.obj.push(`( ${value} )`);
		return this;
		throw new CustomError('Not implemented');
	},
	removeLink(position) {
		if (position > 0 && typeof position === "number" && position <= this.obj.length) {
			this.obj.splice(position - 1, 1);
			return this;
		} else {
			this.obj.length = 0;
			throw new RangeError('THROW');
		}
		throw new CustomError('Not implemented');
	},
	reverseChain() {
		this.obj.reverse();
		return this;
		throw new CustomError('Not implemented');
	},
	finishChain() {
		const result = this.obj;
		this.obj = [];
		return result.join("~~");
		throw new CustomError('Not implemented');
	},
};

module.exports = chainMaker;
module.exports = chainMaker;
