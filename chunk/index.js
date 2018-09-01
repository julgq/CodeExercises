// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1];
        console.log(last);

        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }

    }

    return chunked;
}
/* 
// - Solution JCCGQ 
function chunk(array, size) {

    let arr = [];
    let temp = [];
    let acum = 0;

    for (let i = 0; i <= array.length; i++) {
        acum++;
        if (acum <= size) {

            if (array[i] !== undefined) {
                temp.push(array[i]);

            }


        }

        if (acum === size || i === array.length) {
            acum = 0;
            arr.push(temp);
            temp = [];
        }
    }

    return arr;

}
*/

module.exports = chunk;
