// ----------------------------------------
// Model
// ----------------------------------------

var JC = JC || {};

JC.model = (function( _ ) {

  var random;
  var _score = 0;
  var _dataSquares = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ]; // 0 is inactive, 1 is active?


  var getScore = function() {
    return _score;
  }

  var getSquares = function() {
    return _dataSquares;
  }

  var activateRandomSquare = function() {
    var indexes = _.times(_dataSquares.length, function(index) {

      return index;
    });

    // shuffle indexes
    indexes = _.shuffle(indexes);
    // loops through the shuffled indexes
    for (var i = 0; i < indexes.length; i++) {
      var index = indexes[i];
      var dataSquare = _dataSquares[index];
      // picks a random square to light up
      if (dataSquare === 0) {
        // TODO: don't call controller
        JC.controller.lightUp(index)
        // $square.addClass('active');
        _dataSquares[index] = 1;
        break;
      }
    }
  }


  var processSquareClick = function(index) {
    if (index === random) {
      _score += 10;
      console.log(_score)
    }



    for (var i = 0; i < _dataSquares.length; i++) {
      var loopSquare = _dataSquares[i]
      // if (loopSquare.)
    }
  }


  return {
    getScore: getScore,
    getSquares: getSquares,
    activateRandomSquare: activateRandomSquare,
    processSquareClick: processSquareClick
  }

})( _ );
