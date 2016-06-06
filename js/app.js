$(document).ready(function() {
  console.log('Hello world');

  $('#resetBtn').click(function() {});

  var board = [
                { 'id': 1, 'position': '#p1', 'action': null },
                { 'id': 2, 'position': '#p2', 'action': null },
                { 'id': 3, 'position': '#p3', 'action': null },
                { 'id': 4, 'position': '#p4', 'action': null },
                { 'id': 5, 'position': '#p5', 'action': null },
                { 'id': 6, 'position': '#p6', 'action': null },
                { 'id': 7, 'position': '#p7', 'action': null },
                { 'id': 8, 'position': '#p8', 'action': null },
                { 'id': 9, 'position': '#p9', 'action': null },
                { 'id': 10, 'position': '#p10', 'action': null },
                { 'id': 11, 'position': '#p11', 'action': null },
                { 'id': 12, 'position': '#p12', 'action': null },
                { 'id': 13, 'position': '#p13', 'action': null },
                { 'id': 14, 'position': '#p14', 'action': null },
                { 'id': 15, 'position': '#p15', 'action': null },
                { 'id': 16, 'position': '#p16', 'action': null },
                { 'id': 17, 'position': '#p17', 'action': null },
                { 'id': 18, 'position': '#p18', 'action': null },
                { 'id': 19, 'position': '#p19', 'action': null },
                { 'id': 20, 'position': '#p20', 'action': null },
                { 'id': 21, 'position': '#p21', 'action': null },
                { 'id': 22, 'position': '#p22', 'action': null },
                { 'id': 23, 'position': '#p23', 'action': null },
                { 'id': 24, 'position': '#p24', 'action': null },
                { 'id': 25, 'position': '#p25', 'action': null },
                { 'id': 26, 'position': '#p26', 'action': null },
                { 'id': 27, 'position': '#p27', 'action': null },
                { 'id': 28, 'position': '#p28', 'action': null },
                { 'id': 29, 'position': '#p29', 'action': null },
                { 'id': 30, 'position': '#p30', 'action': null },
                { 'id': 31, 'position': '#p31', 'action': null },
                { 'id': 32, 'position': '#p32', 'action': null },
                { 'id': 33, 'position': '#p33', 'action': null },
                { 'id': 34, 'position': '#p34', 'action': null },
                { 'id': 35, 'position': '#p35', 'action': null },
                { 'id': 36, 'position': '#p36', 'action': null },
              ];

   // if player lands on div, this performs funciton in action key.
   // Player starts off the board, clicks spin button

   // TO DO: create function that swtiches between player 1 and 2
   // When spinBtn is pressed it calls the switch player function and
   // displays the player and also keeps track of that individuals
   // movement array (spinNumArray, there will be one for each player)
   // make it so that only one name is displayed for each game piece
   // 1 player one and 1 player two

    var spinNumArray = [];

    // Calculates the total amount of spaces moved by player
    function addUpElementsArray(spinNumArray) {
      var totalSpacesMoved = 0;
      var numberOfSquares = 36;

      for (var i = 0; i < spinNumArray.length; i++) {
        totalSpacesMoved += spinNumArray[i];
      } if (totalSpacesMoved > numberOfSquares) {
        alert('Winner Winner Chicken Dinner!');
      }
      return totalSpacesMoved;
      console.log(totalSpacesMoved);
    }

    function storeSpinNum(spinNumber) {
      $('#randNumDiv').html(spinNumber);
      spinNumArray.push(spinNumber);
      console.log(spinNumArray);
      addUpElementsArray(spinNumArray);
    }

    // function to swtich between each player
    // Each player might have to be an object that holds id and position
    function switchPlayer() {
      var playerArray = ['Player One', 'Player Two'];
      var count = 0;
      for (var i = 0; i < playerArray.length; i++) {
        if (count % 2 === 0) {
         // console.log(playerArray[0]);
          return playerArray[0];
          count++
        } else {
         // console.log(playerArray[1]);
          return playerArray[1];
          count++
        }
        // count++;
      }
      console.log('function called');
    }

    // Start Game button, shows Player One and Player Two in <p> tag
    $('#startGame').click(function() {
      $('#showPlayer').html(switchPlayer());
    });

    // Spin the wheel button, also switch between different players
    $('#spinBtn').click(function(e) {
      e.preventDefault();
      var spinArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var spinNumber = Math.floor((Math.random() * spinArray.length) + 1);
      storeSpinNum(spinNumber);
      $('#showPlayer').html(switchPlayer());

      //Move Player Button
    $('#movePlayer').click(function() {
      e.preventDefault();
      for (var i = 0; i < board.length; i++) {
        if (board[i].id === addUpElementsArray(spinNumArray)) {
          $(board[i].position).html('Player One');
        }
      }
    })
  });





}); // document.ready ending
