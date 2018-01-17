import React from 'react';

class GameBoard extends React.Component {

  render () {

    const board = this.props.board.map((item, index)=> {
      return  <div pos={index} key={index} onClick={this.props.buttonClicked}> item </div>
    });

    return(
      <div>{board}</div>
    )
  }


}

export default GameBoard;
