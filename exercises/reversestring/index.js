// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
function reverse(str) {
    return str.split('').reduce((new_string, char) => {
        return char + new_string
    }, '')
}
console.log(reverse('z  abcd'))
module.exports = reverse;

// My first try
// function reverse(str) {
//     let new_string = ''
//     for (let i = str.length - 1; i >= 0; i--){
       
//         new_string += str[i]
//     }
//     return new_string;
// }

// Solution 1
// function reverse(str) {
//     let new_string = ''
//     for (let char of str){
//     //    console.log(char)
//         new_string = char + new_string
//         console.log(new_string)
//     }
//     return new_string;
// }

// Solution 2
// function reverse(str) {
//     return str.split('').reverse().join('')
// }
