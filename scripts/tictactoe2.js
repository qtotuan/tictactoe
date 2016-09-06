//Initialize the board
var firstArray = [1,2,3];
var secondArray = [4,5,6];
var thirdArray = [7,8,9];

var board = [
  firstArray,
  secondArray,
  thirdArray
]

var currentPlayer = 1;
var playerSymbol = "X";

//Print the board
var printBoard = function () {
  for (var i =0; i < 3; i++){
    console.log(board[i].join(' | '));
  }
}

var setPlayerSymbol = function () {
  if (currentPlayer % 2 === 1) {
    playerSymbol = "O"
  } else {
    playerSymbol = "X"
  }
  console.log("Playersymbol is " + playerSymbol);
}

var changePlayer = function () {
  currentPlayer++;
  console.log("currentPlayer is " + currentPlayer);
}

var writeSymbolToFrontEndBoard = function (cell) {
  cell.text(playerSymbol);
}

var clickFunction = function(event) {
  var cell = $(event.currentTarget);
  console.log(cell);
  console.log(cell.text());
  console.log(cell.attr("id"));
  var currentId = cell.attr("id");

  mapIdToBoard(currentId);
  writeSymbolToFrontEndBoard(cell);
  printBoard();
  setPlayerSymbol();
  changePlayer();
}

var mapIdToBoard = function (playerChoice) {
  if (playerChoice === "r1c1") {
      //Check if field is already taken
      if (board[0][0] === "X" || board[0][0] === "O") {
        console.log("Occupied! Try another field.");
        currentPlayer=-1;
      } else {
        board[0][0] = playerSymbol;
      }
  }

  if (playerChoice === "r1c2") {
      //Check if field is already taken
      if (board[0][1] === "X" || board[0][1] === "O") {
        console.log("Occupied! Try another field.");
        currentPlayer=-1;
      } else {
        board[0][1] = playerSymbol;
      }
  }

  if (playerChoice === "r1c3") {
      //Check if field is already taken
      if (board[0][2] === "X" || board[0][2] === "O") {
        console.log("Occupied! Try another field.");
        currentPlayer=-1;
      } else {
        board[0][2] = playerSymbol;
      }
  }

  if (playerChoice === "r2c1") {
      //Check if field is already taken
      if (board[1][0] === "X" || board[1][0] === "O") {
        console.log("Occupied! Try another field.");
        currentPlayer=-1;
      } else {
        board[1][0] = playerSymbol;
      }
  }

  if (playerChoice === "r2c2") {
      //Check if field is already taken
      if (board[1][1] === "X" || board[1][1] === "O") {
        console.log("Occupied! Try another field.");
        currentPlayer=-1;
      } else {
        board[1][1] = playerSymbol;
      }
  }

  if (playerChoice === "r2c3") {
      //Check if field is already taken
      if (board[1][2] === "X" || board[1][2] === "O") {
        console.log("Occupied! Try another field.");
        currentPlayer=-1;
      } else {
        board[1][2] = playerSymbol;
      }
  }

  if (playerChoice === "r3c1") {
        //Check if field is already taken
        if (board[2][0] === "X" || board[2][0] === "O") {
          console.log("Occupied! Try another field.");
          currentPlayer=-1;
        } else {
          board[2][0] = playerSymbol;
        }
    }

    if (playerChoice === "r3c2") {
        //Check if field is already taken
        if (board[2][1] === "X" || board[2][1] === "O") {
          console.log("Occupied! Try another field.");
          currentPlayer=-1;
        } else {
          board[2][1] = playerSymbol;
        }
    }

    if (playerChoice === "r3c3") {
        //Check if field is already taken
        if (board[2][2] === "X" || board[2][2] === "O") {
          console.log("Occupied! Try another field.");
          currentPlayer=-1;
        } else {
          board[2][2] = playerSymbol;
        }
    }

}




$(document).ready(function() {
  console.log("Hello Quynh");
  $(".tictactoe-cell").click(clickFunction);

});


// 1.) Detect when clicked twice, Display error in red "Occupied! Try another field."
// 2.) Find when player wins. Console log the winner
// 3.) Display winned in status
// 4.) Reset the game with a button
