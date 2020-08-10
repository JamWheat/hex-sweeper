/*------Constants--------*/
const cellData = [
  {
    coord: 'x6y1',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x5y2',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x7y2',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x4y3',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x6y3',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x8y3',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x3y4',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x5y4',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x7y4',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x9y4',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x2y5',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x4y5',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x6y5',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x8y5',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x10y5',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x1y6',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x3y6',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x5y6',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x7y6',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x9y6',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x11y6',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x2y7',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x4y7',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x6y7',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x8y7',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x10y7',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
   coord: 'x1y8',
   hasMine: false,
   beenClicked: false,
   adjMines: null,
   flag: 'none'
  },
  {
    coord: 'x3y8',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x5y8',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x7y8',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x9y8',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x11y8',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x2y9',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x4y9',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x6y9',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x8y9',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x10y9',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x1y10',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x3y10',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x5y10',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x7y10',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x9y10',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x11y10',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x2y11',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x4y11',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x6y11',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x8y11',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x10y11',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x1y12',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x3y12',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x5y12',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x7y12',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x9y12',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x11y12',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x2y13',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x4y13',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x6y13',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x8y13',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x10y13',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x1y14',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x3y14',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x5y14',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x7y14',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x9y14',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x11y14',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x2y15',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x4y15',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x6y15',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x8y15',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x10y15',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x1y16',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x3y16',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x5y16',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x7y16',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x9y16',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x11y16',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x2y17',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x4y17',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x6y17',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x8y17',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x10y17',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x3y18',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x5y18',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x7y18',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x9y18',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x4y19',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x6y19',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x8y19',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x5y20',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
    coord: 'x7y20',
    hasMine: false,
    beenClicked: false,
    adjMines: null,
    flag: 'none'
  },
  {
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
const timer = document.getElementById("timer")
const mineCounter = document.getElementById('mine-counter')
const resetBtn = document.getElementById('reset-button')
const box = document.getElementById("window")
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

function clickAround(cell, loops){
  let adjList = listAdjCells(cell)
  cell.beenClicked = true
  if (adjList[loops].adjMines === 0 && adjList[loops].beenClicked === false){
    let next = adjList[loops]
    clickAround(next, 0)
  }
  adjList[loops].beenClicked = true
  loops++
  if (loops < adjList.length) {
    clickAround(cell, loops)
  } else {
    return
  }
}


/*------Gameplay Functions--------*/

// Build-a-Baord Start

let leng = 6

function calcTotal(input){
  let factor = 0
  let inc = 1
  for (let i = 0; i < (input-1); i++){
    factor = factor + inc
    inc++
  }
  return (6*(factor)) +1
}

console.log(calcTotal(leng))

// Build-a-board End


init()

function init(){
  winner = false
  box.innerHTML = ''
  box.style.top = '-100px'
  seconds = 0
  flagTotal = 0
  clearInterval(timerInterval)
  started = false
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
  let adjCells = listAdjCells(cell)
  adjCoords = adjCells.map(function(obj){
    return obj.coord
  })
  adjCoords.push(cell.coord)
  cellData.forEach(function(obj){
    if (adjCoords.includes(obj.coord)){
    } else {
      if (rando(randFactor) === 1) {
        obj.hasMine = true
        randFactor = .1
        mineTotal++
      } else {
        randFactor = randFactor + .05
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
  cell.beenClicked = true     //
  if (cell.adjMines === 0){   //
    clickAround(cell, 0)      //  Pass to checkMine instead, to mainant coltrol flow?
  }                           //
  started = true              //
  startTimer()                //
  render()                    //
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
  if (cell.adjMines === 0){
    clickAround(cell, 0)
  }
  let clickedTotal = 0                //
  cellData.forEach(function(obj){     //
    if (obj.beenClicked === true){    //  Convert to .reduce()?
      clickedTotal++                  //
    }                                 //
  })
  if (mineTotal + clickedTotal === cellData.length){
    clearInterval(timerInterval)
    winner = true
    gameOver = true
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
    box.style.top = '250px'
    box.innerHTML = `<p>Congratulations!</p><p>You found all ${mineTotal} mines in ${seconds} seconds!</p><p>Press Reset to play again.</p>`
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




/*-----TO DO Short Term---------

// Short Term
  // spread out from empty cells
  // Procedural boards
  // finalize style for default theme

// Long term
  //click on numbered cell to click around it
    //clickAround can do this, but at the moment it does not check for a lose state. I will need to refactor the control flow so that clickAround passes to hasMine?
      //no, write new funtion when cliking on a cell that has adjMine > 0
  //pause button
  //options
  //themes
  //Move images to imgur (or similar)


--------------------------*/

// pause
  // the funtion that is called when the pause button is hit
  // halts the timer
  // freezes the board state and covers it so that the player cannot cheat and consider a move while the timer is paused

/*----------------------------
Things that need to be geneated and put in place for procedural boards:

work out formulas based in input L:
  @ total number of cells: still working on an elegant equation, but I found a brute force solulution
    function calcTotal(input){
      let factor = 0
      let inc = 1
      for (let i = 0; i < (input-1); i++){
        factor = factor + inc
        inc++
      }
      return (6*(factor)) +1
    }
  @ overall width of grid:    W = 1 + (2 * (L - 1))
  @ overall hieght of grid:   H = 1 + (4 * (L - 1))
  -creating rows of columns of CSS grid based on W and H
    -rows does not matter! it is filling in what it needs as more cells are added into the html
    -columbs DO matter. repeat (15px 28px) by the number of columns, then add on one more 15px
  - starting coords of top center cell:
    y will be 1, objouly, x will be half of w rounded down
    so, x1y(floor(W / 2))

put correct number of rows, columbs into css grid

figure out where the center of the grid is, put first cell in center of top row using the correct center x coord

put cell into HTML - give correct x and y
put button into html - give correct id

generate cellData
  - just need to generate the correct number of empty objects, the only vaiable is the coord, which will be both its name its coord value
  - will naming the object based on a string be a problem?
    - do the objects need to be named 

  first, based on L, calculate W H and .style those to #gird
  then, also based on L, calculate T and use that as i for a for loop
    within that for loop, 



-------------*/