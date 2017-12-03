import React from 'react';
import { Square } from './square';

export const Board = ({handleClick, squares}) => (
    <div>
      { squares.map((square, i) =>
        <Square
          handleClick={ () => handleClick(i) }
          value={ square.value }
          flipped={ square.flipped }
          key={ i }
        />
      )}
    </div>
)
