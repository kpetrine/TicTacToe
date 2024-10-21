This code implements a web-based Tic Tac Toe game with a fun twist: instead of traditional Xs and Os, players use emojis—👻 (ghost) for Player 1 and 🎃 (pumpkin) for Player 2. Here’s a detailed breakdown of what the app does:

## Key Features

### Game Structure:
The game consists of a 3x3 grid, where players take turns placing their symbols in the cells.

### Player Turns:
It alternates between two players: Player 1 uses 👻, and Player 2 uses 🎃. The current player’s turn is displayed at the top of the game.

### Gameplay Logic:
Players click on the cells to place their symbol. If a cell is already occupied, they cannot click it.
The game checks for a winner after each turn using predefined winning combinations.

### Winning and Draw Conditions:
If a player gets three of their symbols in a row (horizontally, vertically, or diagonally), a winning message is displayed.
If all cells are filled without a winner, a draw message is shown.

### Alerts:
The app provides visual feedback with alerts for the start of the game, the winner, or a draw.

### Game Controls:
There are buttons to start a new game and to restart the current game, allowing for easy replayability.

## Key Technologies Used:

### 1. HTML (HyperText Markup Language)
The structure of the webpage is defined using HTML. It includes elements like headings, paragraphs, buttons, and a grid layout for the game board.

### 2. CSS (Cascading Style Sheets)
CSS is used for styling the webpage. The code includes Bootstrap for responsive design and custom styles to define the appearance of the game board, cells, and overall layout.

### 3. JavaScript
JavaScript is used for the interactive elements of the game:
Game Logic: Handles player turns, winning conditions, and game state updates.
Event Handling: Listens for clicks on the game cells and buttons to trigger game actions.
DOM Manipulation: Updates the display of the game board and alerts based on player actions.

### 4. jQuery
The code uses jQuery, a JavaScript library, to simplify DOM manipulation and event handling. This is evident in the use of functions like $() for selecting elements and .on() for setting event listeners.

### 5. Bootstrap
Bootstrap is included via a local file for styling. It provides pre-designed components and responsive grid layouts, making it easier to create a visually appealing and responsive interface.

### 9. Emojis
The game uses emojis (👻 and 🎃) as symbols for the players, adding a fun and engaging element to the gameplay.

### Summary
These technologies work together to create a dynamic and interactive Tic Tac Toe game, allowing players to engage with the game through a visually appealing and user-friendly interface. The combination of HTML, CSS, JavaScript, jQuery, and Bootstrap showcases a solid understanding of web development principles.