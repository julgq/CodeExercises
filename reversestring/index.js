// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


/*
// - Solution with reverse function -
function reverse(str) {
    // turn the string in array
    const arr = str.split('');
    
    // reverse the elements of the array
    arr.reverse();

    // join the array in a string
    return arr.join('');
}
*/

/*
// - Solution with reverse function, other way -
function reverse(str) {
    return str
    .split('')
    .reverse()
    .join('');
}
*/




// - Solution with for loop -
function reverse(str) {
   let reversed = '';
   
   for(let character of str){
       // reversed get value reverse
       reversed = character + reversed;
       debugger;
   }

   return reversed;
}


/*
// - Solution with array helper: Reduce Helper-
function reverse(str) {
   return str.split('').reduce((reversed, character) => {
       console.log(character + reversed);
       // in the reduce array function helper the first element of the function sum the result
       return character + reversed;
   }, '');

}
*/

/*
// - Solution with array helper: Reduce Helper Refactoring-
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}
*/

reverse('julio');

module.exports = reverse;
