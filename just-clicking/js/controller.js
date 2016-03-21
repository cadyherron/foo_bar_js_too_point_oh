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
      JC.controller.lightUp(JC.model.getSquares());
    }, 1000)
  };


  var increaseScore = function(index) {
    model.processSquareClick(index);
  };


  var lightUp = function(squares) {
    view.updateSquares(squares);
  };


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


