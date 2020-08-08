/*------Constants--------*/


const cellData = [
  x003y001 = {
    coord: 'x003y001',
    hasMine: true,
    beenClicked: false,
    adjMines: null
  },
  x002y002 = {
    coord: 'x002y002',
    hasMine: false,
    beenClicked: false,
    adjMines: null
  },
  x004y002 = {
    coord: 'x004y002',
    hasMine: false,
    beenClicked: false,
    adjMines: null
  },
  x001y003 = {
    coord: 'x001y003',
    hasMine: true,
    beenClicked: false,
    adjMines: null
  },
  x003y003 = {
    coord: 'x003y003',
    hasMine: false,
    beenClicked: false,
    adjMines: null
  },
  x005y003 = {
    coord: 'x005y003',
    hasMine: false,
    beenClicked: false,
    adjMines: null
  },
  x002y004 = {
    coord: 'x002y004',
    hasMine: true,
    beenClicked: false,
    adjMines: null
  },
  x004y004 = {
    coord: 'x004y004',
    hasMine: true,
    beenClicked: false,
    adjMines: null
  },
  x001y005 = {
    coord: 'x001y005',
    hasMine: false,
    beenClicked: false,
    adjMines: null
  },
  x003y005 = {
    coord: 'x003y005',
    hasMine: false,
    beenClicked: false,
    adjMines: null
  },
  x005y005 = {
    coord: 'x005y005',
    hasMine: false,
    beenClicked: false,
    adjMines: null
  },
  x002y006 = {
    coord: 'x002y006',
    hasMine: true,
    beenClicked: false,
    adjMines: null
  },
  x004y006 = {
    coord: 'x004y006',
    hasMine: true,
    beenClicked: false,
    adjMines: null
  },
  x001y007 = {
    coord: 'x001y007',
    hasMine: true,
    beenClicked: false,
    adjMines: null
  },
  x003y007 = {
    coord: 'x003y007',
    hasMine: true,
    beenClicked: false,
    adjMines: null
  },
  x005y007 = {
    coord: 'x005y007',
    hasMine: false,
    beenClicked: false,
    adjMines: null
  },
  x002y008 = {
    coord: 'x002y008',
    hasMine: false,
    beenClicked: false,
    adjMines: null
  },
  x004y008 = {
    coord: 'x004y008',
    hasMine: false,
    beenClicked: false,
    adjMines: null
  },
  x003y009 = {
    coord: 'x003y009',
    hasMine: false,
    beenClicked: false,
    adjMines: null
  }
]
const checkAdjMath = [
  [0, -2],
  [+1, -1],
  [+1, +1],
  [0, +2],
  [-1, +1],
  [-1, -1]
]


// playerInfo = {}
  // an object that stores player info, such as name, previous scores, and wins
// options = []
  // an array of player options for the game to check back on when needed. for example, index 5 could be eight a 0 or a 1, representing if the player wants to view the timer. render would then check this value

/*------Variables--------*/



/*------Cached Element References--------*/
const gridAll = document.getElementById("grid")
//Timer readout
//reset button
//pause button
//options

/*------Event Listeners--------*/
gridAll.addEventListener('click', function(clicked){
  // checkMine(clicked.target.id)
  checkMine(clicked)
  // console.log(clicked.target.parentElement)
});
// new game/reset button
// pause
// options

/*------Functions--------*/
function findCell(input){
  let output = cellData.find((arr) => arr.coord === input.target.id)
  return output
}


function checkMine(clicked){
  let cell = findCell(clicked)
  // let find = cellData.find((arr) => arr.coord === clicked.target.id)
  if (cell.hasMine) {
    console.log('Booom!')
  } else {
    checkAdj(clicked)
  }
}

function checkAdj(clicked){
  let cell = findCell(clicked)
  let myX = parseInt(cell.coord.substring(1, 4))
  let myY = parseInt(cell.coord.substring(5))
  for(let i = 0; i < 6; i++){
    let plainX, plainY
    let theirX = myX + checkAdjMath[i][0]
    let theirY = myY + checkAdjMath[i][1]
    if (theirX < 10){
      plainX = `00${theirX}`
    } else if (theirX < 100) {
      plainX = `0${theirX}`
    } else {
      plainX = `${theirX}`
    }
    if (theirY < 10){
      plainY = `00${theirY}`
    } else if (theirY < 100) {
      plainY = `0${theirY}`
    } else {
      plainY = `${theirY}`
    }
    let theirCoords = `x${plainX}y${plainY}`
    //find cell data based on coords
    let them = cellData.find((arr) => arr.coord === theirCoords)
    if (typeof(them) !== 'undefined'){
      if (them.hasMine) {
        cell.adjMines++
      }
    }
  }
  if (cell.adjMines > 0) {
    clicked.target.innerText = `${cell.adjMines}`
  }
  clicked.target.parentElement.classList.remove('unclicked')
  clicked.target.parentElement.classList.add('clicked')
}



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
  // based on the cell clicked, check to see if any of it's neighbres has a Mine, and returns that value to the cell's data array
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