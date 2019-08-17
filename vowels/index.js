// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1
/*
function vowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let numberOfVoewls = 0;

    for (let itemStr = 0; itemStr <= str.length; itemStr++) {
        console.log(str[itemStr]);

        for (let item in vowels) {

            if (vowels[item] === str[itemStr]) {
                numberOfVoewls++;
            }
        }

    }

    return numberOfVoewls;
}

*/

// Solution 2 - .includes function
/*function vowels(str) {
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }
    }

    return count;
}
*/

// Solution 3 - Regular Expressions

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}




module.exports = vowels;
