import React, { Component } from 'react';
import MiniPalette from "./miniPalette";
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    container: {
        width: "50%",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    nav: {
        display: "flex",
        width: "100%",
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    }
}

class PaletteList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { data, classes } = this.props;
        const list = data.map(item => {
            return (
                <div>
                    <MiniPalette key={item.id} {...item} history={this.props.history}></MiniPalette>
                </div>
            )
        })

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h3>React Colors</h3>
                    </nav>
                    <div className={classes.palettes}>
                        {list}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);