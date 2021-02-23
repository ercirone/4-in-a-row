import React from 'react';
import Piece from './Piece';
import './Grid.css';

class Grid extends React.Component {
  render() {
    let pieces = [];
    for (let j=0; j<7; j++) {
      for (let i=0; i<6; i++) {
        const type = this.props.pieces[j + 7 * i];
        pieces.push(
          <Piece
            row={i}
            column={j}
            type={type}
            key={i + '-' + j}
            onClick={(column) => this.props.onClick(column)}
            highlighted={this.props.highlighted.includes(j + 7 * i)}
            disabled={this.props.gameOver}
          />
        );
      }
    }
      return (
      <svg width="360" height="360" viewBox="0 0 360 360" className="Grid">
        <rect x="3" y="53" width="354" height="304" className="Rect" />
        {pieces}
      </svg>
    );
  }
}

export default Grid;