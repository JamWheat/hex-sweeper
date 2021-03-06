# Hex Sweeper

## Being a game quite similar (but not exactly the same) to a game you are likely familiar with

Hex Sweeper is a logic game in which players are trying to clear a grid of cells without hitting any mines. When the game starts players are presented with a grid of cells, most of which are empty, but some contain mines. Clicking on a cell opens it, and if the cell is empty if may show a number, incicarting how many adjacent cells contain mines. From this information the player attempts to click on every unmined cell, but if at any time a mine is revealed it and all the other mines on the board explode, ending the game.

### Technologies Used

- JavaScript
- CSS
- HTML
- Deployed via [surge.sh](surge.sh)
- Nunito font, by Vernon Adams

### Screen Shots

|  |     |
|---------|------------------|
|![Hex Sweeper Screen Shot 1](https://i.imgur.com/bKlkNvk.png)|![Hex Sweeper Screen Shot 1](https://i.imgur.com/pDdQvUk.png)|
|![Hex Sweeper Screen Shot 1](https://i.imgur.com/v1soZCU.png)|![Hex Sweeper Screen Shot 1](https://i.imgur.com/vYB3J7b.png)

### Gameplay Overview

- When the game starts up the player will be presented with a window asking for how large a board they would like to play on and how many mines they want to deal with.
- Once they make their choice, they are presented with an untouched play field, generated to their size preference. They will see a counter for the number of remaining mines, a timer, a reset button, and an options button.
- The options button may include an option to hide the timer and a link to the high scores table.
- On their fist click, a timer will start, as a means of keeping score.
- The player will click on cells; if there is no mine they are told how many cells adjacent that cell DO have minds, if any.
- Using this information, the player can deduce where the mines are in the field and mark them.
- The player can right click on a cell to mark it with a flag. This prevents the player from clicking on that cell again, as well as ticks down a counter showing the remaining mines on the field (whether or not the player was correct). A second right click on a flagged cell will change it to a question mark to help the player make deduction in ambiguous situations. A third right click will clear the cell.
- If a player left mouse clicks on a numbered cell, the game will open all adjacent unclicked and unflagged cells (which may end up hitting on a mine).
- If the player clicks on a mine, all mines on the board explode, ending the game (a color-coding system shows which mines were correctly found, which mines were never found, and which flags were never on a mine to begin with).
- If the player finds all the mines and reveals every empty cell, they win!
- Either way, the player can then start a new game. If they choose to, the game will ask them if they want a new board with the same settings or to select new settings.

### Getting Started

Click to play!

[Hex Sweeper](http://hex-sweeper.surge.sh)

### Next Steps

I have a number of future features planned, including but not limited to:

- The player will be able to pause the timer (though if they do the board will be obscured so they can't be cheaty and plan moves while the clock is stopped).
- The game will have sounds when the player clicks on cells and especially when they click on a mine. An option in the options menu, or perhaps an icon in the main play space, will allow them to disable these sounds.
- Hich score tracking, which will also be away to keep track of a player's progress towards ThemeChievments.
- As the player plays, they will unlock themes for the board, such as a space scene or an island, that also include ambient sound and sounds specific to that theme.

### Original wireframe mockup of player's view

![CSS grid concept](https://i.imgur.com/x86Sp3M.png)

### User Stories

>Aurther enjoys the logic of trying to clear the field, he finds it relaxing. But the ticking timer is distracting and adds too much pressure. He's playing for the fun of solving the puzzle, not getting a high score. He wants to be able to hide the timer to make the game a more meditative experience.

>Beth has played Minesweeper before, so she does not see much reason to play a new one. Still, she gives it a quick play because why not. When she solves the first board and the game pops up to tell her she has unlocked a new theme she is intrigued. She looks in the theme menu and sees that there are a bunch more, along with the requirements to unlock them. Challenge accepted!

>Cooper has played a lot of Minesweeper, so he really enjoys a challenge. Being able to set the board to 100 cells on a side lets him test his chops.

### Pseudocode

#### Phase One - Proof of concept and core function testing

- **Done** Build prototype css grid for hexes
  - **Done** code grid in css/html within a container
  - **Done** populate with hex images with ids
  - **Done** code js cached elements and event listeners on container to bubble down to hexes
  - >Update: to more effectively be able to get ids from event clicks, I've made the hex images the *background* of the cells. This may end up having a number of benefits anyway.
  - **Done** check if clicking on hexes logs their id, make sure there is no overlap
  - >Update: Ah, and here is the rub. As suspected, the top left and right corners of each cell intrudes into the cells above quite a bit, likely enough to cause significant impact to the user experience. So, new task:
  - **Done** experiment with round buttons in the cells to see if that reduces the overlap problem.
  - > Yep, that did the trick! Round buttons that *almost* fill up the hex do not have any overlap. They don't quite get the vertices of the hexes, but that may actually be a feature, as it will avoid any ambiguity as to exactly where the player clicks. Okay, now to actually code a game...
- **Done** Build prototype game to test cell neighbor detection
  - **Done, needless to say** skip most UI elements
  - **Done** hardcode a grid with set mine placement for testing
  - **Done, kinda** code basic functions in js
    - **not needed for testing** init
    - **Done** checkClick
    - **Done** checkAdj
    - **not needed for testing** render

#### Phase Two - Build it out into minimal game

- **Done** build the base UI
  - **Done** remaining mine counter
  - **Done** timer
  - **Done** reset button
- **Done** disable clickability after first click
- **Done** code right click functions
- **Done** code random mine placement
- **Done** code timer
- **Done** code win and loss states and render them
- **Done, sorta** popup window for game start and end

#### Phase Three - Build in fancy stuff

> Turns out building pre-build boards in a hex grid is a huge pain in the ass (at least the way I have my hex grid). Even a "small" board six hexes to a side has nearly 100 cells, ripe for bugs in the building and game execution. I truly think making the procedural board generation will be easier than making bigger boards by hand, so I am bumping that up the priority list. Plus, once that's done, the game can still have "preset" boards, they will just run through the generation function same as a "custom" board.

- **Done!** code dynamic board generation
- **Done** code spreadFromEmpty functionality
- **Half done** starting window so players can choose board size and mine density
- **Done** justify UI to browser window
- **Done** left click on a numbered cell to reveal all adjacent unflagged, unclicked cells (whether they have mines or not)
- > Now it feels like a real minesweeper!
- high score table
- store user information
- enhance UI
  - hide timer
  - theme menu
  - disable sounds
- **Done** make it look pretty
- **Done** add Dark Mode
- make it look pretty again and again with themes
- add sounds
- "soft click" functionality, graphics
  - >The browser already takes care of the functionality (mostly, the console does throw up an error that has me mildly worried).
- **Done** allowing scollability?
  - > Yeah, duh, a person can just scroll the browser window with the arrow keys like always (though I did add wasd controls as a quality of life feature).
- grab and scroll?
- **_zoomability???_**