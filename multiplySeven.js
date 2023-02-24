'use strict';

function multiplySeven(num1=12, num2=6) {
	if (num1 > num2) {
		return num1 * 7;
	} else if (num1 == num2) {
		return (num1 + num2) * 7;
	} else {
		return num2 * 7;
	}
}

// console.log(multiplySeven(7, 14));
// console.log(multiplySeven(10, 10));
// console.log(multiplySeven(3, 8));
// console.log(multiplySeven());

module.exports = multiplySeven;
