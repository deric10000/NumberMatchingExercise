import React from 'react';

export const Square = ({handleClick, value, flipped}) => (
  <button
    onClick={ () => handleClick() }
    className="square"
  >{ flipped ? value : null }</button>
)
