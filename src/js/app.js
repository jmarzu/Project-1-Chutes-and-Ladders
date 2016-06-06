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

   // if player lands on div, this performs funciton in action key.
   // Player starts off the board, clicks spin button

   // TO DO: When moveBtn is pressed it calls the switch player function and
   // displays the next player to spin and also keeps track of that individuals
   // movement array (spinNumArray, there will be one for each player)
   // make it so that only one name is displayed for each game piece
   // 1 player one and 1 player two
    var playerArray = [ { 'name': 'Player One','id': '','position': ''},
                        { 'name': 'Player Two','id': '','position': ''}
                        ];

    var spinNumArray = [];
    var count = 1;
    var choosenPlayer = 'Player One Spin Away';
    var currentSpacesMoved;

    // Calculates the total amount of spaces moved by player
    function addUpElementsArray(spinNumArray) {
      currentSpacesMoved = 0;
      var numberOfSquares = 36;

      for (var i = 0; i < spinNumArray.length; i++) {
        currentSpacesMoved += spinNumArray[i] + board[i].action;
      } if (currentSpacesMoved === board[i].id && board[i].action != 0) {
        currentSpacesMoved += board[i].action;
      }
      console.log(spinNumArray);
      console.log(currentSpacesMoved);
    }

    function storeSpinNum(spinNumber) {
      $('#randNumDiv').html(spinNumber);
      spinNumArray.push(spinNumber);
      console.log(spinNumArray);
      addUpElementsArray(spinNumArray);
    }

    // function to swtich between each player
    function switchPlayer() {
        if (count % 2 === 0) {
          choosenPlayer = playerArray[0].name + " Spin Away";
        } else {
          choosenPlayer = playerArray[1].name + " Spin Away";
        }
        count++
        console.log(choosenPlayer);
    }


    // Start Game button, shows Player One and Player Two in <p> tag
    $('#startGame').click(function() {
      $('#showPlayer').html(choosenPlayer);
    });

    // Spin the wheel button
    $('#spinBtn').click(function(e) {
      e.preventDefault();
      var spinArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var spinNumber = Math.floor((Math.random() * spinArray.length) + 1);
      storeSpinNum(spinNumber);

      //Move Player Button
    $('#movePlayer').click(function() {
      e.preventDefault();
      for (var i = 0; i < board.length; i++) {
        $(board[i].position).html('');
      }
      console.log(currentSpacesMoved);

      for (var i = 0; i < board.length; i++) {
        if (board[i].id === (currentSpacesMoved)) {
        //  var j = (board[i].action + currentSpacesMoved) -1;
          $(board[i].position).html('<p id="'+board[i].position+'">Player One</p>');
         // console.log(j);
        }
      }
      $('#showPlayer').html(choosenPlayer);
      console.log(choosenPlayer);
    })
  });





}); // document.ready ending
