import React, { Component } from 'react';
import ColorBox from './colorbox';
import './styles/palette.css';

class Palette extends Component {
    render() {
        const colors = this.props.data.colors.map(color => {
            return <ColorBox key={color.id} shade={color.color} name={color.name}></ColorBox>;
        });
        return (
            <div className="palette">
                <div className="palette-colors">
                    {colors}
                </div>
            </div>
        );
    }
}

export default Palette;