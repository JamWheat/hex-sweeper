# Hex Sweeper

## Being a game quite similar (but not exactly the same) to a game you are likely familiar with

> **Note:** At the moment this game is a work in progress and has no functional prototype.

### Intent

When finished, the game will play much the same as the classic game Minesweeper, except that it will be played on a hex grid (which, though it makes the board look fancier, is actually easier to play than traditional Minesweeper).

### Technologies Used

- JavaScript
- CSS
- HTML

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

- Build prototype css grid for hexes
  - code grid in css/html within a container
  - populate with hex images with ids
  - code js cached elements and event listener on container to bubble down to hexes
  - check if clicking on hexes logs their id, make sure there is no overlap
- Build prototype game to test cell neighbor detection
  - skip most UI elements
  - hardcode a grid with set mine placement for testing
  - code basic functions in js
    - init
    - checkClick
    - checkNeighbors
    - render

If all that works, I'll start coming up with next steps. No need to get ahead of myself if I can't get that jazz working.

...that said, if it *does* work, future steps include, but are not limited to:

- coding win and loss states and rendering them
- coding random mine placement
- building the UI
- storing user information
- making it look pretty
- adding sounds
- making it look pretty again and again with themes
- coding dynamic board generation
- allowing scalability?
- allowing **_zoomability???_**