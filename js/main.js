/*------Constants--------*/
let cellData = [
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
const welcome = document.getElementById("welcome")
const startBtn = document.getElementById("start")
const sizeInput = document.getElementById("boardSize")
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

startBtn.addEventListener('click', function(){
  welcome.style.top = '-1000px'
  buildABoard(parseInt(sizeInput.value))
})
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

function generator(x,y){
  let id = `x${x}y${y}`
  let cell = document.createElement("cell")
  cell.style.gridColumn = `${(x*2)-1}/${(x*2)+2}`
  cell.style.gridRow = `${y}/${y+2}`
  cell.innerHTML = `<button class="cellBtn" id="${id}"></button>`
  gridAll.appendChild(cell)
  const hex = {coord: id, hasMine: false, beenClicked: false, adjMines: 0, flag: 'none'}
  cellData.push(hex)
}

function buildABoard(length){
  let width = 1+(2*(length-1))
  let hieght = 1+(4*(length-1))
  gridAll.style.gridTemplateColumns = `repeat(${width}, 15px 28px) 15px`
  gridAll.style.gridTemplateRows = `repeat(${hieght}, 25px)`
  let x = 1
  let y = 1
  let xCenter = Math.ceil(width/2)
  let xOdds = [xCenter]
  let offSet = 1
  let xEvens = [(xCenter - offSet), (xCenter + offSet)]
  let alternate = 1
  for(let i = 0; i < (length-2); i++){
    if (alternate === 1) {
      xOdds.forEach(function(arr){
        generator(arr, y)
      })
      y++
      offSet++
      xOdds.unshift(xCenter - offSet)
      xOdds.push(xCenter + offSet)
    } else {
      xEvens.forEach(function(arr){
        generator(arr, y)
      })
      y++
      offSet++
      xEvens.unshift(xCenter - offSet)
      xEvens.push(xCenter + offSet)
    }
    alternate *= -1
  }
  for(let i = 0; i < ((length *2) -1); i++){
    if (alternate === 1) {
      xOdds.forEach(function(arr){
        generator(arr, y)
      })
      y++
    } else {
      xEvens.forEach(function(arr){
        generator(arr, y)
      })
      y++
    }
    alternate *= -1
  }
  for(let i = 0; i < length; i++){
    if (alternate === 1) {
      xOdds.forEach(function(arr){
        generator(arr, y)
      })
      y++
      xOdds.shift()
      xOdds.pop()
    } else {
      xEvens.forEach(function(arr){
        generator(arr, y)
      })
      y++
      xEvens.shift()
      xEvens.pop()
    }
    alternate *= -1
  }
  render()
}

/*------Gameplay Functions--------*/

init()

function init(){
  cellData = []
  gridAll.innerHTML = ''
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
  welcome.style.top = '250px'
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
  // fix scrolling problem
  // program edge cases of boardSize inputs
    // gotta be a number
    // easter egg for length of 1
  // reset button can ask if you want the same board or new options
  // left click /  middle click on numbred tiled to hasClicked all around it, even if that hits a bomb
    // add groundZero key to objects?
    // or better, a variable that can be assign the coords of groundZero that render will reference
    // have that be part of checkBomb
    // old notes:
        //click on numbered cell to click around it
        //clickAround can do this, but at the moment it does not check for a lose state. I will need to refactor the control flow so that clickAround passes to hasMine?
          //no, write new funtion when cliking on a cell that has adjMine > 0
  // finalize style for default theme
    //hidden hex behind the board with shadow/glow?
    //animated start/end popup

// Long term

  //pause button
  //how to play
  //options
  //themes
  //sounds
  //player info tracking for "themeChievments"
  //Move images to imgur (or similar)


--------------------------*/