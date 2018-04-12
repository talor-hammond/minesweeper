document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = { // 3 x 3 board:

  cells: [
    {
      row: 0,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 0,
      col: 1,
      isMine: true,
      isMarked: false,
      hidden: true
    },
    {
      row: 0,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 1,
      col: 0,
      isMine: true,
      isMarked: false,
      hidden: true
    },
    {
      row: 1,
      col: 1,
      isMine: true,
      isMarked: false,
      hidden: true
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 2,
      col: 0,
      isMine: true,
      isMarked: false,
      hidden: true
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 2,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true
    },
  ]

}

function startGame () {

  // looping through the contents of board.cells...
  for (var i = 0; i < board.cells.length; i++) {

    // console.log(board.cells[i].row)
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]) 
    console.log((board.cells[i].surroundingMines))

  }

  // calling checkForWin on each left-click of the document:
  document.addEventListener("click", checkForWin)

  // calling checkForWin on each right-click of the document:
  document.addEventListener("contextmenu", checkForWin)

  // Don't remove this function call: it makes the game work!
  lib.initBoard()

}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // looping through the contents of board.cells:
  for (var i = 0; i < board.cells.length; i++) {

      if (board.cells[i].isMine && !board.cells[i].isMarked) { // ...if any mine still exists that isn't marked...

        return

      } else if (!board.cells[i].isMine && board.cells[i].hidden) { // ...if anything that isn't a mine is still hidden...

        return

      } 

    }

    lib.displayMessage('You win!')

  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {

  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col)

  var count = 0 // initialising a counter 

  for (var i = 0; i < surroundingCells.length; i++) {

    if (surroundingCells[i].isMine === true) { // iterating through the surroundingCells and checking the isMine property...
      count++
    }

  }

  return count

}

// reset the board; clicking the "Reset" button:

  
