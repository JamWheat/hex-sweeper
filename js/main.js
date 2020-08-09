/*------Constants--------*/
const cellData = [
  x6y1 = {
    coord: 'x6y1',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x5y2 = {
    coord: 'x5y2',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x7y2 = {
    coord: 'x7y2',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x4y3 = {
    coord: 'x4y3',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x6y3 = {
    coord: 'x6y3',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x8y3 = {
    coord: 'x8y3',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x3y4= {
    coord: 'x3y4',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x5y4= {
    coord: 'x5y4',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x7y4 = {
    coord: 'x7y4',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x9y4 = {
    coord: 'x9y4',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x2y5 = {
    coord: 'x2y5',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x4y5 = {
    coord: 'x4y5',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x6y5 = {
    coord: 'x6y5',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x8y5 = {
    coord: 'x8y5',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x10y5 = {
    coord: 'x10y5',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x1y6 = {
    coord: 'x1y6',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x3y6 = {
    coord: 'x3y6',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x5y6 = {
    coord: 'x5y6',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x7y6 = {
    coord: 'x7y6',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x9y6 = {
    coord: 'x9y6',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x11y6 = {
    coord: 'x11y6',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x2y7 = {
    coord: 'x2y7',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x4y7 = {
    coord: 'x4y7',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x6y7 = {
    coord: 'x6y7',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x8y7 = {
    coord: 'x8y7',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x10y7 = {
    coord: 'x10y7',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x1y8 = {
   coord: 'x1y8',
   hasMine: false,
   beenClicked: false,
   adjMines: null,
   flag: 'none'
  },
  x3y8 = {
    coord: 'x3y8',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x5y8 = {
    coord: 'x5y8',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x7y8 = {
    coord: 'x7y8',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x9y8 = {
    coord: 'x9y8',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x11y8 = {
    coord: 'x11y8',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x2y9 = {
    coord: 'x2y9',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x4y9 = {
    coord: 'x4y9',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x8y9 = {
    coord: 'x8y9',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x9y9= {
    coord: 'x9y9',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x11y9 = {
    coord: 'x11y9',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x1y10 = {
    coord: 'x1y10',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x3y10 = {
    coord: 'x3y10',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x5y10 = {
    coord: 'x5y10',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x7y10 = {
    coord: 'x7y10',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x9y10 = {
    coord: 'x9y10',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x11y10 = {
    coord: 'x11y10',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x2y11 = {
    coord: 'x2y11',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x4y11 = {
    coord: 'x4y11',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x6y11 = {
    coord: 'x6y11',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x8y11 = {
    coord: 'x8y11',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x10y11 = {
    coord: 'x10y11',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x1y12 = {
    coord: 'x1y12',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x3y12 = {
    coord: 'x3y12',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x5y12 = {
    coord: 'x5y12',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x7y12 = {
    coord: 'x7y12',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x9y12= {
    coord: 'x9y12',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x11y12= {
    coord: 'x11y12',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x2y13 = {
    coord: 'x2y13',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x4y13 = {
    coord: 'x4y13',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x6y13 = {
    coord: 'x6y13',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x8y13 = {
    coord: 'x8y13',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x10y13 = {
    coord: 'x10y13',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x1y14 = {
    coord: 'x1y14',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x3y14 = {
    coord: 'x3y14',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x5y14 = {
    coord: 'x5y14',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x7y14 = {
    coord: 'x7y14',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x9y14 = {
    coord: 'x9y14',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x11y14 = {
    coord: 'x11y14',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
    x2y15 = {
    coord: 'x2y15',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
    x4y15 = {
    coord: 'x4y15',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x6y15 = {
    coord: 'x6y15',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x8y16 = {
    coord: 'x8y16',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x10y17 = {
    coord: 'x10y17',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x1y16 = {
    coord: 'x1y16',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x3y16 = {
    coord: 'x3y16',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x5y16 = {
    coord: 'x5y16',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x7y16 = {
    coord: 'x7y16',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x9y16 = {
    coord: 'x9y16',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x11y16 = {
    coord: 'x11y16',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x2y17 = {
    coord: 'x2y17',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x4y17 = {
    coord: 'x4y17',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x6y17 = {
    coord: 'x6y17',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x8y17 = {
    coord: 'x8y17',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x10y17 = {
    coord: 'x10y17',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x3y18 = {
    coord: 'x3y18',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x5y18 = {
    coord: 'x5y18',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x7y18 = {
    coord: 'x7y18',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x9y18 = {
    coord: 'x9y18',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x4y19 = {
    coord: 'x4y19',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x6y19 = {
    coord: 'x6y19',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x8y19 = {
    coord: 'x8y19',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x5y20 = {
    coord: 'x5y20',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x7y20 = {
    coord: 'x7y20',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x6y21 = {
    coord: 'x6y21',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
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
let gameOver, mineTotal


/*------Cached Element References--------*/
const gridAll = document.getElementById("grid")
//For basic testing
const readOut = document.getElementById("readOut")
const timer = document.getElementById("timer")
const mineCounter = document.getElementById('mine-counter')
const resetBtn = document.getElementById('reset-button')
//pause button
//options

/*------Event Listeners--------*/
gridAll.addEventListener('click', function(clicked){
  if(!gameOver){
    checkMine(clicked)
  }
});
gridAll.addEventListener('contextmenu', function(clicked){
  if (!gameOver){
    clicked.preventDefault()
    flagMine(clicked)
  }
})
resetBtn.addEventListener('click', () => init())
// pause
// options

/*------Functions--------*/
// Tools

rando = (arg) => (Math.random() > arg) ? 1 : 0;

function findCell(input){
  let output = cellData.find((arr) => arr.coord === input.target.id)
  return output
}

function listAdjCells(cell){
  let whereY = cell.coord.indexOf('y')
  let myX = parseInt(cell.coord.substring(1, whereY))
  let myY = parseInt(cell.coord.substring((whereY+1)))
  let adjCells = []
  for(let i = 0; i < 6; i++){
    let plainX, plainY
    let theirX = myX + checkAdjMath[i][0]
    let theirY = myY + checkAdjMath[i][1]
    let theirCoords = `x${theirX}y${theirY}`
    let them = cellData.find((arr) => arr.coord === theirCoords)
    if (typeof(them) !== 'undefined'){
      adjCells.push(them)
    }
  }
  return adjCells
}

// Gameplay

init()

function init(){
  readOut.innerText = ''
  gameOver = false
  //reset cells and place mines, updateing minesLeft

}

function checkMine(clicked){
  let cell = findCell(clicked)
  // let find = cellData.find((arr) => arr.coord === clicked.target.id)
  if (cell.hasMine) {
    readOut.innerText = 'BOOOM!'
    gameOver = true
  } else {
    checkAdj(clicked)
  }
}

function checkAdj(clicked){
  let cell = findCell(clicked)
  if (cell.beenClicked === false && cell.flag === 'none'){
    let adjCells = listAdjCells(cell)
    adjCells.forEach(function(arr){
      if (arr.hasMine){
        cell.adjMines++
      }
      if (cell.adjMines > 0) {
        clicked.target.innerText = `${cell.adjMines}`
      }
      cell.beenClicked = true
      clicked.target.parentElement.classList.remove('unclicked')
      clicked.target.parentElement.classList.add('clicked')
    })       
  }
}

function flagMine(clicked){
  let cell = findCell(clicked)
  if (!cell.beenClicked) {
    if (cell.flag === 'none'){
      cell.flag = 'flag'
      clicked.target.parentElement.classList.remove('unclicked')
      clicked.target.parentElement.classList.add('flag')
    } else if (cell.flag === 'flag') {
      cell.flag = 'maybeFlag'
      clicked.target.parentElement.classList.remove('flag')
      clicked.target.parentElement.classList.add('maybeFlag')
    } else {
      cell.flag = 'none'
      clicked.target.parentElement.classList.remove('maybeFlag')
      clicked.target.parentElement.classList.add('unclicked')
    }
  }
}

function render(){
  //update mines left
    // forEach cellData, add up flag: 'flag', subtract from mine total
    // mine total does not change
  //display mines left
  //update timer?
}

/*-----TO DO---------

// Bare Minimum
  // Random Mine Placement (okay if it is shitty)
  // Timer
  // check win (lose if obviously if they click on a mine)
    // mine ticker at zero + all unflagged cells clicked = win


// Ideal to get done
  // Procedural boards


--------------------------*/
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

/*----------------------------
Things that need to be geneated and put in place for procedural boards:

put correct number of rows, columbs into css grid

figure out where the center of the grid is, put first cell in center of top row using the correct center x coord

put cell into HTML - give correct x and y
put button into html - give correct id

generate cellData



-------------*/