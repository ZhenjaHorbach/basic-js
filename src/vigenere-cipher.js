const CustomError = require("../extensions/custom-error");

// class VigenereCipheringMachine {
// 	encrypt(message, key) {
// 		if (message == undefined || key == undefined) {
// 			throw new RangeError('THROW')
// 		}
// 		let number = 0;
// 		let keyLen = key.length;
// 		message = message.toLowerCase();
// 		key = key.toLowerCase();
// 		let resultKey = '';
// 		let resultString = '';
// 		for (let i = 0; i < message.length; i++) {
// 			if (message.charCodeAt(i) < 97 || message.charCodeAt(i) > 122) {
// 				resultKey += ' ';
// 				continue;
// 			}
// 			resultKey += key[number];
// 			if (number == keyLen - 1) {
// 				number = 0;
// 				continue;
// 			}
// 			number++;
// 		}
// 		for (let i = 0; i < message.length; i++) {
// 			const codeStr = message.charCodeAt(i);
// 			const codeKey = resultKey.charCodeAt(i);

// 			const finalKey = ((codeStr + codeKey - 97) > 122) ? (codeStr + codeKey - 97 - 26) : (codeStr + codeKey - 97);

// 			if (message.charCodeAt(i) < 97 || message.charCodeAt(i) > 122) {
// 				resultString += message[i];
// 				continue;
// 			}
// 			resultString += String.fromCharCode(finalKey);
// 		}

// 		if (this.typemachine == 'reverse') {
// 			return resultString.split('').reverse().join('').toUpperCase();
// 		}


// 		return resultString.toUpperCase();

// 	}
// 	decrypt(message, key) {
// 		if (message == undefined || key == undefined) {
// 			throw new RangeError('THROW')
// 		}
// 		let number = 0;
// 		let keyLen = key.length;
// 		let resultKey = '';

// 		message = message.toLowerCase();
// 		key = key.toLowerCase();

// 		for (let i = 0; i < message.length; i++) {
// 			if (message.charCodeAt(i) < 97 || message.charCodeAt(i) > 122) {
// 				resultKey += ' ';
// 				continue;
// 			}
// 			resultKey += key[number];
// 			if (number == keyLen - 1) {
// 				number = 0;
// 				continue;
// 			}
// 			number++;
// 		}

// 		let newStr = '';
// 		for (let i = 0; i < message.length; i++) {
// 			const codeStr = message.charCodeAt(i);
// 			const codeKey = resultKey.charCodeAt(i);

// 			let finalKey = undefined;

// 			if ((codeStr - codeKey + 97) > 122) {
// 				finalKey = codeStr - codeKey + 97 - 26;
// 			} else if ((codeStr - codeKey + 97) < 97) {
// 				finalKey = codeStr - codeKey + 97 + 26;
// 			} else {
// 				finalKey = codeStr - codeKey + 97;
// 			}

// 			if (message.charCodeAt(i) < 97 || message.charCodeAt(i) > 122) {
// 				newStr += message[i];
// 				continue;
// 			}

// 			newStr += String.fromCharCode(finalKey);
// 		}

// 		if (this.typemachine == 'reverse') {
// 			return newStr.split('').reverse().join('').toUpperCase();
// 		}


// 		return newStr.toUpperCase();
// 	}

// }
class VigenereCipheringMachine {
	constructor(bool) {
		if (bool == true || bool == undefined) {
			this.typemachine = 'direct';
		} else this.typemachine = 'reverse';
	}

	encrypt(string, key) {

		let j = 0;
		let keyLength = key.length;
		let newKey = '';

		string = string.toLowerCase();
		key = key.toLowerCase();

		for (let i = 0; i < string.length; i++) {
			if (string.charCodeAt(i) < 97 || string.charCodeAt(i) > 122) {
				newKey += ' ';
				continue;
			}
			newKey += key[j];
			if (j == keyLength - 1) {
				j = 0;
				continue;
			}
			j++;
		}

		let newStr = '';
		for (let i = 0; i < string.length; i++) {
			const codeStr = string.charCodeAt(i);
			const codeKey = newKey.charCodeAt(i);

			const finalKey = ((codeStr + codeKey - 97) > 122) ? (codeStr + codeKey - 97 - 26) : (codeStr + codeKey - 97);

			if (string.charCodeAt(i) < 97 || string.charCodeAt(i) > 122) {
				newStr += string[i];
				continue;
			}
			newStr += String.fromCharCode(finalKey);
		}

		if (this.typemachine == 'reverse') {
			return newStr.split('').reverse().join('').toUpperCase();
		}


		return newStr.toUpperCase();
	}
	decrypt(encryptedMessage, key) {
		let j = 0;
		let keyLength = key.length;
		let newKey = '';

		encryptedMessage = encryptedMessage.toLowerCase();
		key = key.toLowerCase();

		for (let i = 0; i < encryptedMessage.length; i++) {
			if (encryptedMessage.charCodeAt(i) < 97 || encryptedMessage.charCodeAt(i) > 122) {
				newKey += ' ';
				continue;
			}
			newKey += key[j];
			if (j == keyLength - 1) {
				j = 0;
				continue;
			}
			j++;
		}

		let newStr = '';
		for (let i = 0; i < encryptedMessage.length; i++) {
			const codeStr = encryptedMessage.charCodeAt(i);
			const codeKey = newKey.charCodeAt(i);

			let finalKey = undefined;

			if ((codeStr - codeKey + 97) > 122) {
				finalKey = codeStr - codeKey + 97 - 26;
			} else if ((codeStr - codeKey + 97) < 97) {
				finalKey = codeStr - codeKey + 97 + 26;
			} else {
				finalKey = codeStr - codeKey + 97;
			}

			if (encryptedMessage.charCodeAt(i) < 97 || encryptedMessage.charCodeAt(i) > 122) {
				newStr += encryptedMessage[i];
				continue;
			}

			newStr += String.fromCharCode(finalKey);
		}

		if (this.typemachine == 'reverse') {
			return newStr.split('').reverse().join('').toUpperCase();
		}


		return newStr.toUpperCase();
	}

}
module.exports = VigenereCipheringMachine;
