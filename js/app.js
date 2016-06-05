$(document).ready(function() {
  console.log('Hello world');

  // var boardArray = [];

  $('#resetBtn').click(function() {});

  // $(function() {
  //   $('#draggable').draggable();
  // });

  // take value from randomNum and make that the amount of
  // distance the player move

  // Create a function to translate randomNum generated into the
  // amount of divs to move down the board

  // Create function to choose between player 1 and 2
  // Create function to

  // $(document).click(function() {
  //     function pickPlayer() {
  //     var playerArray = ['Player One', 'Player Two'];
  //     for (var i = 0; i < 17; i++) {
  //       if (i % 2 === 0) {
  //         return playerArray[0];
  //         console.log(i);
  //       } else {
  //         return playerArray[1];
  //         console.log(i);
  //       }
  //     }
  //   }
  // })

  // Creat Array of Objects that is the board
  // creat function to connect 1st key of object to id of div

  var board = [
                {'id': 1, 'position': '#p1', 'action': null },
                {'id': 2, 'position': '#p2', 'action': null },
                {'id': 3, 'position': '#p3', 'action': null },
                {'id': 4, 'position': '#p4', 'action': null },
                {'id': 5, 'position': '#p5', 'action': null },
                {'id': 6, 'position': '#p6', 'action': null },
                {'id': 7, 'position': '#p7', 'action': null },
                {'id': 8, 'position': '#p8', 'action': null },
                {'id': 9, 'position': '#p9', 'action': null },
                {'id': 10, 'position': '#p10', 'action': null },
                {'id': 11, 'position': '#p11', 'action': null },
                {'id': 12, 'position': '#p12', 'action': null },
                {'id': 13, 'position': '#p13', 'action': null },
                {'id': 14, 'position': '#p14', 'action': null },
                {'id': 15, 'position': '#p15', 'action': null },
                {'id': 16, 'position': '#p16', 'action': null },
              ];

   // if player lands on div, this performs funciton in action key.

  // function toLadderOrChute() {
  //   for(var i = 0; i < board.length; i++) {
  //     if (board[i]['action'] !== null) {
  //       board[i]['action']();
  //     }
  //   }
  // }

  // function movePlayer(place, randNum) {
  //   // take the divVal and change the #p by index
  //   // where the string says player 1 will be a function to change players
  //   $('#p1').html('Player One');

  // }

  $('#randomNum').click(function(e) {
    e.preventDefault();
    var spinArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    var item = Math.floor((Math.random() * spinArray.length) + 1);
    console.log(item);
    $('#randNumDiv').html(item);
    var divVal = $('#p1').html('Player One');

  $('#movePlayer').click(function() {
    e.preventDefault();
    // console.log('button clicked');
    // console.log(item);

    for (var i = 0; i < board.length; i++) {
      if (board[i]['id'] === item) {
        $(board[i]['position']).append('Player One');
      }
    }
  });
});

});












