const MORSE_TABLE = {
	".-": "a",
	"-...": "b",
	"-.-.": "c",
	"-..": "d",
	".": "e",
	"..-.": "f",
	"--.": "g",
	"....": "h",
	"..": "i",
	".---": "j",
	"-.-": "k",
	".-..": "l",
	"--": "m",
	"-.": "n",
	"---": "o",
	".--.": "p",
	"--.-": "q",
	".-.": "r",
	"...": "s",
	"-": "t",
	"..-": "u",
	"...-": "v",
	".--": "w",
	"-..-": "x",
	"-.--": "y",
	"--..": "z",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	"-----": "0",
};

function decode(expr) {
	let exprArr = expr.split("");
	let result = [];
	let finalResult = [];
	let length = exprArr.length;
	let n = 10; // Предположим, что каждая строка отображает 10
	let lineNum = length % 10 === 0 ? length / 10 : Math.floor(length / 10 + 1);
	let obj = Object.entries(MORSE_TABLE).flat();
	let string = [];
	let str = "";
	// console.log(lineNum);
	for (let i = 0; i < lineNum; i++) {
		let chunk = exprArr.slice(i * n, i * n + n);
		result.push(chunk.join(""));
		result[i].replace(/11/g, "-").replace(/10/g, ".").replace(/\d/g, "");
		finalResult.push(
			result[i]
				.replace(/11/g, "-")
				.replace(/10/g, ".")
				.replace(/\d/g, "")
				.replace(/\*{10}/g, " ")
		);
		// console.log(finalResult);
	}
	let ln1 = finalResult.length;
	let ln2 = obj.length;
	for (var i = 0; i < ln1; ++i) {
		cache = finalResult[i];
		for (var j = 0; j < ln2; ++j) {
			if (obj[j] == cache) {
				// console.log("найдено совпадение: " + cache);
				string.push(obj[j + 1]);
			} else if (cache == " ") {
				string.push(" ");
			}
			// console.log(string);
		}
	}
	str = string.join("").replace(/\s+/g, " ");
	return str;
	// console.log(string.replace(/' '{2,}/g, " "));
	// return string.join(" ");
}

module.exports = {
	decode,
};
