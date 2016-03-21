// ----------------------------------------
// View
// ----------------------------------------

var JC = JC || {};

JC.view = (function( $ ) {

  var $game = $('#game');
  var $squares = $('.square');
  var $score = $('#score');


  var init = function() { // TODO: pass in onClick callback
    JC.view.updateIds();
    JC.view.clickListener();
  };


  var updateIds = function() {
    $squares.each(function(index, element) {
      var $element = $(element);
      $element.attr('data-id', index);
    });    
  };


  var updateScore = function(points) {
    $score.text(points);
  };


  var updateSquares = function(squares) {
    for (var i = 0; i < squares.length; i++) {
      if (squares[i] === 1) {
        $('[data-id="'+ i +'"]').addClass('active');        
      }
    }

  };



  var clickListener = function() {
    // if you click on the right square, remove the class
    // AND change the value in _dataSquares back to 0
    $game.click('.square', function(e) {
      var $square = $(e.target);

      if ($square.hasClass('active')) {
        $square.removeClass('active');
        var index = parseInt($square.attr('data-id'));
        // TODO: don't call controller
        JC.controller.increaseScore(index);
        JC.view.updateScore(JC.controller.score())
      };
    })
  };



  return {
    init: init,
    updateSquares: updateSquares,
    updateScore: updateScore,
    updateIds: updateIds,
    clickListener: clickListener
  }
  

})( $ );

