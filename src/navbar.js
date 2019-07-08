import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import logo from './static/logo.svg'
import './styles/navbar.css';

class Navbar extends Component {
    render() {
        const { level, changeLevel } = this.props;
        return (
            <header className="app-header">
                <div className="app-logo">
                    Pickolr
                </div>
                <div className="palette-slider">
                    <Slider
                        step={100}
                        min={100}
                        max={900}
                        defaultValue={level}
                        onAfterChange={changeLevel}>
                    </Slider>
                </div>
            </header>
        );
    }
}

export default Navbar;