$(document).ready(function() {
  console.log('Hello world');

var boardArray = [];

  $('#randomNum').click(function(e) {
    e.preventDefault();
    var spinArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var item = Math.floor(Math.random() * spinArray.length);
    $('#randNumDiv').html(item);
  })

  $('#resetBtn').submit(function() {
    console.log('reset clicked');
  })

  $('#putPlayer').click(function(e){
    e.preventDefault();
    console.log('button clicked');
    var divVal = $('#p1').html('Joe');


    $('#movePlayer').click(function(e) {
      e.preventDefault();
      console.log('button clicked');
      $('#p7').append(divVal);

   //   var arrivalDiv =
    //  divVal = boardArray[5];

    })
  })

var thisArr;

function createArray(newArr) {
  var newArr = [];
  console.log(newArr);
  for (var i = 0; i < newArr.length; i++) {
    (newArr).push(null);
  }
  console.log(newArr);
}

createArray(thisArr);

});












