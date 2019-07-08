import React, { Component } from 'react';
import ColorBox from './colorbox';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles/palette.css';

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
                <div className="palette-slider">
                    <Slider
                        step={100}
                        min={100}
                        max={900}
                        defaultValue={level}
                        onAfterChange={this.changeLevel}>
                    </Slider>
                </div>
                <div className="palette-colors">
                    {colorsMarkUp}
                </div>
            </div>
        );
    }
}

export default Palette;