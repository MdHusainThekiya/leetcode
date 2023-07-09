/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

	const hashMap = {
		'(': 0,
		'[': 0,
		'{': 0,
	}

	const openersOfCloser = {
		')': '(',
		']': '[',
		'}': '{',
	}

	let lastOpener = [];

	const splittedArray = s.split('');

	if (splittedArray.length % 2 !== 0) {
		// this is odd
		return false;
	}

	while (splittedArray.length > 0) {

		let element = splittedArray.shift();

		if (typeof (hashMap[element]) === 'number') {
			// this is opener
			hashMap[element] = hashMap[element] + 1;
			lastOpener.push(element);

		} else {
			// this is closer
			if (openersOfCloser[element] === lastOpener[lastOpener.length - 1]) {
				lastOpener.pop();
			} else {
				// improper sequence lets exit
				return false
			}
			hashMap[openersOfCloser[element]] = hashMap[openersOfCloser[element]] - 1;
		}

	}

	if (Object.values(hashMap).filter((val) => { return val !== 0 }).length > 0) {
		return false;
	} else {
		return true;
	}
};


console.log(isValid("([(}}[{}]){}]){}"))