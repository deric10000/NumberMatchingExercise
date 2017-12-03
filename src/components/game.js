import React, { Component } from 'react';
import { Board } from './board';
import { Header } from './header';
import { Score } from './score';

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

var captureVal = [];
var scoreArray = [];

const test = (val1) => {
  if (scoreArray.length >= 1) {
    return val1 + scoreArray[0];
  } else {
    return val1;
  }
}

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: makeSquares(),
      score: 0
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(index) {
    return this.setState({
      squares: this.state.squares.map((square, i) => {
        if (i === index && !square.flipped) {
          captureVal.push(square.value);
          if (captureVal[0] === captureVal[1]) {
            document.getElementsByClassName('square')[i].style.background = '#A5C663';
            document.getElementsByClassName('square')[i].style.color = 'white';
            scoreArray[0] = square.value;
            captureVal = [];
          } else {
            scoreArray = [];
          }
          return { value: square.value, flipped: true };
        } else if (i !== index && square.flipped) {
          captureVal = []
          document.getElementsByClassName('square')[i].style.background = 'black';
          return { value: square.value, flipped: false };
        } else {
          return square;
        }
      }),
      score: test(this.state.score)
    })
  };

  render() {

    return (
          <div className="game-board">
            <Header/>
            <Board
              handleClick={ this.handleClick }
              squares={ this.state.squares }
            />
            <Score
              score={ this.state.score }/>
          </div>
    );
  };
};
