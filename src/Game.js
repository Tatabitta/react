import React from 'react';
import Board from './Game/Board.js';
import './Game/Game.css';


class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>Need implement</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

export default Game;