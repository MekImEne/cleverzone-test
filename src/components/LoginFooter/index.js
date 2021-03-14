import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {Typography, Grid} from '@material-ui/core';
import logo from "../../assets/queekly-logo.svg";

const useStyles = makeStyles((theme) => ({
    text: {
        fontFamily: 'GoogleSans',
        fontSize : '20px',
        fontWeight: 'bold',
        marginRight: theme.spacing(2),
    },
    footer: {
        position: `relative`,
        color: `#040f33`,
        background: `#fff`,
        bottom: `0`,
        left: `0`,
        width: `100%`,
        marginBottom: theme.spacing(2),
    },
}));

export default function LoginFooter() {
    const classes = useStyles();

    return (
        <Grid className={classes.footer} item container alignItems="center" justify="center" alignContent="center" >
            <Typography className={classes.text} >Powered by</Typography>
            <img
                src={logo}
                alt="Queekly"
                width="100px"
            /> 
        </Grid>
    );
}
