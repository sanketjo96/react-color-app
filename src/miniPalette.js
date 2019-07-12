import React from 'react';
import { withStyles } from '@material-ui/styles';


const styles = {
    root: {
        backgroundColor: "white",
        borderRadius: "5px",
        border: "1px solid black",
        padding: "0.5rem",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "gray",
        height: "75px",
        "& div": {
            display: "inline-block",
            width: "25%",
            height: "20%"
        }
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    emoji: {
    }
}

const MiniPalette = (props) => {
    const { classes, paletteName, emoji, colors, id} = props;
    const miniDivs = colors.map(color => {
        return <div key={color.name} className={classes.miniDivs} style={{ background: color.color }}></div>
    });

    const navigate = (id) => {
        props.history.push(`/palette/${id}`);
    };

    return (
        <div className={classes.root} onClick={() => navigate(id)}>
            <div className={classes.colors}>{miniDivs}</div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    );
}

export default withStyles(styles)(MiniPalette);