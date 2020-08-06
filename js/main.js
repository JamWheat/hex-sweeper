console.log('hello!')

// Constants
// -------------------

// cellData = []
  // an array of arrays, each sub-array storing data about each cell (x coord, y coord, if it has a bomb, if it has been clicked, and adjacent bombs)
// playerInfo = {}
  // an object that stores player info, such as name, previous scores, and wins
// options = []
  // an array of player options for the game to check back on when needed. for example, index 5 could be eight a 0 or a 1, representing if the player wants to view the timer. render would then check this value

// Variables
// -------------------



// Cached Element References
// -------------------

// grid, the parant element of all the cells


// Event Listeners
// -------------------

// a listener atteched to grid, so that it can bubble down to the cells
// new game/reset button
// pause
// options

// Functions
// -------------------

// init
  // funtions to engage and reset the game
  // sets reset/new game to reset
  // askes the player for board size and mine density
  // the possitions of the mines are NOT generated at this point, but rather after the user's fist click. it then generates the board AROUND that cell, to ensure it is not a mine



// checkExplosion
  // the first link in the chain, goes off when a user clicks on a cell
  // on event, checks see if the cell was a mine
  // if so, pass to gameEnd function
  // if not, pass to checkNeighbors function


// checkNeighbors 
  // based on the cell clicked, check to see if any of it's neighbres has a bomb, and returns that value to the cell's data array
    // in theory, aftually, this info can be generated the instant the board state has been generated, in which case this funtion just tells a cell has been clicked
  // if not all the mines have been found, pass to render
  // if all the mines have been found, pass to game end

// gameEnd
  // if the game is over, runs apropriate animations and feezes the board
  // displates the result to the player, be it mine exploded or game won
  // if the game was won, log the score, asking the player's name the first time
  // changes reset/new game to new game
  // passes to render

// render
  // itterates through the data about the board stored in gridData and renders the cells accordingly
  // waits for player input

// pause
  // the funtion that is called when the pause button is hit
  // halts the timer
  // freezes the board state and covers it so that the player cannot cheat and consider a move while the timer is paused