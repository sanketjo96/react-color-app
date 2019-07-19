import React, { Component } from 'react';
import ColorBox from './colorbox';

class SingleColorPalette extends Component {
    render() {
        const shades = this.props.data.map(color => {
            return <ColorBox
                key={color.name}
                shade={color['hex']}
                name={color.name}
                id={color.id}>
            </ColorBox>;
        });
        return (
            <div className="palette">
                <div className="palette-colors">
                    {shades}
                </div>
            </div>
        );
    }
}

export default SingleColorPalette;