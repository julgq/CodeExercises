// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

  for(let row = 0; row < n; row++){
    let stair = '';
    
    for(let column = 0; column < n; column++) {
      if(column <= row){
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

/*
function steps(n) {
  var matrix = [[], []];
  var matrixSize = n;
  var stringLog = [];

  for (var row = 0; row <= matrixSize; row++) {
    for (var col = 0; col <= matrixSize; col++) {
      console.log(row, col);
      if (col <= row) {
        matrix[row][col] = '#';
      } else {
        matrix[row][col] = ' ';
      }
    }

  }
  console.log(matrix);
}
*/


module.exports = steps;
