import React from 'react';
import './Piece.css';

class Piece extends React.Component {
  render() {
    const i = this.props.row; // Ranging from 1 to 6.
    const  j = this.props.column; // Ranging from 1 to 7.
    let classes = ['Piece', this.props.type];
    if (this.props.highlighted) {
        classes.push('highlighted');
    }
    return(
      <circle
        cx={5 + (j + 0.5) * 50}
        cy={355 - (i + 0.5) * 50}
        r="22"
        className={classes.join(' ')}
      />
    );
  }
}

export default Piece;