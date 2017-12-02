import React, { Component } from 'react';
import { Board } from './board';

const genRandNum = () => {
  return Math.floor(Math.random() * (1 - 8) + 8);
};

const makeSquare = () => {
  return {
    value: genRandNum(),
    flipped: false
  }
}

const makeSquares = () => {
  var rows = [];
  for (var i = 0; i < 16; i++) {
      rows.push(makeSquare());
  }
  return rows;
};

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: makeSquares()
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(index) {
    return this.setState({
      squares: this.state.squares.map((square, i) =>
        i === index ? { value: square.value, flipped: true } : square )
    })
  };

  render() {

    return (
          <div className="game-board">
            <Board
              handleClick={ this.handleClick }
              squares={ this.state.squares }
            />
          </div>
    );
  };
};
