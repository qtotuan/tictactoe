//Initialize the board
var board = [];
var currentPlayer = 1;
var playerSymbol = "";

var initializeGame = function () {
  board = [];
  for (var i = 0; i < 3; i++) {
    board.push([]);
    for (var j = 1; j < 4; j++){
      board[i].push(j+3*(i));
    }
  }
  $("button").removeClass("green-button");
  $("button").text("Reset Game");
  $("h4").attr("class", "status");


  printBoard();
  currentPlayer = 1;

  //Clear frontend
  $(".tictactoe-cell").text("");
  //Clear memory board
  $(".status").text("");
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
  var isFull = checkIfBoardFull();
  console.log(isFull);
  if (isFull) {
    $(".status").text("Game Over");
    $("status").addClass("game-over-status");
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
};

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

var clickFunction = function(event) {
  var cell = $(event.currentTarget);
  var currentId = cell.attr("id");

  clearStatus();
  var isValid = checkIfValid(currentId);
  if (isValid) {
    setPlayerSymbol();
    putElementIntoMemoryBoard(currentId);
    writeSymbolToFrontEndBoard(cell);
    printBoard();
    checkWin();
    changePlayer();
  } else {
    $(".status").text("Occupied! Try another field.");
  }
};

$(document).ready(function() {
  initializeGame();
  $(".tictactoe-cell").click(clickFunction);
  $("button").click(initializeGame);
});
