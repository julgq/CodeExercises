// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/*
// - Solution using reverse() function -
function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');

    if (n < 0) {
        //console.log(reversed);
        //console.log(parseInt(reversed));
        return parseInt(reversed) * -1;
    }
    return parseInt(reversed);
}
*/

/*
// - Solution JCGQ, using reduce array helper -
function reverseInt(n) {

    let reversed = n
        .toString()
        .split('')
        .reduce((rev, char) => {
            return char + rev;
        });

    if (n < 0) {
        // Sí n es menor que 0, lo convierto a entero y lo hago negativo.
        return parseInt(reversed) * -1;

    }
    return parseInt(reversed);
}
*/

/*
// - Solution JCGQ, using for loop-
function reverseInt(n) {
    let reversed = '';

    for (let character of n.toString()) {
        // reversed get value reverse
        reversed = character + reversed;
    }

    if (n < 0) {
        return parseInt(reversed) * -1;
    }
    return parseInt(reversed);
}
*/


// - Solution JCGQ, using reduce and and map function
function reverseInt(n) {
    let reversed = n
        .toString()
        .split('')
        .reduce((rev, char) => {
            return char + rev;
        });

    // La función Math.sign() retorna el signo de un número, indicando si el número es positivo, negativo o cero.
    return parseInt(reversed) * Math.sign(n);
}


module.exports = reverseInt;
