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
    let reverse = '';
    let result = false;
    reverse = str.split('').reduce((rev, char) => char + rev, '');
    reverse == str ? result = true :  result =false
    return result;
}
*/

module.exports = palindrome;
