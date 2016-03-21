// ----------------------------------------
// Model
// ----------------------------------------

var JC = JC || {};

JC.model = (function( _ ) {

  var _score = 0;
  var _dataSquares = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ]; // 0 is inactive, 1 is active


  var getScore = function() {
    return _score;
  };

  var getSquares = function() {
    return _dataSquares;
  };

  var activateRandomSquare = function() {
    var indexes = _.times(_dataSquares.length, function(index) {
      return index;
    });
    // shuffle indexes
    indexes = _.shuffle(indexes);
    // picks a random square to light up
    for (var i = 0; i < indexes.length; i++) {
      var index = indexes[i];
      var dataSquare = _dataSquares[index];

      if (dataSquare === 0) {
        _dataSquares[index] = 1;
        break;
      };
    };
  };


  var processSquareClick = function(index) {
    for (var i = 0; i < _dataSquares.length; i++) {
      if (_dataSquares[index] === 1) {
        _score += 10;
        _dataSquares[index] = 0;
      };
    };
  };


  return {
    getScore: getScore,
    getSquares: getSquares,
    activateRandomSquare: activateRandomSquare,
    processSquareClick: processSquareClick
  };

})( _ );
