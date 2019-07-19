import React, { Component } from 'react';
import ColorBox from './colorbox';
import './styles/palette.css';

import Navbar from './navbar';
import Footer from './footer';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 300,
            format: 'hex'
        }
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }

    changeFormat(format) {
        this.setState({ format });
    }

    render() {
        const { id, paletteName, emoji, colors } = this.props.data;
        const { level, format } = this.state;
        const colorsMarkUp = colors[level].map(color => {
            return <ColorBox 
                pid={id}
                key={color.name} 
                shade={color[format]} 
                name={color.name}
                id={color.id}>
            </ColorBox>;
        });
        return (
            <div className="palette">
                <Navbar 
                    level={this.state.level} 
                    changeLevel={this.changeLevel}
                    changeFormat={this.changeFormat}
                    >
                </Navbar>
                
                <div className="palette-colors">
                    {colorsMarkUp}
                </div>

                <Footer name={paletteName} emoji={emoji}></Footer>
            </div>
        );
    }
}

export default Palette;