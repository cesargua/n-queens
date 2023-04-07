/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution = [];
  var myBoardObj  = new Board({n: n})
   var boardLength = myBoardObj.rows().length;
   for(var i = 0; i < boardLength ; i++){
      myBoardObj.togglePiece(i,i);
   }
   solution = myBoardObj.rows();

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var solutionCount = 0;

  var board = new Board({n:n});
  var helper = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
      for (let i = 0 ; i < n ; i++) {
        board.togglePiece(row, i);
        if(board.hasAnyRooksConflicts() === false){
          helper(row + 1)
        }
        board.togglePiece(row, i);
      }
    }

    helper(0);

  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
 //we must declare a new board object
 var board = new Board({n:n});
 var helper = function(row, board1) {
   if (row === n) {
     solution = [...board1.rows()];
     console.log("Queen Arrays: " , solution)
     return;
   }
     for (let i = 0 ; i < n ; i++) {
      board1.togglePiece(row, i);
       console.log('whole array', board1.rows())
       if(board1.hasAnyQueensConflicts() === false){
         helper(row + 1, board1)
         //return;
       }
       board1.togglePiece(row, i);

     }
   }

   helper(0, board);
    // solution = board.rows()

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n:n});
  var helper = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
      for (let i = 0 ; i < n ; i++) {
        board.togglePiece(row, i);
        if(board.hasAnyQueensConflicts() === false){
          helper(row + 1)
        }
        board.togglePiece(row, i);
      }
    }

    helper(0);

  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};