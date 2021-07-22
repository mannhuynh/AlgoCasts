// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	let sharp = "#";
	let space = " ";
	// for (let i = 1; i <= n; i++){
	//     console.log(`Step (${i})`);
	for (let j = 1; j <= n; j++) {
		console.log(`${sharp.repeat(j)}${space.repeat(n - j)}`);
		// console.log((sharp.repeat(j)))
	}
}
// }
steps(4);
module.exports = steps;
