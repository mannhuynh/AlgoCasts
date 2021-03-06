// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
	let sharp = "#";
	let space = " ";
	let step = 0;
	for (let i = 1; i <= n; i++) {
		console.log(
			`${space.repeat(n - i)}${sharp.repeat(step + 1)}${space.repeat(
				n - i
			)}`
		);
		step = i * 2;
	}
}
pyramid(3);
module.exports = pyramid;
