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

const keys = {}

const colorScheme = {
  dark: false,
  changeColorScheme: function() {
      colorScheme.dark ? colorScheme.dark = false : colorScheme.dark = true
      const color = colorScheme.dark ? "dark" : ""
      body.setAttribute("class", color)
  }
}

// playerInfo = {}
  // an object that stores player info, such as name, previous scores, and wins
// options = []
  // an array of player options for the game to check back on when needed. for example, index 5 could be eight a 0 or a 1, representing if the player wants to view the timer. render would then check this value

/*------Variables--------*/
let gameOver, mineTotal, started, timerInterval, seconds, flagTotal, winner, boom, groundZero, randIncrease, boardSize
// combine winner, boom, and gameOver to one variable with string or number that functions can check for game states?


/*------Cached Element References--------*/
const gridAll = document.getElementById("grid")
const timer = document.getElementById("timer")
const mineCounter = document.getElementById('mine-counter')
const resetBtn = document.getElementById('reset-button')
const winWin = document.getElementById("win-win")
const welcome = document.getElementById("welcome")
const startBtn = document.getElementById("start")
const sizeInput = document.getElementById("boardSize")
const helpBtn = document.getElementById("help-button")
const closeHelp = document.getElementById("close-help")
const body = document.getElementById("body")
const darkLightBtn = document.getElementById("dark-light")
//pause button
//options

/*------Event Listeners--------*/
gridAll.addEventListener('click', function(clicked){
  let cell = cellData.find((arr) => arr.coord === clicked.target.id)
  if(!gameOver){
    if (!started) {
      firstClick(cell)
    } else if (cell.flag === 'none'){
      if (cell.beenClicked === false) {
        unclicked(cell)
      } else if (cell.beenClicked === true) {
        alreadyClicked(cell)
      }
    }
    
  }
});

gridAll.addEventListener('contextmenu', function(clicked){
  clicked.preventDefault()
  let cell = cellData.find((arr) => arr.coord === clicked.target.id)
  if (!gameOver){
    if (started){
     flagMine(cell)
    }
  }
})

resetBtn.addEventListener('click', function(){
  welcome.style.top = '250px'
  setTimeout(function(){ init() }, 750);
  
}) 

startBtn.addEventListener('click', function(){
  if (isNaN(parseInt(sizeInput.value)) === true){
    sizeInput.value = ''
    sizeInput.placeholder = 'numbers only'
    return
  }
  if (parseInt(sizeInput.value) < 6 || parseInt(sizeInput.value) > 70 ) {
    sizeInput.value = ''
    sizeInput.placeholder = '6 to 70'
    return
  }
  let mineInput = document.getElementsByName('mineInput')
  for(let i = 0; i < mineInput.length; i++){
    if (mineInput[i].checked) {
      randIncrease = parseFloat(mineInput[i].id)
    }
  }
  boardSize = parseInt(sizeInput.value)
  welcome.style.top = '-1000px'
  buildABoard(parseInt(boardSize))
})

helpBtn.addEventListener('click', function(){
  document.getElementById("helping").style.top = '200px'
})

closeHelp.addEventListener('click', function(){
  document.getElementById("helping").style.top = '-900px'
})

darkLightBtn.addEventListener('click', colorScheme.changeColorScheme)
// pause
//options

document.addEventListener('keydown', function(e){
  keys[e.key] = true
  if        (keys.w === true && keys.d === true){ scrollBy( 20,-20)
  } else if (keys.s === true && keys.d === true){ scrollBy( 20, 20)
  } else if (keys.a === true && keys.s === true){ scrollBy(-20, 20)
  } else if (keys.a === true && keys.w === true){ scrollBy(-20,-20)
  } else if (e.key === 'w'){ scrollBy(  0, -20) 
  } else if (e.key === 'a'){ scrollBy(-20,   0)
  } else if (e.key === 's'){ scrollBy(  0,  20)
  } else if (e.key === 'd'){ scrollBy( 20,   0)
  }
})

document.addEventListener('keyup', function(e){
  keys[e.key] = false
})

/*------Tool Functions--------*/
function tick(){
  seconds++
  render()
}

function startTimer(){
  timerInterval = setInterval(tick, 1000)
}

rando = (arg) => (Math.random() < arg) ? 1 : 0;

// don't need this in the new control flow?
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
  window.scrollTo((Math.floor(gridAll.clientWidth*(((gridAll.clientWidth - window.innerWidth)/2) / gridAll.clientWidth))), 0)
  render()
}

/*------Gameplay Functions--------*/

init()

function init(){
  benMode = false
  window.scrollTo(0,0)
  cellData = []
  gridAll.innerHTML = ''
  winner = false
  boom = false
  groundZero = ''
  winWin.style.top = '-500px'
  winWin.innerHTML = ''
  seconds = 0
  flagTotal = 0
  mineTotal = 0
  clearInterval(timerInterval)
  started = false
  gameOver = false
  mineCounter.innerText = ''
  timer.innerText = ''
}

function firstClick(cell){
  let randFactor = .1
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
        //right now, player's mineDensity choice affects randIncreas
        //would it make more sense to have it effect randFactor?
        randFactor = randFactor + randIncrease
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
  started = true
  startTimer()
  unclicked(cell)
}

function unclicked(cell){
  cell.beenClicked = true
  checkMine(cell)
  if (cell.adjMines === 0){
    clickAround(cell, 0)
  }
  checkWin(cell)
}

function alreadyClicked(cell){
  let adjCells = listAdjCells(cell)
  adjCells.forEach(function(obj){
    if (obj.beenClicked === false && obj.flag === 'none'){
      obj.beenClicked = true
      checkMine(obj)
      if (obj.hasMine === true){
        return
      }
      if (obj.adjMines === 0){
        clickAround(obj, 0)
      }
    }
  })
  checkWin(cell)
}

function checkMine(cell){
  if (cell.hasMine === true){
    groundZero = cell.coord
    boom = true
    gameOver = true
    clearInterval(timerInterval)
  }
}

function flagMine(cell){
    if (cell.flag === 'none'){
      cell.flag = 'flag'
      flagTotal++
    } else if (cell.flag === 'flag') {
      cell.flag = 'maybeFlag'
      flagTotal--
    } else {
      cell.flag = 'none'
    }
  render(cell)
}

function checkWin(cell){
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
    clearInterval(timerInterval)
  }
  render(cell)
}

function render(cell){
  if (winner){
    winWin.style.top = '250px'
    mineCounter.innerText = 'mines left: 0'
    winWin.innerHTML = `<p>Congratulations!</p><p>With a grid size of ${boardSize} you found all ${mineTotal} mines in ${seconds} seconds!</p><p>Press Reset to play again.</p>`
  }
  // timer.innerText = seconds
  if (!started) {
    mineCounter.innerText = `Click a cell to start!`
  } else {
    mineCounter.innerText = `mines left: ${mineTotal - flagTotal}`
    if (seconds < 10){
      timer.innerText = `time: 00${seconds}`
    } else if (seconds < 100) {
      timer.innerText = `time: 0${seconds}`
    } else {
     timer.innerText = `time: ${seconds}`
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
        document.getElementById(`${obj.coord}`).parentElement.className = "unclicked"
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
      if (obj.coord === groundZero) {
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

- Short Term
  - reset button can ask if you want the same board or new options
    - if new options, just run reset button as it is, if same options pull from variables
    - so that will mean putting the options into variables rather than passing them straight to the functions
  - thinking mouse cursor for mouse placement?
  - finalize style for default theme
    - better colors
    - hafta redo the images in photoshop, but that's okay, I'll do it better this time
    - shadow around title bar?
    - change font
    - add sounds?  
    - animated start/end popup
  - how to play
    - will need to photoshop some screen grabs
    - find all the mines without clicking on one
    - click a cell to see what it contains
    - numbers tell you how many adjacnt mines
    - right click to flag cells to keep track of how many mines you have fount (plus you can't click on them!)
    - left click on a numbered cell to open all the unflagged cells around it (be careful, if one of these is a mine you lose!)
  
// Long term
  
  //pause button
  //options
  //themes
  //sounds
  // easter egg for length of 1
  //player info tracking for "themeChievments"
  //Move images to imgur (or similar)


--------------------------*/