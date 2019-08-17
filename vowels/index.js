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

module.exports = vowels;
