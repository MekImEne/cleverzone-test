import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

/**
* @author
* @function StyledButton
**/

const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        padding: '25px',
        fontSize: `24px`,
        fontFamily: 'CircularStd',
        color: `#ffffff`,
        borderRadius: `12px`,
        backgroundColor: `#0061b7`,
        alignItems: `center`,
        textTransform: `capitalize`,
        width: '50%',
        '&:hover': {
            backgroundColor: `#0178ff`,
            opacity: '.8',
        },
    },
    container: {
        textAlign: 'center',
        marginTop: `20px`,
        marginBottom: theme.spacing(15),
    },
}));

const StyledButton = (props) => {
    const classes = useStyles();
    const {text } = props;
    return(
        <div className={classes.container}>
            <Button 
                href={props.href}
                type={props.type}
                className={classes.buttonStyle}
                startIcon={props.icon}
                onClick={props.onClick}
                disabled={props.disabled}
                fullWidth={props.fullWidth}
            >
                {text}
            </Button> 
        </div>  
    )
}

export default StyledButton