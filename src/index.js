import React from 'react';
import { render } from 'react-dom' ;
import { Game } from './components/game'
import './index.css';

window.React = React;

render(
  <Game />,
  document.getElementById('root')
);
