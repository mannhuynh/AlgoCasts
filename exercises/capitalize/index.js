// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // return str.split(' ').map((word) => 
    //  word[0].toUperCase() + word.slice(1)).join(' ')
    new_str = []
    for (let word of str.split(' ')) {
        word = word[0].toUpperCase() + word.slice(1)
        new_str.push(word)
        // console.log(word)
    }
    return new_str.join(' ')
}
// capitalize("hello my name is vuong")
module.exports = capitalize;
