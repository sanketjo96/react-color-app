import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    appFooter: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '4.7vh',
        "& span": {
            padding: '5px'
        }
    }
}

const  Footer = (props) => {
    const {name, emoji, classes} = props;
    return ( 
        <div className={classes.appFooter}>
            <span className="palette-name">{name}</span>
            <span className="palette-emoji">{emoji}</span>
        </div>
    );
}
 
export default withStyles(styles)(Footer) ;