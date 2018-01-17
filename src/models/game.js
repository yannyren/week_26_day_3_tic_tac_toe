import React from 'react';

const Game = function(){
  this.gameBoard = ["", "", "",
              "", "", "",
              "", "", ""]
  this.currentPlayer = "X";
}

Game.prototype.playTurn = function(pos) {
  this.gameBoard[pos] = this.currentPlayer;
  // X
  /*
    ["X","", "",
      "", "", "",
      "", "", ""]
  */

  if(this.currentPlayer === "X") {
    this.currentPlayer = "O";
  } else {
    this.currentPlayer = "X";
  }
}

Game.prototype.isWon = function(index){

}

export default Game;
