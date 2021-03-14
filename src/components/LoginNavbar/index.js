import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {Grid, Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from "../../assets/algerie-poste.jpg";
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appBar: {
        color: '#0061b7',
        background: `#ffffff`,
        alignContent: `center`,
        marginTop: 5,
    },
    grow: {
        flexGrow: 1,
    },
    arLocation: {
        fontFamily: 'GeezaPro',
        fontSize : '30px',
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: theme.spacing(2),
    },
    enLocation: {
        fontFamily: 'GoogleSans',
        fontSize : '30px',
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: theme.spacing(2),
    } 
}));

export default function LoginNavbar() {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static" elevation={0} className={classes.appBar}>
                <Toolbar>
                    <Grid container direction="row" alignItems={'center'} >
                        <Grid item xs={12} md={6} lg={6} xl={6} container>
                            <NavLink to="/login" exact>
                                <img
                                    src={logo}
                                    width="428"
                                    height="214"
                                    className="d-inline-block align-center"
                                    alt="AlgeriPoste"
                                />
                            </NavLink>
                        </Grid>
                        <div className={classes.grow} />
                        <Grid item xs={12} md={6} lg={6} xl={6} container direction="column" >
                            <Grid item >
                                <Typography className={classes.arLocation} > مكتب البريد القبة </Typography>
                                <Typography className={classes.enLocation} > Bureau de poste Kouba </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
