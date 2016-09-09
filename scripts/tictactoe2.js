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

  printBoard();
  currentPlayer = 1;

  //Clear frontend
  $(".tictactoe-cell").text("");
  //Clear memory board
  $(".status").text("");
}

//Print the board
var printBoard = function () {
  for (var i = 0; i < 3; i++){
    console.log(board[i].join(' | '));
  }
};

var setPlayerSymbol = function () {
  if (currentPlayer % 2 === 1) {
    playerSymbol = "O";
  } else {
    playerSymbol = "X";
  }
  console.log("Playersymbol is " + playerSymbol);
};

var changePlayer = function () {
  currentPlayer++;
  console.log("currentPlayer is " + currentPlayer);
};

var writeSymbolToFrontEndBoard = function (cell) {
  cell.text(playerSymbol);
};


var askForNewGame = function() {
  // var box = confirm("Do you want to start a new game?");
  // console.log("Do you want to start a new game?");
  // if (box === true) {
  //   initializeGame();
  // } else {
  //   alert("Goodbye");
  // }
  console.log("Ask for a new game");
};

var checkWin = function() {

  //Check horizontal winner
  for (var i = 0;i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      $(".status").text("Winner winner chicken dinner!");
      askForNewGame();
    }
  }

  //Check vertical winner
  for (var i = 0;i < 3; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      $(".status").text("Winner winner chicken dinner!");
      askForNewGame();
    }
  }

  //Check diagonal winner
  for (var i = 0; i < 2; i++) {
    if (board[0][i*2] === board[1][1] && board[1][1] === board[2][2-i*2]) {
      $(".status").text("Winner winner chicken dinner!");
      askForNewGame();
  }
}
};

var clearStatus = function() {
  $(".status").text("");
};

var checkBoardFull = function () {
  //Check if board is full
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] === "X" || board[i][j] === "O" ) {
        whileValue = false;
      } else {
        whileValue = true;
        break;
      }
    }
  }

};

var clickFunction = function(event) {
  var cell = $(event.currentTarget);
  console.log(cell);
  console.log(cell.text());
  console.log(cell.attr("id"));
  var currentId = cell.attr("id");

  clearStatus();
  var isValid = checkIfValid(currentId);
  console.log(isValid);
  if (isValid) {
    console.log("I am valid");
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

var mapIdToBoard = function (playerChoice) {
  if (playerChoice === "r1c1") {
      //Check if field is already taken
      if (board[0][0] === "X" || board[0][0] === "O") {
        $(".status").text("Occupied! Try another field.");
        currentPlayer--;
        console.log("Playersymbol is --> " + playerSymbol);
      } else {
        board[0][0] = playerSymbol;
      }
  }

  if (playerChoice === "r1c2") {
      //Check if field is already taken
      if (board[0][1] === "X" || board[0][1] === "O") {
        $(".status").text("Occupied! Try another field.");
        currentPlayer--;
      } else {
        board[0][1] = playerSymbol;
      }
  }

  if (playerChoice === "r1c3") {
      //Check if field is already taken
      if (board[0][2] === "X" || board[0][2] === "O") {
        $(".status").text("Occupied! Try another field.");
        currentPlayer--;
      } else {
        board[0][2] = playerSymbol;
      }
  }

  if (playerChoice === "r2c1") {
      //Check if field is already taken
      if (board[1][0] === "X" || board[1][0] === "O") {
        $(".status").text("Occupied! Try another field.");
        currentPlayer--;
      } else {
        board[1][0] = playerSymbol;
      }
  }

  if (playerChoice === "r2c2") {
      //Check if field is already taken
      if (board[1][1] === "X" || board[1][1] === "O") {
        $(".status").text("Occupied! Try another field.");
        currentPlayer--;
      } else {
        board[1][1] = playerSymbol;
      }
  }

  if (playerChoice === "r2c3") {
      //Check if field is already taken
      if (board[1][2] === "X" || board[1][2] === "O") {
        $(".status").text("Occupied! Try another field.");
        currentPlayer--;
      } else {
        board[1][2] = playerSymbol;
      }
  }

  if (playerChoice === "r3c1") {
        //Check if field is already taken
        if (board[2][0] === "X" || board[2][0] === "O") {
          $(".status").text("Occupied! Try another field.");
          currentPlayer--;
        } else {
          board[2][0] = playerSymbol;
        }
    }

    if (playerChoice === "r3c2") {
        //Check if field is already taken
        if (board[2][1] === "X" || board[2][1] === "O") {
          $(".status").text("Occupied! Try another field.");
          currentPlayer--;
        } else {
          board[2][1] = playerSymbol;
        }
    }

    if (playerChoice === "r3c3") {
        //Check if field is already taken
        if (board[2][2] === "X" || board[2][2] === "O") {
          $(".status").text("Occupied! Try another field.");
          currentPlayer--;
        } else {
          board[2][2] = playerSymbol;
        }
    }

};

var buttonClick = function() {
  initializeGame();
};


$(document).ready(function() {
  initializeGame();
  console.log("Hello Quynh");
  $(".tictactoe-cell").click(clickFunction);
  $("button").click(initializeGame);


});


// 1.) Detect when clicked twice, Display error in red "Occupied! Try another field."
// 2.) Find when player wins. Console log the winner
// 3.) Display winned in status
// 4.) Reset the game with a button
