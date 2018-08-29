// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*
 - Solution JCGQ with Reduce -
function palindrome(str) {
    const reverse = '';
    let result = false;
    reverse = str.split('').reduce((rev, char) => char + rev, '');
    reverse == str ? result = true :  result =false
    return result;
}
*/

/*
 //- Solution JCGQ with Reduce 2.0 -
function palindrome(str) {
    let reverse = '';
    reverse = str.split('').reduce((rev, char) => char + rev, '');
    return str === reverse;
}
*/

/*
//- Solution using reverse function -
function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
*/

/*
//- Solution using reverse function 2.0 -
function palindrome(str) {
    const reversed = str
        .split('')
        .reverse()
        .join('');

    return str === reversed;
}
*/

/*
//- Solution using Array Helper Reduce Helper Every -
function palindrome(str) {
    console.log('-----');
    return str.split('').every((char, index) => {
        console.log(str.length - index - 1);
        console.log(char === str[str.length - index - 1]);
        return char === str[str.length - index - 1];
    });
    
}
*/
module.exports = palindrome;
