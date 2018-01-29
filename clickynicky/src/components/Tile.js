import React, { Component } from "react";
import './App.css';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (!this.props.flipped) {
            this.props.checkMatch(this.props.value, this.props.id);
        }
    }

    render() {
        const classes = (
            'Tile',
            { 'Tile--flipped': this.props.flipped },
            { 'Tile--matched': this.props.matched }
        );
        const TileValue = this.props.flipped ? this.props.value : '';
        return (
            <div className={classes} onClick={this.handleClick}>
                {TileValue}
            </div>
        );
    }
}

export default Tile;