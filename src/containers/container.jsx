import React from 'react';
import Game from '../models/game'
import GameBoard from '../components/gameBoard'

class Container extends React.Component {

  constructor(props) {
    super(props)

    const game = new Game()

    this.state = {
      game: game
    }

    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(evt) {
    console.log(evt.target.getAttribute('pos'));
    const pos = evt.target.getAttribute('pos');

    this.state.game.playTurn(pos);

    //update the state
    //call render
    this.setState({
      game: this.state.game,
    });
  }

  render(){
    return(
    <GameBoard board={this.state.game.gameBoard} buttonClicked={this.buttonClicked}/>
    )
  }
}

export default Container;
