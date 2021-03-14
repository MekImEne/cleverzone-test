import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {Typography, Grid} from '@material-ui/core';
import logo from "../../assets/queekly-logo-white.png";

const useStyles = makeStyles((theme) => ({
    text: {
        fontFamily: 'GoogleSans',
        fontSize : '20px',
        fontWeight: 'bold',
        marginRight: theme.spacing(2),
    },
    footer: {
        position: `relative`,
        color: `#fff`,
        bottom: `0`,
        left: `0`,
        width: `100%`,
        margin: theme.spacing(5),
    },
}));

export default function MainFooter() {
    const classes = useStyles();

    return (
        <Grid className={classes.footer} item container alignItems="center" justify="center" alignContent="center" >
            <Typography className={classes.text} >By</Typography>
            <img
                src={logo}
                alt="Queekly"
                width="100px"
            /> 
        </Grid>
    );
}
