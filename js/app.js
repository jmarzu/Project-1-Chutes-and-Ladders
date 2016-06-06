$(document).ready(function() {
  console.log('Hello world');

  $('#resetBtn').click(function() {
    choosenPlayer = "Player One Spin Away";
    count = 1;
    totalSpacesMoved = 0;
  });

  var board = [
                { 'id': 1, 'position': '#p1', 'action': 0 },
                { 'id': 2, 'position': '#p2', 'action': 0 },
                { 'id': 3, 'position': '#p3', 'action': 0 },
                { 'id': 4, 'position': '#p4', 'action': 20 },
                { 'id': 5, 'position': '#p5', 'action': 0 },
                { 'id': 6, 'position': '#p6', 'action': (-1) },
                { 'id': 7, 'position': '#p7', 'action': 0 },
                { 'id': 8, 'position': '#p8', 'action': (-1) },
                { 'id': 9, 'position': '#p9', 'action': 0 },
                { 'id': 10, 'position': '#p10', 'action': 5 },
                { 'id': 11, 'position': '#p11', 'action': (-1) },
                { 'id': 12, 'position': '#p12', 'action': 0 },
                { 'id': 13, 'position': '#p13', 'action': 0 },
                { 'id': 14, 'position': '#p14', 'action': 0 },
                { 'id': 15, 'position': '#p15', 'action': (-1) },
                { 'id': 16, 'position': '#p16', 'action': 0 },
                { 'id': 17, 'position': '#p17', 'action': 0 },
                { 'id': 18, 'position': '#p18', 'action': 0 },
                { 'id': 19, 'position': '#p19', 'action': 0 },
                { 'id': 20, 'position': '#p20', 'action': 0 },
                { 'id': 21, 'position': '#p21', 'action': 0 },
                { 'id': 22, 'position': '#p22', 'action': 0 },
                { 'id': 23, 'position': '#p23', 'action': 0 },
                { 'id': 24, 'position': '#p24', 'action': 0 },
                { 'id': 25, 'position': '#p25', 'action': (-10) },
                { 'id': 26, 'position': '#p26', 'action': 0 },
                { 'id': 27, 'position': '#p27', 'action': 0 },
                { 'id': 28, 'position': '#p28', 'action': 0 },
                { 'id': 29, 'position': '#p29', 'action': 0 },
                { 'id': 30, 'position': '#p30', 'action': 7 },
                { 'id': 31, 'position': '#p31', 'action': 0 },
                { 'id': 32, 'position': '#p32', 'action': 0 },
                { 'id': 33, 'position': '#p33', 'action': 0 },
                { 'id': 34, 'position': '#p34', 'action': 0 },
                { 'id': 35, 'position': '#p35', 'action': 0 },
                { 'id': 36, 'position': '#p36', 'action': 0 },
              ];

    var playerArray = ['Player One','Player Two'];

    var spinNumArrayPlayer1 = [];
    var spinNumArrayPlayer2 = [];

    var count = 0
    var chosenPlayer = 'Player One';
    var currentSpacesMovedPlayer1 = 0;
    var currentSpacesMovedPlayer2 = 0;

    function storeSpinNum(spinNumber) {
      $('#randNumDiv').html(spinNumber);
    }

    // function to swtich between each player
    function switchPlayer(spinNumber) {
      currentSpacesMovedPlayer1 = 0;
      currentSpacesMovedPlayer2 = 0;
      var numberOfSquares = 36;

      if (count % 2 === 0) {
        chosenPlayer = playerArray[0];
        spinNumArrayPlayer1.push(spinNumber);

      } else {
        chosenPlayer = playerArray[1];
        spinNumArrayPlayer2.push(spinNumber);

      }
      for (var i = 0; i < spinNumArrayPlayer1.length; i++) {
        currentSpacesMovedPlayer1 += spinNumArrayPlayer1[i];
      }
      for (var i = 0; i < spinNumArrayPlayer2.length; i++) {
          currentSpacesMovedPlayer2 += spinNumArrayPlayer2[i];
      }
      count++
    }

    // Start Game button, shows Player One and Player Two in <p> tag
    $('#startGame').click(function() {
      $('#showPlayer').html(chosenPlayer);
    });

    // Spin the wheel button
    $('#spinBtn').click(function(e) {
      e.preventDefault();
      var spinArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var spinNumber = Math.floor((Math.random() * spinArray.length) + 1);
      storeSpinNum(spinNumber);
      switchPlayer(spinNumber);

      //Move Player Button
    $('#movePlayer').click(function() {
      e.preventDefault();
      for (var i = 0; i < board.length; i++) {
        $(board[i].position).html('');
      }
      console.log(currentSpacesMovedPlayer1);
      console.log(currentSpacesMovedPlayer2);

      for (var i = 0; i < board.length; i++) {
        if (board[i].id === (currentSpacesMovedPlayer1)) {
          $(board[i].position).append('<p id="'+board[i].position+'"><img src="http://farm5.static.flickr.com/4098/4857338908_fa26ba78e7.jpg"</p>');
        }
        if (board[i].id === (currentSpacesMovedPlayer2)) {
          $(board[i].position).append('<p id="'+board[i].position+'"><img src="https://s-media-cache-ak0.pinimg.com/236x/fd/d8/8e/fdd88ed55dac4c15b04df8e1b5ed1896.jpg"</p>');
        }
      }
    });
  });





}); // document.ready ending
