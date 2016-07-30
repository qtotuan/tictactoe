var readlineSync = require('readline-sync');

var firstArray = [1,2,3];
var secondArray = [4,5,6];
var thirdArray = [7,8,9];

var board = [
  firstArray,
  secondArray,
  thirdArray
]

// Print board
var printBoard = function () {
  for (var i =0; i < 3; i++){
    console.log(board[i].join(' | '));
  }
}

printBoard();

// global variables
var whileValue = true;
var currentPlayer = 1;


while (whileValue) {


  // Ask user for entry
  var playerChoice = readlineSync.question('Where do you want to put your symbol? ');
  console.log('So you want to put it here: ' + playerChoice);

  // Decide player turn and symbol
  if (currentPlayer % 2 == 1) {
    var playerSymbol = "X"
  } else {
    playerSymbol = "O"
  }

  // Match user entry with location on the board
  if (playerChoice === "1") {
      board[0][0] = playerSymbol
  }

  if (playerChoice === "2") {
      board[0][1] = playerSymbol
  }

  if (playerChoice === "3") {
      board[0][2] = playerSymbol
  }

  if (playerChoice === "4") {
      board[1][0] = playerSymbol
  }

  if (playerChoice === "5") {
      board[1][1] = playerSymbol
  }

  if (playerChoice === "6") {
      board[1][2] = playerSymbol
  }

  if (playerChoice === "7") {
      board[2][0] = playerSymbol
  }

  if (playerChoice === "8") {
      board[2][1] = playerSymbol
  }

  if (playerChoice === "9") {
      board[2][2] = playerSymbol
  }

  // Print board
  printBoard();

  // Check if board is full. If yes, then exit game.
  if (board[0][0] != 1 && board[0][1] != 2 && board[0][2] != 3 && board[1][0] != 4 && board[1][1] != 5 && board[1][2] != 6 && board[2][0] != 7 && board[2][1] != 8 && board[2][2] != 9) {
    whileValue = false;
  }

  // Increase player turn variable
  currentPlayer++;

  // Check if some one won
  // Horizontal
  if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
    console.log("Winner winner chicken dinner!");
    whileValue = false;
  }

  if (board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
    console.log("Winner winner chicken dinner!");
    whileValue = false;
  }

  if (board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
    console.log("Winner winner chicken dinner!");
    whileValue = false;
  }

  // Vertical
  if (board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
    console.log("Winner winner chicken dinner!");
    whileValue = false;
  }

  if (board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
    console.log("Winner winner chicken dinner!");
    whileValue = false;
  }

  if (board[0][2] === board[1][2] && board[1][2] === board[2][2]) {
    console.log("Winner winner chicken dinner!");
    whileValue = false;
  }

  // Diagonal
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    console.log("Winner winner chicken dinner!");
    whileValue = false;
  }

  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    console.log("Winner winner chicken dinner!");
    whileValue = false;
  }



}

// Fix positions 2 - 9
// Intermediate, stop game when all numbers have been filled
// Alternate between X and O

// Check each turn, if someone won
  // figure out rules for 3 in a row horizontal
  // figure out rules for 3 in a row vertical
  // figrue out rules for 3 diagonal
