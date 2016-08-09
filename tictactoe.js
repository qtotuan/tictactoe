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


  //Ask user for entry
  if (currentPlayer % 2 === 1) {
    var playerChoice = readlineSync.question('Player 1, where do you want to put your symbol? ');
  } else {
    var playerChoice = readlineSync.question('Player 2, where do you want to put your symbol? ');
  }

  if (playerChoice < 1 || playerChoice > 9) {
    console.log("Are you kidding me? Choose something between 1 and 9!")
  }

  // Decide player turn and symbol
  if (currentPlayer % 2 === 1) {
    var playerSymbol = "X"
  } else {
    playerSymbol = "O"
  }


//Match user entry with location on the board

  if (playerChoice === "1") {
      //Check if field is already taken
      if (board[0][0] === "X" || board[0][0] === "O") {
        console.log("Occupied! Try another field.");
        currentPlayer=-1;
      } else {
        board[0][0] = playerSymbol;
      }
  }

  if (playerChoice === "2") {
      //Check if field is already taken
      if (board[0][1] === "X" || board[0][1] === "O") {
        console.log("Occupied! Try another field.");
        currentPlayer=-1;
      } else {
        board[0][1] = playerSymbol;
      }
  }

  if (playerChoice === "3") {
      //Check if field is already taken
      if (board[0][2] === "X" || board[0][2] === "O") {
        console.log("Occupied! Try another field.");
        currentPlayer=-1;
      } else {
        board[0][2] = playerSymbol;
      }
  }

  if (playerChoice === "4") {
      //Check if field is already taken
      if (board[1][0] === "X" || board[1][0] === "O") {
        console.log("Occupied! Try another field.");
        currentPlayer=-1;
      } else {
        board[1][0] = playerSymbol;
      }
  }

  if (playerChoice === "5") {
      //Check if field is already taken
      if (board[1][1] === "X" || board[1][1] === "O") {
        console.log("Occupied! Try another field.");
        currentPlayer=-1;
      } else {
        board[1][1] = playerSymbol;
      }
  }

  if (playerChoice === "6") {
      //Check if field is already taken
      if (board[1][2] === "X" || board[1][2] === "O") {
        console.log("Occupied! Try another field.");
        currentPlayer=-1;
      } else {
        board[1][2] = playerSymbol;
      }
  }


    if (playerChoice === "7") {
        //Check if field is already taken
        if (board[2][0] === "X" || board[2][0] === "O") {
          console.log("Occupied! Try another field.");
          currentPlayer=-1;
        } else {
          board[2][0] = playerSymbol;
        }
    }

    if (playerChoice === "8") {
        //Check if field is already taken
        if (board[2][1] === "X" || board[2][1] === "O") {
          console.log("Occupied! Try another field.");
          currentPlayer=-1;
        } else {
          board[2][1] = playerSymbol;
        }
    }

    if (playerChoice === "9") {
        //Check if field is already taken
        if (board[2][2] === "X" || board[2][2] === "O") {
          console.log("Occupied! Try another field.");
          currentPlayer=-1;
        } else {
          board[2][2] = playerSymbol;
        }
    }





// var counter = 1;
//
//   if (playerChoice === counter) {
//     for (var i = 0; i < 2; i++) {
//       for (var j = 0; j < 2; j++) {
//         if (board[i][j] === "X" || board[i][j] === "O") {
//           console.log("Occupied! Try another field.");
//         } else {
//           board[i][j] = playerSymbol;
//         }
//         counter++;
//       }
//     }
//   }



  // if (playerChoice === "2") {
  //     board[0][1] = playerSymbol
  // }
  //
  // if (playerChoice === "3") {
  //     board[0][2] = playerSymbol
  // }
  //
  // if (playerChoice === "4") {
  //     board[1][0] = playerSymbol
  // }
  //
  // if (playerChoice === "5") {
  //     board[1][1] = playerSymbol
  // }
  //
  // if (playerChoice === "6") {
  //     board[1][2] = playerSymbol
  // }
  //
  // if (playerChoice === "7") {
  //     board[2][0] = playerSymbol
  // }
  //
  // if (playerChoice === "8") {
  //     board[2][1] = playerSymbol
  // }
  //
  // if (playerChoice === "9") {
  //     board[2][2] = playerSymbol
  // }

  // Print board
  printBoard();

  // Check if board is full. If yes, then exit game.
  // TODO check with a for loop


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

  //
  // if (board[0][0] != 1 && board[0][1] != 2 && board[0][2] != 3 && board[1][0] != 4 && board[1][1] != 5 && board[1][2] != 6 && board[2][0] != 7 && board[2][1] != 8 && board[2][2] != 9) {
  //   whileValue = false;
  // }

  // Increase player turn variable
  currentPlayer++;

  // Horizontal

for (var i = 0;i < 3; i++) {
  if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
    console.log("Winner winner chicken dinner!");
    whileValue = false;
  }
}


  // if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
  //   console.log("Winner winner chicken dinner!");
  //   whileValue = false;
  // }
  //
  // if (board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
  //   console.log("Winner winner chicken dinner!");
  //   whileValue = false;
  // }
  //
  // if (board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
  //   console.log("Winner winner chicken dinner!");
  //   whileValue = false;
  // }

  // Vertical

for (var i = 0;i < 3; i++) {
  if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
    console.log("Winner winner chicken dinner!");
    whileValue = false;
  }
}


  //
  // if (board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
  //   console.log("Winner winner chicken dinner!");
  //   whileValue = false;
  // }
  //
  // if (board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
  //   console.log("Winner winner chicken dinner!");
  //   whileValue = false;
  // }
  //
  // if (board[0][2] === board[1][2] && board[1][2] === board[2][2]) {
  //   console.log("Winner winner chicken dinner!");
  //   whileValue = false;
  // }

  // Diagonal

  for (var i = 0; i < 2; i++) {
    if (board[0][i*2] === board[1][1] && board[1][1] === board[2][2-i*2]) {
      console.log("Winner winner chicken dinner!");
      whileValue = false;
    }
  }

  // if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
  //   console.log("Winner winner chicken dinner!");
  //   whileValue = false;
  // }
  //
  // if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
  //   console.log("Winner winner chicken dinner!");
  //   whileValue = false;
  // }

}
