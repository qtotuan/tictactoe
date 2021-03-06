//Initialize the board
var board = [];
var currentPlayer = 1;
var playerSymbol = "";
var hasWon = false;
var isFull = false;

var initializeGame = function () {
  //Initialize new memory board
  board = [];
  for (var i = 0; i < 3; i++) {
    board.push([]);
    for (var j = 1; j < 4; j++){
      board[i].push(j+3*(i));
    }
  }
  printBoard();

  //Reset global variables
  currentPlayer = 1;
  hasWon = false;
  isFull = false;

  //Get frontend ready: clear all additional designs from previous games
  $("button").attr("class", "btn btn-primary btn-lg");
  $("button").text("Reset Game");
  $("h4").attr("class", "status");
  $(".tictactoe-cell").text("");
  $(".status").text("Someone click on a field - let's go!");
};

var clearStatus = function() {
  $(".status").text("");
};

//Print the board in memory
var printBoard = function () {
  for (var i = 0; i < 3; i++){
    console.log(board[i].join(' | '));
  }
};

//Assigns either X or O to the current player
var setPlayerSymbol = function () {
  if (currentPlayer % 2 === 1) {
    playerSymbol = "O";
  } else {
    playerSymbol = "X";
  }
};

var changePlayer = function () {
  currentPlayer++;
};

var writeSymbolToFrontEndBoard = function (cell) {
  cell.text(playerSymbol);
};

var checkWin = function() {
  //Check horizontal winner
  for (var i = 0;i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      setWinningDesign();
    }
  }
  //Check vertical winner
  for (var i = 0;i < 3; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      setWinningDesign();
    }
  }
  //Check diagonal winner
  for (var i = 0; i < 2; i++) {
    if (board[0][i*2] === board[1][1] && board[1][1] === board[2][2-i*2]) {
      setWinningDesign();
    }
  }
  //Check if board is full and thus game over
  isFull = checkIfBoardFull();
  if (isFull) {
    $(".status").text("Game Over");
    $(".status").addClass("game-over-status");
    $("button").addClass("game-over-button");
  }
};

var checkIfBoardFull = function () {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (typeof board[i][j] === "number") {
        return false;
      }
    }
  }
  return true;
};

var setWinningDesign = function() {
  $(".status").text("Winner winner chicken dinner!");
  $(".status").addClass("winner-status");
  $("button").text("New Game");
  $("button").addClass("green-button");
  hasWon = true;
};

//Check if the field is empty, not occupied, and map frontend board cell to memory board cell
var checkIfValid = function (currentId) {
  var boardValue;

  if (currentId === "r1c1") {
    boardValue = board[0][0];
  } else if (currentId === "r1c2") {
    boardValue = board[0][1];
  } else if (currentId === "r1c3") {
    boardValue = board[0][2];
  } else if (currentId === "r2c1") {
    boardValue = board[1][0];
  } else if (currentId === "r2c2") {
    boardValue = board[1][1];
  } else if (currentId === "r2c3") {
    boardValue = board[1][2];
  } else if (currentId === "r3c1") {
    boardValue = board[2][0];
  } else if (currentId === "r3c2") {
    boardValue = board [2][1];
  } else if (currentId === "r3c3") {
    boardValue = board[2][2];
  }

  if (typeof boardValue === "number") {
    return true;
  } else {
    return false;
  }
};

//Map player choice in frontend to memory board
var putElementIntoMemoryBoard = function(currentId) {
  if (currentId === "r1c1") {
    board[0][0] = playerSymbol;
  } else if (currentId === "r1c2") {
    board[0][1] = playerSymbol;
  } else if (currentId === "r1c3") {
    board[0][2] = playerSymbol;
  } else if (currentId === "r2c1") {
    board[1][0] = playerSymbol;
  } else if (currentId === "r2c2") {
    board[1][1] = playerSymbol;
  } else if (currentId === "r2c3") {
    board[1][2] = playerSymbol;
  } else if (currentId === "r3c1") {
    board[2][0] = playerSymbol;
  } else if (currentId === "r3c2") {
    board[2][1] = playerSymbol;
  } else if (currentId === "r3c3") {
    board[2][2] = playerSymbol;
  }
};

//Game logic
var clickFunction = function(event) {
  var cell = $(event.currentTarget);
  var currentId = cell.attr("id");

  clearStatus();
  var isValid = checkIfValid(currentId);
  if (hasWon) {
    $(".status").text("You won, stop trying!");
  } else if (isValid && !hasWon) {
    setPlayerSymbol();
    putElementIntoMemoryBoard(currentId);
    writeSymbolToFrontEndBoard(cell);
    printBoard();
    checkWin();

    if (!isFull && !hasWon) {
      changePlayer();
      setPlayerSymbol();
      $(".status").text("Player " + playerSymbol + ", you're up!");
    }

  } else if (!isValid && !hasWon && !isFull) {
    $(".status").text("Occupied! Try another field.");
  } else if(!isValid && !hasWon && isFull) {
    $(".status").text("The game is over. Accept it.");
  }
};

$(document).ready(function() {
  initializeGame();
  $(".tictactoe-cell").click(clickFunction);
  $("button").click(initializeGame);
});
