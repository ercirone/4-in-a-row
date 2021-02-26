import React from 'react';
import Piece from './Piece';
import Column from './Column';
import './Grid.css';

class Grid extends React.Component {
  render() {
    let pieces = [];
    for (let j=0; j<7; j++) {
      for (let i=0; i<6; i++) {
        const pieceIndex = j + 7 * i;
        const type = this.props.pieces[pieceIndex];
        pieces.push(
          <Piece
            row={i}
            column={j}
            type={type}
            highlighted={this.props.highlighted.includes(pieceIndex)}
            key={'piece-' + pieceIndex}
          />
        );
      }
    }
    let columns = [];
    for (let j=0; j<7; j++) {
      const column = this.props.pieces.filter((piece, index) => (index % 7 === j));
      const full = !column.includes('E');
      columns.push(
        <Column
          number={j}
          onClick={(disabled, column) => this.props.onClick(disabled, column)}
          full={full}
          disabled={this.props.gameOver}
          blueIsNext={this.props.blueIsNext}
          key={'column-' + j}
        />
      );
    }
    return (
      <svg width="360" height="360" viewBox="0 0 360 360" className="Grid">
        <rect x="3" y="53" width="354" height="304" className="Rect" />
        {pieces}
        {columns}
      </svg>
    );
  }
}

export default Grid;