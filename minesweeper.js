document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: []
}
var gridSize = 6 // default; 6x6 grid, will look to change w pickers if get enough time

// Initialising cells to the board.cells object, based off gridSize (where gridSize should ideally be dynamic - TODO)
function initCells() {

  for (var x = 0; x < gridSize; x++) { // for every cell along x-axis...
    
    for (var y = 0; y < gridSize; y++) { // and for the y-axis for each x cell...

      board.cells.push({ // "pushing" properties onto each cells object
        row: x,
        col: y,
        isMine: false, // TODO: iterate random 'isMine: true' onto objects
        isMarked: false,
        hidden: true
      })

    }

  }

}

// Iterating random mines into grid / cells:
function initMines() {

  for (var i = 0; i < Math.floor(board.cells.length / 3); i++) { // iterating through a maximum of 1/3 of the board.cells array

    board.cells[Math.floor(Math.random() * board.cells.length)].isMine = true // choosing a random cell from the array...

  }

}


function startGame () {

  // initialising gameboard:
  initCells()
  initMines()

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
function reset() {

  document.location.reload()

}

// TODO - re-initialising the board (w/o refreshing):
// function reset() {

//   var board = {
//     cells: []
//   }

//   document.getElementsByClassName('board')[0].innerHTML = '' // making the innerHTML of the 'board' class an empty string; 'refreshing'

//   startGame()

// }

  
