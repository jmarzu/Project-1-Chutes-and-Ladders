$(document).ready(function() {
  console.log('Hello world');

  var board = [
                { 'id': 1, 'position': '#p1', 'action': 11 },
                { 'id': 2, 'position': '#p2', 'action': 0 },
                { 'id': 3, 'position': '#p3', 'action': 15 },
                { 'id': 4, 'position': '#p4', 'action': 0 },
                { 'id': 5, 'position': '#p5', 'action': 0 },
                { 'id': 6, 'position': '#p6', 'action': (-4) },
                { 'id': 7, 'position': '#p7', 'action': 0 },
                { 'id': 8, 'position': '#p8', 'action': 0 },
                { 'id': 9, 'position': '#p9', 'action': 0 },
                { 'id': 10, 'position': '#p10', 'action': (-5) },
                { 'id': 11, 'position': '#p11', 'action': 0 },
                { 'id': 12, 'position': '#p12', 'action': 0 },
                { 'id': 13, 'position': '#p13', 'action': 0 },
                { 'id': 14, 'position': '#p14', 'action': (-5) },
                { 'id': 15, 'position': '#p15', 'action': 0 },
                { 'id': 16, 'position': '#p16', 'action': 0 },
                { 'id': 17, 'position': '#p17', 'action': 0 },
                { 'id': 18, 'position': '#p18', 'action': 0 },
                { 'id': 19, 'position': '#p19', 'action': 20 },
                { 'id': 20, 'position': '#p20', 'action': 0 },
                { 'id': 21, 'position': '#p21', 'action': 0 },
                { 'id': 22, 'position': '#p22', 'action': 0 },
                { 'id': 23, 'position': '#p23', 'action': 0 },
                { 'id': 24, 'position': '#p24', 'action': 3 },
                { 'id': 25, 'position': '#p25', 'action': 0 },
                { 'id': 26, 'position': '#p26', 'action': 4 },
                { 'id': 27, 'position': '#p27', 'action': 0 },
                { 'id': 28, 'position': '#p28', 'action': (-6) },
                { 'id': 29, 'position': '#p29', 'action': 0 },
                { 'id': 30, 'position': '#p30', 'action': 0 },
                { 'id': 31, 'position': '#p31', 'action': (-2) },
                { 'id': 32, 'position': '#p32', 'action': 3 },
                { 'id': 33, 'position': '#p33', 'action': 0 },
                { 'id': 34, 'position': '#p34', 'action': 0 },
                { 'id': 35, 'position': '#p35', 'action': 0 },
                { 'id': 36, 'position': '#p36', 'action': (-5) },
                { 'id': 37, 'position': '#p37', 'action': 0 },
                { 'id': 38, 'position': '#p38', 'action': 0 },
                { 'id': 39, 'position': '#p39', 'action': 0 },
                { 'id': 40, 'position': '#p40', 'action': 0 },
                { 'id': 41, 'position': '#p41', 'action': 4 },
                { 'id': 42, 'position': '#p42', 'action': 0 },
                { 'id': 43, 'position': '#p43', 'action': 0 },
                { 'id': 45, 'position': '#p45', 'action': 0 },
                { 'id': 46, 'position': '#p46', 'action': (-5) },
                { 'id': 47, 'position': '#p47', 'action': 0 },
                { 'id': 48, 'position': '#p48', 'action': 0 },
                { 'id': 49, 'position': '#p49', 'action': 0 },
                { 'id': 50, 'position': '#p50', 'action': (-40) }
              ];

    // TO DO: Set up 'action' to happen if a player lands on a certain square
    // Play a video or gif for each player when they win

    var playerArray = ['Player One','Player Two'];
    var count = 0
    var chosenPlayer = 'Player One';
    var currentSpacesMovedPlayer1 = 0;
    var currentSpacesMovedPlayer2 = 0;

    function storeSpinNum(spinNumber) {
      $('#randNumDiv').html(spinNumber);
    }

    function chooseWinner(currentSpacesMovedPlayer1, currentSpacesMovedPlayer2) {
      var numberOfSquares = 50;
      if (currentSpacesMovedPlayer1 > numberOfSquares) {
        // Find funny Chris Farley gif or short video to play if he wins
        alert('Winner Player One!');
      } else if (currentSpacesMovedPlayer2 > numberOfSquares) {
        // Find Bruce Lee gif or short video to play if he wins
        alert('Winner Player Two!');
      }
    }

    // Function to swtich between each player and calculate
    function switchPlayer(spinNumber) {
      if (count % 2 === 0) {
        chosenPlayer = playerArray[0];
        currentSpacesMovedPlayer1 += spinNumber;
        $('#showPlayer').html(chosenPlayer +
          '<img src="http://farm5.static.flickr.com/4098/4857338908_fa26ba78e7.jpg">');

      } else {
        chosenPlayer = playerArray[1];
        currentSpacesMovedPlayer2 += spinNumber;
        $('#showPlayer').html(chosenPlayer +
          '<img src="http://3.bp.blogspot.com/_OpVGSU4at94/TK_-2Jj8LiI/AAAAAAAAEMo/9yUcIW4j1jQ/s640/01.jpg">');
      }
      count++
    }

    $('#resetBtn').click(function() {
      choosenPlayer = "Player One Spin Away";
      count = 1;
      totalSpacesMovedPlayer1 = 0;
      totalSpacesMovedPlayer2 = 0;
    });

    // Start Game button, shows Player One and Player Two in <p> tag
    $('#startGame').click(function() {
      $('#showPlayer').html('Player One ' +
        ' <img src="http://farm5.static.flickr.com/4098/4857338908_fa26ba78e7.jpg"> ' +
        'Player Two ' +
        ' <img src="http://3.bp.blogspot.com/_OpVGSU4at94/TK_-2Jj8LiI/AAAAAAAAEMo/9yUcIW4j1jQ/s640/01.jpg">');
    });

    // Spin the wheel button
    $('#spinBtn').click(function(e) {
      e.preventDefault();
      var spinArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var spinNumber = Math.floor((Math.random() * spinArray.length) + 1);
      storeSpinNum(spinNumber);
      switchPlayer(spinNumber);

    // Move Player Button
    $('#movePlayer').click(function() {
      e.preventDefault();
      // Clears board
      for (var i = 0; i < board.length; i++) {
        $(board[i].position).html('');
      }
      // Appends image of current player in correct postion
      for (var i = 0; i < board.length; i++) {
        if (board[i].id === currentSpacesMovedPlayer1) {
            console.log(currentSpacesMovedPlayer1);
            currentSpacesMovedPlayer1 += board[i].action;
            console.log(currentSpacesMovedPlayer1);
            $(board[i].position).append('<p id="'+board[i].position +
            '"><img src="http://farm5.static.flickr.com/4098/4857338908_fa26ba78e7.jpg"></p>');
        }
        if (board[i].id === currentSpacesMovedPlayer2) {
           console.log(currentSpacesMovedPlayer2);
           currentSpacesMovedPlayer2 += board[i].action;
           console.log(currentSpacesMovedPlayer2);
           $(board[i].position).append('<p id="'+board[i].position +
           '"><img src="http://3.bp.blogspot.com/_OpVGSU4at94/TK_-2Jj8LiI/AAAAAAAAEMo/9yUcIW4j1jQ/s640/01.jpg"></p>');

        }
      }
      chooseWinner(currentSpacesMovedPlayer1, currentSpacesMovedPlayer2);
    });
  });
}); // document.ready ending
