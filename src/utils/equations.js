function removeNegativeValue (array) {
  if(array[0]<0){
    array[0]= 49;
  }else if (array[0]>49){
    array[0]= 0;
  }
  if(array[1]<0){
    array[1]= 24;
  }else if (array[1]>24){
    array[1]= 0;
  }
  return array;

}

function findNeighbours (xpos,ypos) {
  var array=[];
  for(var y=-1; y<2; y++){
    for(var x=-1; x<2; x++){
      var xcoordinate = xpos + x;
      var ycoordinate = ypos + y;
      if(xcoordinate!== xpos || ycoordinate !== ypos){
        array.push([xcoordinate,ycoordinate])
      }
    }
  }
  array.map(function(element){
    removeNegativeValue(element);
  })
  return array;
}

function switchStates(board){
  for(var y = 0; y < 25; y++){
    for(var x = 0; x < 50; x++){
      var previousState = board[y][x].currentState
      board[y][x].prevState = previousState;
    }
  }
}

function toggleState(count,currentState){
  var newState = currentState;
  if(currentState){
    if(count<2){
      newState = false;
    }
    if(count>3){
      newState = false;
    }
  }else{
    if(count>2){
      newState = true;
    }
    if(count>3){
      newState = false;
    }
  }
  return newState
}

function generateNewGrid(){
  var boardArray = [];
    var i=0;
    for(var x = 0; x < 25; x++){
      var array = [];
      for(var y = 0; y < 50; y++){
        array.push({index: i, currentState: false});
        i++;
      }
      boardArray.push(array);
    }
    return boardArray
}

module.exports = {

  generateGrid(){
    var boardArray = [];
    var i=0;
    for(var x = 0; x < 25; x++){
      var array = [];
      for(var y = 0; y < 50; y++){
        array.push({index: i, currentState: false,prevState:false});
        i++;
      }
      boardArray.push(array);
    }
    return boardArray
  },
  getStateFromNeighbours: function(board){
    switchStates(board);
    for(var y = 0; y < 25; y++){
      for(var x = 0; x < 50; x++){
        var neighbourArray =findNeighbours(x,y);
        var count = neighbourArray.filter(function(element){
            return board[element[1]][element[0]].prevState === true
          }).length;
        var newState = toggleState(count, board[y][x].prevState);
        board[y][x].currentState=newState;
      }
    }
    console.log(board);
    return board;
  }
};