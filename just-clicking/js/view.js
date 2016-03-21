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
  }


  var updateIds = function() {
    $squares.each(function(index, element) {
      var $element = $(element);
      $element.attr('data-id', index);
    });    
  }


  var updateSquares = function(index) {
    
  }



  var updateScore = function(points) {
    $score.text(points)
  }


  var lightUp = function(index) {
    $squares.find('data-id', index)
  }



  var clickListener = function() {
    // if you click on the right square, remove the class
    // AND change the value in _dataSquares back to 0
    $game.click('.square', function(e) {
      var $square = $(e.target);

      console.log($square.attr('data-id'))

      if ($square.hasClass('active')) {
        $square.removeClass('active');
        var index = parseInt($square.attr('data-id'))
        JC.controller.increaseScore(index)
      }
    })
  }







  // $game.click('.square', function(e) {
  //   var $square = $(e.target);
  //   if ($square.hasClass('active')) {
  //     $square.removeClass('active');

  //     var index = parseInt($square.attr('data-id'));
  //     _dataSquares[index] = 0;
  //     var score = $score.text();
  //     score = parseInt(score);
  //     $score.text(score + 10);
  //   }
  // });




  return {
    init: init,
    updateSquares: updateSquares,
    updateScore: updateScore,
    updateIds: updateIds,
    lightUp: lightUp,
    clickListener: clickListener
  }

})( $ );

