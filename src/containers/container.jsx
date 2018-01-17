import React from 'react';
import Game from '../models/game'
import GameBoard from '../components/gameBoard'

class Container extends React.Component {

  constructor(props) {
    super(props)

    const game = new Game()

    this.state = {
      game: game,
      boardArray: game.boardArray
  }

  buttonClicked(evt) {
    console.log(evt.target.getAttribute('pos'));
    game.playTurn(currentPlayer, pos);

    this.set({
      boardArray: game.boardArray
    })
  }

  render(){
    return(
    <GameBoard board={this.state.boardArray} buttonClicked={this.buttonClicked}/>
    )
  }
}

export default Container;
