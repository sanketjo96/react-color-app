import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles/navbar.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex'
        }
        this.handleFormatChange = this.handleFormatChange.bind(this);
    }

    handleFormatChange(e) {
        this.setState({format: e.target.value}, () => this.props.changeFormat(this.state.format));
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state;

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

                <div className="format-select">
                    <Select
                        value={format}
                        onChange={this.handleFormatChange}>
                        <MenuItem value='hex'>Hex #ffff</MenuItem>
                        <MenuItem value='rgb'>RGB</MenuItem>
                        <MenuItem value='rgba'>RGBA</MenuItem>
                    </Select>
                </div>
            </header>
        );
    }
}

export default Navbar;