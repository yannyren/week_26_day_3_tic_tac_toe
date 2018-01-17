import React from 'react';

class GameBoard extends React.Component {

  render () {
    console.log(this.props.board);
    const board = this.props.board.map((item, index)=> {
      return  <div className="individualButton" pos={index} key={index} onClick={this.props.buttonClicked}> {item} </div>
    });

    return(
      <div>{board}</div>
    )
  }


}

export default GameBoard;
