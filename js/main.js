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
  x6y9 = {
    coord: 'x6y9',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x8y9= {
    coord: 'x8y9',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x10y9 = {
    coord: 'x10y9',
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
  x8y15 = {
    coord: 'x8y15',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  x10y15 = {
    coord: 'x10y15',
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
let gameOver, mineTotal, started, timerInterval, seconds, flagTotal, winner


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
    if (!started) {
      firstClick(clicked)
    } else {
    checkMine(clicked)
    }
  }
});
gridAll.addEventListener('contextmenu', function(clicked){
  clicked.preventDefault()
  if (!gameOver){
    if (started){
     flagMine(clicked)
    }
  }
})
resetBtn.addEventListener('click', () => init())
// pause
// options

/*------Tool Functions--------*/


function tick(){
  seconds++
  render()
}

function startTimer(){
  //  clearInterval(timerInterval)
  timerInterval = setInterval(tick, 1000)
}

rando = (arg) => (Math.random() < arg) ? 1 : 0;

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

/*------Gameplay Functions--------*/

init()

function init(){
  winner = false
  seconds = 0
  flagTotal = 0
  clearInterval(timerInterval)
  started = false
  readOut.innerText = ''
  gameOver = false
  cellData.forEach(function(obj){
    obj.flag = 'none'
    obj.hasMine = false
    obj.beenClicked = false
    obj.adjMines = 0
    document.getElementById(`${obj.coord}`).innerText = ``
  })
  render()
}

function firstClick(clicked){
  let cell = findCell(clicked)
  let randFactor = .1
  mineTotal = 0
  cellData.forEach(function(obj){
    if (obj.coord === cell.coord){
    } else {
      if (rando(randFactor) === 1) {
        obj.hasMine = true
        randFactor = .1
        mineTotal++
      } else {
        randFactor = randFactor + .1
      }
    }
  })
  cellData.forEach(function(obj){
    let adjCells = listAdjCells(obj)
    adjCells.forEach(function(arr){
      if (arr.hasMine){
        obj.adjMines++
      }
    })       
  })
  cell.beenClicked = true
  started = true
  startTimer()
  render()
}

function checkMine(clicked){
  let cell = findCell(clicked)
  if (cell.hasMine === true) {
    if (cell.flag !== 'none'){
      return
    }
    clearInterval(timerInterval)
    gameOver = true
    render(cell.coord)
  } else {
    checkWin(clicked)
  }
}

function checkWin(clicked){
  let cell = findCell(clicked)
  if (cell.beenClicked === false && cell.flag === 'none'){
    cell.beenClicked = true
  }
  let clickedTotal = 0 
  cellData.forEach(function(obj){
    if (obj.beenClicked === true){
      clickedTotal++
    }
  })
  if (flagTotal + clickedTotal === cellData.length){

    clearInterval(timerInterval)
    winner = true
  }
  render()
}

function flagMine(clicked){
  let cell = findCell(clicked)
  if (!cell.beenClicked) {
    if (cell.flag === 'none'){
      cell.flag = 'flag'
      flagTotal++
    } else if (cell.flag === 'flag') {
      cell.flag = 'maybeFlag'
      flagTotal--
    } else {
      cell.flag = 'none'
    }
  }
  render()
}

function render(cell){
  if (winner){
    gameOver = true
    readOut.innerText = "You win!"
  }
  timer.innerText = seconds
  if (!started) {
    mineCounter.innerText = `Click a cell to start!`
    timer.innerText = '000'
  } else {
    mineCounter.innerText = `Mines Left: ${mineTotal - flagTotal}`
    if (seconds < 10){
      timer.innerText = `00${seconds}`
    } else if (seconds < 100) {
      timer.innerText = `0${seconds}`
    } else {
     timer.innerText = seconds
    }
  }
  if (mineTotal - flagTotal < 0){
    mineCounter.style.color = 'red'
  } else (
    mineCounter.style.color = defaultStatus
  )
  cellData.forEach(function(obj){
    if (obj.beenClicked === false){
      if (obj.flag === 'flag') {
        document.getElementById(`${obj.coord}`).parentElement.style.backgroundImage = 'url("/images/hexFlag.png")'
      } else if (obj.flag === 'maybeFlag'){
        document.getElementById(`${obj.coord}`).parentElement.style.backgroundImage = 'url("/images/hexMaybeFlag.png")'
      } else {
        document.getElementById(`${obj.coord}`).parentElement.style.backgroundImage = 'url("/images/hexBevel.png")'
      }
    } else {
      document.getElementById(`${obj.coord}`).parentElement.style.backgroundImage = 'url("/images/hexFlat.png")'
      if (obj.adjMines > 0) {
        document.getElementById(`${obj.coord}`).innerText = `${obj.adjMines}`
      }
    }
    if (gameOver === true && winner === false){
      readOut.innerText = 'BOOOM! You lose!'
      if (obj.hasMine) {
        document.getElementById(`${obj.coord}`).parentElement.style.backgroundImage = 'url("/images/hexMine.png")'
      }
      if (obj.flag === 'flag' && obj.hasMine === false) {
        document.getElementById(`${obj.coord}`).parentElement.style.backgroundImage = 'url("/images/hexFlagNotMine.png")'
      }
      if (obj.flag === 'flag' && obj.hasMine === true) {
        document.getElementById(`${obj.coord}`).parentElement.style.backgroundImage = 'url("/images/hexMineFlag.png")'
      }
      if (obj.coord === cell) {
        document.getElementById(`${obj.coord}`).parentElement.style.backgroundImage = 'url("/images/hexMineExploded.png")'
      }
    }
    //for debugging
    // if (obj.hasMine === true) {
    //   document.getElementById(`${obj.coord}`).innerText = `X`
    // }
  })
}




/*-----TO DO---------

// Bare Minimum
  // Popup for game start and end


// Ideal to get done
  // spread out from empty cells
  // Procedural boards
  // improve random mine placement (put more space around)


--------------------------*/



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