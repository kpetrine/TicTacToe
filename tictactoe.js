// Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.
// Create a Tic-Tac-Toe game grid using your HTML element of choice.
// When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
// A heading should say whether it is X's or O's turn and change with each move made.
// A button should be available to clear the grid and restart the game.
// When a player has won, or the board is full and the game results in a draw, 
// a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.


    $("h1").css("color", "Purple");

         
        // matrix
        // [012345678]
        //
        // 0 1 2
        // 3 4 5
        // 6 7 8
        //
        // Winning:
        // 012,345,678
        // 036,147,258
        // 048,246
      
        $(function() {
          const $game = $('#game');
      
          $game.on('click', (e) => {
            const $cell = $(e.target).closest('.cell');
            if ($cell.length) {
              const player = $cell.data('player') || 'X';   // dataset.player
              $cell.empty();
              if (player === 'O') {
                $cell.append($(`<i class="bi bi-chat"></i>)`));
                $cell.data('player', 'X');
              }
              else {
                $cell.append($(`<i class="bi bi-emoji-heart-eyes-fill"></i>`));
                $cell.data('player', 'O');
              }
            }
          });
        });  

        // to find winner
        $(function() {
            var board = ["", "", "", "", "", "", "", "", ""]; // Empty board
            var winningCombinations = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
        
            // Example moves 
            board[0] = 'X'; 
            board[1] = 'X'; 
            board[2] = 'X'; // X wins!
        
            var winner = checkWinner(board);
            if (winner) {
                console.log("Winner is: " + winner);
            } else {
                console.log("No winner yet.");
            }
            
            // Check for each board position and log
            $.each(board, function(index, value) {
                console.log("Position " + index + " = " + value);
            });
        });
        
        function checkWinner(board) {
            for (var i = 0; i < winningCombinations.length; i++) {
                var [a, b, c] = winningCombinations[i];
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    return board[a]; // Return the winning player's mark
                }
            }
            return null; // No winner
        }

        //reset game
        $(function () {
            newGame();
            
            //Click event to start the game
            $(".start-btn-wrapper").click(function () {
                startplay();
            
            });
            //Click event to restart the game
            $(".restart-btn").click(function () {
                restartplay();
            }); 
        
      })(jQuery);
