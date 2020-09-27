const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disk,time) {
	function Hanoi1(n, x, y, z){                       // переложить n дисков с x на y, используя {
		if (n <= 0)                                     // (0) дисков нет - конец
			return;

		Hanoi1(n - 1, x, z, y);                            //     перекладываем n-1 дисков с x на z
		document.write(x + '->' + y + ", ");                 // (1) переносим     1 диск     c x на y
		Hanoi1(n - 1, z, y, x);                            //     перекладываем n-1 дисков с z на y

		return;                                        // (2) конец (для наглядности листинга Hanoi3)
	}
	throw new CustomError('Not implemented');
	// remove line with error and write your code here
};
