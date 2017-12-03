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

var a = [];

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
      squares: this.state.squares.map((square, i) => {
        if (i === index && !square.flipped) {
          a.push(square.value);
          console.log("array: " + a, "current value: " + square.value);
          if (a[0] === a[1]) {
            console.log(a[0] + " " + a[1] + " " + true);
            document.getElementsByClassName('square')[i].style.background = '#D4C26A';
            document.getElementsByClassName('square')[i].style.color = 'white';
            a = []
          } else {
            console.log(a[0] + " " + a[1] + " " + false)
          }
          return { value: square.value, flipped: true }
        } else if (i !== index && square.flipped) {
          a = []
          document.getElementsByClassName('square')[i].style.background = 'black'
          return { value: square.value, flipped: false }
        } else {
          return square
        }
      })
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
