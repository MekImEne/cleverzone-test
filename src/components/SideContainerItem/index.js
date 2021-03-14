import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import icon from '../../assets/lounge.svg';

const useStyles = makeStyles((theme) => ({
    iconContainer: {
        backgroundColor: '#edf1f3',
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '12px'
    },
    counter: {
        fontFamily: 'GoogleSans',
        fontSize: '60px',
        fontWeight: 'bold',
        color: '#040f33',
        textAlign: 'left',
        top: '0'
    },
    waiting: {
        fontFamily: 'GoogleSans',
        fontSize: '50px',
        fontWeight: 'bold',
        color: '#0061b7',
        marginLeft: theme.spacing(2),
    },
    type: {
        fontFamily: 'GoogleSans',
        fontSize: '20px',
        color: '#576673',
        marginTop: theme.spacing(8),
    },
    countainer: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
    }
}));

const SideContainerItem = (props) => {
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.countainer} container alignItems="flex-start" direction="row">
                <Grid item xs={12} sm={6} md={6} container>
                    <Grid item xs container direction="column">
                        <Grid item >
                            <Typography className={classes.counter} > {props.counter} </Typography>
                        </Grid>
                        <Grid item >
                            <div className={classes.iconContainer} >
                                <img src={icon} alt="wait" />
                                <Typography className={classes.waiting} > {props.waiting} </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6} container>
                    <Grid item xs container direction="column">
                        <Grid item >
                            <Typography style={{ textAlign: 'right', color: '#0061b7' }} className={classes.counter} > {props.numGuichet} </Typography>
                        </Grid>
                        <Grid item >
                            <Typography style={{ textAlign: 'right'}} className={classes.type} > {props.type} </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default SideContainerItem;