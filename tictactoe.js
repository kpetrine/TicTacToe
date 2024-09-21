// Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.
// Create a Tic-Tac-Toe game grid using your HTML element of choice.
// When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
// A heading should say whether it is X's or O's turn and change with each move made.
// A button should be available to clear the grid and restart the game.
// When a player has won, or the board is full and the game results in a draw, 
// a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.

$("h1").css("color", "Purple");

    const PLAYER_X = "👻"; // Player 1
    const PLAYER_O = "🎃"; // Player 2
    let currentPlayer = PLAYER_X; // Start with Player 1
    let board = Array(9).fill("");
    
    function initializeGame() {
        board.fill("");
        currentPlayer = PLAYER_X;
        updateTurnDisplay();
        $(".cell").text("").off('click').on('click', cellClickHandler);
    }
    
    function updateTurnDisplay() {
        $("#turnDisplay").text(`It's ${currentPlayer}'s turn!`);
    }
    
    function switchPlayer() {
        currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
        updateTurnDisplay(); // Update the display after switching to state whose turn it is
    }
    
    function cellClickHandler() {
        const index = $(this).attr('id') - 1;
        if (board[index] === "") {
            board[index] = currentPlayer;
            $(this).text(currentPlayer);
            checkGameStatus();
            switchPlayer();
        }
    }
        
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let [a, b, c] of winningCombinations) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]; // Declare the winner
            }
        }
        return null; // No winner
    }
    
    function checkGameStatus() {
        const winner = checkWinner();
        if (winner) {
            showAlert(`Winner is: ${winner}`);
            $(".cell").off('click');
        } else if (board.every(cell => cell !== "")) {
            showAlert("It's a draw!");
        }
    }
           
    function showAlert(message) {
        $('#alertWinner').text(message).show(); // show alert of winner or draw
    }
    
    function startNewGame() {
        initializeGame();
        $('#alertStart').hide();
        $('#alertWinner').hide();
        $('#alertDraw').hide();
    }
    
    $(function() {
        $("#startBtn").on("click", startNewGame);
        $("#restartBtn").on("click", startNewGame);
        startNewGame(); // setup new game
    });
