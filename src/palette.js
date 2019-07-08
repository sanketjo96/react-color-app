import React, { Component } from 'react';
import ColorBox from './colorbox';
import './styles/palette.css';

import Navbar from './navbar';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 300
        }
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }

    render() {
        const { colors } = this.props.data;
        const { level } = this.state;

        const colorsMarkUp = colors[level].map(color => {
            return <ColorBox key={color.name} shade={color.hex} name={color.name}></ColorBox>;
        });
        return (
            <div className="palette">
                <Navbar level={this.state.level} changeLevel={this.changeLevel}></Navbar>
                <div className="palette-colors">
                    {colorsMarkUp}
                </div>
            </div>
        );
    }
}

export default Palette;