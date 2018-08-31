// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let mapChars = {}
    let max = 0;
    let maxChar = '';

    str.split('').forEach(element => {
        //mapChars[element] = mapChars[element] + 1 || 1;
        if (mapChars[element]) {
            mapChars[element]++;
        } else {
            mapChars[element] = 1;
        }
    });

    // for con in es solo para iterar objetos o mapas, diccionario
    // itera el diccionario, si el valor del indice es mayor que max, max igual el valor del indice
    // y el char es asignado a maxChar 
    for (let char in mapChars) {
        if (mapChars[char] > max) {
            max = mapChars[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
