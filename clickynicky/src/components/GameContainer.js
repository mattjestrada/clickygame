import React, { Component } from "react";
import Tile from "./Tile";

function initialTiles() {
    return [
        { value: 2, matched: false, flipped: false },
        { value: 4, matched: false, flipped: false },
        { value: 1, matched: false, flipped: false },
        { value: 1, matched: false, flipped: false },
        { value: 3, matched: false, flipped: false },
        { value: 4, matched: false, flipped: false },
        { value: 2, matched: false, flipped: false },
        { value: 3, matched: false, flipped: false }
    ];
}

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.renderTiles = this.renderTiles.bind(this);
        this.checkMatch = this.checkMatch.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            tiles: initialTiles(),
            lastTile: null,
            locked: false,
            matches: 0
        };
    }

    checkMatch(value, id) {
        if (this.state.locked) {
            return;
        }

        var tiles = this.state.tiles;
        tiles[id].flipped = true;
        this.setState({ tiles, locked: true });
        if (this.state.lastTile) {
            if (value === this.state.lastTile.value) {
                var matches = this.state.matches;
                tiles[id].matched = true;
                tiles[this.state.lastTile.id].matched = true;
                this.setState({ tiles, lastTile: null, locked: false, matches: matches + 1 });
            } else {
                setTimeout(() => {
                    tiles[id].flipped = false;
                    tiles[this.state.lastTile.id].flipped = false;
                    this.setState({ tiles, lastTile: null, locked: false });
                }, 1000);
            }
        } else {
            this.setState({
                lastTile: { id, value },
                locked: false
            });
        }
    }

    renderTiles(tiles) {
        return tiles.map((tile, index) => {
            return (
                <Tile
                    key={index}
                    value={tile.value}
                    id={index}
                    matched={tile.matched}
                    flipped={tile.flipped}
                    checkMatch={this.checkMatch} />
            );
        });
    }

    reset() {
        this.setState({
            tiles: initialTiles(),
            lastTile: null,
            locked: false,
            matches: 0
        });
    }

    render() {
        var btnText = 'Reset';
        if (this.state.matches === this.state.tiles.length / 2) {
            btnText = 'You Win! Play Again?';
        }
        return (
            <div className="Game">
                <div>
                    <button onClick={this.reset}>{btnText}</button>
                </div>
                {this.renderTiles(this.state.tiles)}
            </div>
        );
    }
}

export default GameContainer;