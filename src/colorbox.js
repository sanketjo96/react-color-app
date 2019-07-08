import React, { Component } from 'react';
import './styles/colorbox.css';

class ColorBox extends Component {
    render() {
        return (
            <div className="color-box" style={{background: this.props.shade}}>
                <span>{ this.props.name }</span>
                <span>More</span>
            </div>
        );
    }
}

export default ColorBox;