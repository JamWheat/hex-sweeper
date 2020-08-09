# Hex Sweeper

## Being a game quite similar (but not exactly the same) to a game you are likely familiar with

### Intent

When finished, the game will play much the same as the classic game Minesweeper, except that it will be played on a hex grid (which, though it makes the board look fancier, is actually easier to play than traditional Minesweeper).

### Go ahead and play the work-in-progress version!

[Hex Sweeper](hex-sweeper.surge.sh)

Lacks most planned functionality, but it is a thing you can win and lose!


### Technologies Used

- JavaScript
- CSS
- HTML
- Deployed via [surge.sh](surge.sh)

### Wireframe mockup of player's view

![CSS grid concept](https://i.imgur.com/x86Sp3M.png)

### Minimum Planned Features

- When the game starts up the player will be presented with a window asking for how large a board they would like to play on (from small, medium, and large) and mine density.
- Once they make their choice, they are presented with an untouched play field. They will see a counter for the number of remaining mines, a timer, a reset button, and an options button.
- The options button may include an option to hide the timer and a link to the high scores table.
- On their fist click, a timer will start, as a means of keeping score.
- The player will click on cells; if there is no mine they are told how many cells adjacent that cell DO have minds, if any.
- Using this information, the player can deduce where the mines are in the field and mark them.
- The player can right click on a cell to mark it with a flag. This prevents the player from clicking on that cell again, as well as ticks down a counter showing the remaining mines on the field (whether or not the player was correct). A second right click on a flagged cell will change it to a question mark to help the player make deduction in ambiguous situations. A third right click will clear the cell.
- If the player wishes, they can pause the timer, but doing so will obscure the board in some way, so they cannot cheat by considering a move while the timer is stopped.
- If the player clicks on a mine, all mines on the board explode, ending the game (a color-coding system shows which mines were correctly found, which mines were never found, and which flags were never on a mine to begin with).
- If the player finds all the mines and reveals every empty cell, they win! The game asks for their name and logs a high score.
- Either way, the player can then start a new game. If they choose to, the game will ask them if they want a new board with the same settings or to select new settings.

### Optimal Planned Features

- If a player middle mouse clicks on a numbered cell, the game will clickCheck all adjacent unclicked and unflagged cells (which may end up clicking on a mine).
- The game will have sounds when the player clicks on cells and especially when they click on a mine. An option in the options menu, or perhaps an icon in the main play space, will allow them to disable these sounds.
- As the player plays, they will unlock themes for the board, such as a space scene or an island, that also include ambient sound and sounds specific to that theme.
- Rather than being presented with three choices of board size, the player can choose a custom board size (within an upper and lower bound). The game will then render an appropriately sized board dynamically.
- I am not sure what the upper bound might be, or if the board will scale to fit the browser window vs being scrollable if it is too much to see at once. If I allow the player to scroll they may be able to make the board ginormous without losing readability, making for some interesting challenge.

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
  - >Update: Ah, and here is the rub. As suspected, the top left corner of each cell intrudes into the cell in that direction quite a bit, likely enough to cause significant impact to the user experience. So, new task:
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

- **done** build the base UI
  - **done** remaining mine counter
  - **done** timer
  - **Done** reset button
- **Done** disable clickability after first click
- **Done** code right click functions
- **Done** code random mine placement
- **Done** code timer
- **Done** code win and loss states and render them
- popup window for game start and end

#### Phase Three - Build in fancy stuff

> Turns out building pre-build boards in a hex grid is a huge pain in the ass (at least the way I have my hex grid). Even a "small" board six hexes to a side has nearly 100 cells, ripe for bugs in the building and game execution. I truly think making the procedural board generation will be easier than making bigger boards by hand, so I am bumping that up the priority list. Plus, once that's done, the game can still have "preset" boards, they will just run through the generation function same as a "custom" board.

- code dynamic board generation
- code spreadFromEmpty functionality
- "soft click" functionality, graphics
- middle mouse button or click on a numbered cell to reveal all adjacent unflagged, unclicked cells (whether they have mines or not)
- allow the player to choose mine density
  - effectively tweaking the random mine algorithm
- high score table
- store user information
- enhance UI
  - hide timer
  - theme menu
  - disable sounds
- make it look pretty
- make it look pretty again and again with themes
- add sounds
- allowing scollability?
  - grab and scoll?
- allowing **_zoomability???_**