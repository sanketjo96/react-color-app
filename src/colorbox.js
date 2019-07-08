import React, { Component } from 'react';
import './styles/colorbox.css';

class ColorBox extends Component {
    render() {
        const { shade, name } = this.props;
        return (
            <div className="color-box" style={{ background: shade }}>
                <div className="copy-container">
                    <div className="box-content">
                        <span className="color-name">{name}</span>
                    </div>
                    <span className="see-more">More</span>
                    <button className="copy-button">Copy</button>
                </div>
            </div>
        );
    }
}

export default ColorBox;