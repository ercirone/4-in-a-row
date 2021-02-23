import React from 'react';
import Grid from './Grid';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieces: Array(42).fill('E'), // 'E' stands for empty.
      /*  
      i = row (from bottom to top)
      j = column (from left to right)
      (i,j)-coordinate goes to j + 7 * i
      */
      blueIsNext: true,
    };
  }

  render() {
    const winning = this.winningPieces();
    return (
      <div className="game">
        <Grid
          pieces={this.state.pieces}
          onClick={(column) => this.handleClick(column)}
          gameOver={winning.length !== 0}
          highlighted={winning}
          />
      </div>
    );
  }

  handleClick(column) {
    const columnToChange = this.state.pieces.filter((p,i) => (i%7 === column));
    const row = columnToChange.findIndex(p => (p === 'E'));
    const newPieceType = this.state.blueIsNext ? 'B' : 'R';
    let newPieces = [...this.state.pieces];
    newPieces[column + 7 * row] = newPieceType;
    this.setState({
      pieces: newPieces,
      blueIsNext: !this.state.blueIsNext,
    });
  }

  winningPieces() {
    let winningRows = [];
    // Adds winning rows
    for (let j=0; j<=3; j++) {
      for (let i=0; i<=5; i++) {
        winningRows.push([0,1,2,3].map(k => k + j + 7 * i));
      }
    }
    // Adds winning columns
    for (let j=0; j<=6; j++) {
      for (let i=0; i<=2; i++) {
        winningRows.push([0,7,14,21].map(k => k + j + 7 * i));
      }
    }
    // Adds winning diagonals
    for (let j=0; j<=3; j++) {
      for (let i=0; i<=2; i++) {
        winningRows.push([0,8,16,24].map(k => k + j + 7 * i));
      }
    }
    // Adds winning antidiagonals
    for (let j=0; j<=3; j++) {
      for (let i=0; i<=2; i++) {
        winningRows.push([21,15,9,3].map(k => k + j + 7 * i));
      }
    }
    const pieces = this.state.pieces;
    for (let [a,b,c,d] of winningRows) {
      if (pieces[a] !== 'E' && pieces[a] === pieces[b] && pieces[b] === pieces[c] && pieces[c] === pieces[d]) {
        return [a,b,c,d];
      }
    }
    return [];
  }
}

export default Game;
