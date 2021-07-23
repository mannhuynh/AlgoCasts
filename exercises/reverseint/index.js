/*
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
*/
function reverseInt(n) {
	let n_str = n.toString();
	// console.log(n_str);
	if (n < 0) {
		let reverse_str = "-";
		for (let i = n_str.length - 1; i > 0; i--) {
			reverse_str += n_str[i];
			// console.log(reverse_str);
		}
		return parseInt(reverse_str);
	}
	return parseInt(n_str.split("").reverse().join(""));
}
console.log(reverseInt(4523000));
console.log(reverseInt(-321000));
module.exports = reverseInt;

// function reverseInt(n) {
//     const reversed = n
//       .toString()
//       .split('')
//       .reverse()
//       .join('');

//     return parseInt(reversed) * Math.sign(n);
//   }
