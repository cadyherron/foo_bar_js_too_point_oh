// ----------------------------------------
// Controller
// ----------------------------------------

var JC = JC || {};

JC.controller = (function(model, view) {


  var init = function() {
    view.init();
    JC.controller.gameLoop();
  };



  var gameLoop = function() {
    setInterval(function() {
      model.activateRandomSquare();
      view.updateScore(JC.controller.score());
    }, 1000)
  };


  var increaseScore = function(index) {
    model.processSquareClick(index);
  };


  var lightUp = function(index) {
    view.lightUp(index);
    // view.updateSquares(index);
  };



  // setInterval(function() {
  //   var indexes = _.times(_dataSquares.length, function(index) {
  //     return index;
  //   });
  //   indexes = _.shuffle(indexes);

  //   for (var i = 0; i < indexes.length; i++) {
  //     var index = indexes[i];
  //     var $square = $squares.eq(index);
  //     var dataSquare = _dataSquares[index];
  //     if (dataSquare === 0) {
  //       $square.addClass('active');
  //       _dataSquares[index] = 1;
  //       break;
  //     }
  //   }
  // }, 1000);




  var score = function() {
    return JC.model.getScore();
  };




  return {
    init: init,
    score: score,
    lightUp: lightUp,
    gameLoop: gameLoop,
    increaseScore: increaseScore
  }

})(JC.model, JC.view); // dependency injection


