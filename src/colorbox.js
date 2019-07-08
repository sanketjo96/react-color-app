import React, { Component } from 'react';
import './styles/colorbox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {isCopied: false};
        this.onCopyColor = this.onCopyColor.bind(this);
    }

    onCopyColor() {
        this.setState({isCopied: true}, ()=> {
            setTimeout(() => this.setState({isCopied: false}), 1500);
        });
    }

    render() {
        const { shade, name } = this.props;
        return (
            <CopyToClipboard text={shade} onCopy={this.onCopyColor}>
                <div className="color-box" style={{ background: shade }}>
                    <div className={`copy-overlay ${this.state.isCopied && 'show'}`} style={{ background: shade }}>
                    </div>

                    <div className={`copy-message ${this.state.isCopied && 'show'}`}>
                        <h2>Coppied!!!</h2>
                        <div>{shade}</div>
                    </div>
                    
                    <div className="copy-container">
                        <div className="box-content">
                            <span className="color-name">{name}</span>
                        </div>
                        <span className="see-more">More</span>
                        <button className="copy-button">Copy</button>
                    </div>
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;