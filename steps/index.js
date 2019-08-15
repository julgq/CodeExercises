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


// Solution Recursion 2
function steps(n, row = 0, stair = '') {
  if (row === n) {
    return;
  }

  // Esta parte es para brincar de row, si la condición se cumple.  
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);

}

// Solution Recursion 1
/*
function steps(n, row = 0, stair = '') {
  if (row === n) {
    return;
  }

  // Esta parte es para brincar de row, si la condición se cumple.  
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  steps(n, row, stair);

}*/



// Simple solution
/*
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
*/



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
