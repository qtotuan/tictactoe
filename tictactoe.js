console.log('Hello World')


var firstArray = [1,2,3];
var secondArray = [4,5,6];
var thirdArray = [7,8,9];


var board = [
  firstArray,
  secondArray,
  thirdArray
]

console.log(board);


// Print board
var printBoard = function () {
  for (var i =0; i < 3; i++){
    for (var j =0; j < 3; j++){
    console.log(board[i][j]);
    }
  }
}

printBoard();

// Replace object in the board with symbol
board[0][1] = "x";



// Whose turn is it?





for (var i =0; i < 3; i++){
  console.log(board[i].join(' | '));
}
