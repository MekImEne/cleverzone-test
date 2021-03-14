import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {Grid, Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from "../../assets/ap.jpg";
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: `#ffffff`,
        alignContent: `center`,
    },
    arLocation: {
        fontFamily: 'GeezaPro',
        fontSize : '30px',
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: theme.spacing(2),
        color: '#0061b7'
    },
    enLocation: {
        fontFamily: 'GoogleSans',
        fontSize : '30px',
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: theme.spacing(2),
        color: '#0061b7'
    },
    arWelcome: {
        fontFamily: 'Waseem',
        fontSize : '30px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#040f33'
    },
    enWelcome: {
        fontFamily: 'GoogleSans',
        fontSize : '22px',
        textAlign: 'center',
        color: '#040f33'
    },
    date: {
        fontFamily: 'GoogleSans',
        fontSize : '30px',
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#040f33'
    },
    time: {
        fontFamily: 'GoogleSans',
        fontWeight: 'bold',
        fontSize : '40px',
        textAlign: 'left',
        color: '#0061b7'        
    }
}));

export default function MainNavbar() {
    const classes = useStyles();
    var today = new Date();
    var minutes = today.getMinutes();
    minutes = minutes > 9 ? minutes : '0' + minutes;
    return (
        <AppBar position="static" elevation={0} className={classes.appBar}>
            <Toolbar>
                <Grid container direction="row" justify={'space-between'} alignItems={'center'} >
                    <Grid item lg={2} md={2} sm={6} container>
                        <Grid item >
                            <Typography className={classes.date} >
                                {moment(today).format("DD/MM/YYYY")}
                            </Typography>
                            <Typography className={classes.time}>
                                {today.getHours() + ':' + minutes}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} container justify={'center'} >
                        <Grid item >
                            <Typography className={classes.arWelcome} >
                                مرحباً بكم في بريد الجزائر 
                            </Typography>
                            <Typography className={classes.enWelcome}>
                                Welcome to Algérie Poste
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} container>
                        <Grid item >
                            <Typography className={classes.arLocation} > مكتب البريد القبة </Typography>
                            <Typography className={classes.enLocation} > Bureau de poste Kouba </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg={2} md={2} sm={6} container justify={'flex-end'}>
                        <img
                            src={logo}
                            width="280"
                            alt="AlgeriPoste"
                        />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
