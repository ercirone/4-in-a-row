import React from 'react';
import './Column.css';

function TopPiece(props) {
    const j = props.number;
    const topPieceVisibility = props.visible ? 'Visible' : 'Hidden';
    if (!props.visible) {
        return null;
    }
    if (props.full) {
        return(
            <g>
                <line
                    x1={5 + (j + 0.5) * 50 - 15}
                    y1="10"
                    x2={5 + (j + 0.5) * 50 + 15}
                    y2="40"
                    className={topPieceVisibility}
                />
                <line
                    x1={5 + (j + 0.5) * 50 + 15}
                    y1="10"
                    x2={5 + (j + 0.5) * 50 - 15}
                    y2="40"
                    className={topPieceVisibility}
                />
            </g>
        );
    } else {
        return(
            <circle
                cx={5 + (j + 0.5) * 50}
                cy="25"
                r="22"
                className={
                    'Piece ' +
                    topPieceVisibility + ' ' +
                    (props.blueIsNext ? 'B' : 'R')
                }
            />
        );
    }
}


class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mouseOver: false};
    }

    render() {
        const disabled = this.props.disabled ? 'disabled' : '';
        const j = this.props.number;
        return(
            <g>
                <TopPiece
                    number={j}
                    visible={this.state.mouseOver}
                    full={this.props.full}
                    blueIsNext={this.props.blueIsNext}
                />
                <rect
                    x={8 + j * 50}
                    y="58"
                    rx="22"
                    ry="22"
                    width="44"
                    height="294"
                    onClick={() => this.props.onClick(
                        this.props.disabled || this.props.full,
                        this.props.number
                    )}
                    onMouseEnter={() => this.handleMouseEnter()}
                    onMouseLeave={() => this.handleMouseLeave()}
                    className={'Column ' + disabled}
                />
            </g>
        );
    }

    handleMouseEnter() {
        this.setState({mouseOver: true});
    }

    handleMouseLeave() {
        this.setState({mouseOver: false});
    }
}

export default Column;