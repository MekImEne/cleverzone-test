import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid,Card, CardContent, Typography } from '@material-ui/core';
import MainFooter from '../MainFooter';
import logo from "../../assets/footerLogo.jpg";

const useStyles = makeStyles((theme) => ({
    container: {
        width: 'auto',
    },
    paperStyle: {
        backgroundColor: '#0061b7',
        display: 'block',
        alignItems: 'center',
        marginTop: theme.spacing(2),
        padding: theme.spacing(6),
        maxHeight: 740
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
         },
    },
    title: {
        fontFamily: 'GoogleSans',
        fontSize : '70px',
        fontWeight: 'bold',
        color: '#576673',
    },
    number: {
        fontFamily: 'GoogleSans',
        fontSize : '160px',
        fontWeight: 'bold',
        color: '#0061b7',
    },
    verticalSeparator: {
        width: 2,
        height: 500,
        margin: '40px 0 10px 0',
        background: '#a3b1bd',
        [theme.breakpoints.down('sm')]: {
           display: 'none'
        },
    },
    img: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
         },
    },
    counterTitle: {
        fontFamily: 'GoogleSans',
        fontSize : '36px',
        fontWeight: 'bold',
        color: '#576673',
        textAlign:'left',
    },
    counter : {
        fontFamily: 'GoogleSans',
        fontSize : '128px',
        fontWeight: 'bold',
        color: '#040f33',
        textAlign:'left',
    }
}));

const MainContainer = (props) => {
    const classes = useStyles();
    return (
        <Grid className={classes.container}>
            <Paper elevation={0} className={classes.paperStyle}>
                <Card className={classes.root}>
                    <Grid xs={12} md sm={12} item container alignContent={'center'} alignItems="center" justify={'center'} direction="column">
                        <CardContent style={{textAlign:'center'}}>
                            <Typography className={classes.title} >
                                Ticket № 
                            </Typography>
                            <Typography className={classes.number} >
                                302
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid xs={2} item container justify="center" alignContent="center" alignItems="center" direction="column">
                        <div className={classes.verticalSeparator} ></div>
                        <img
                            src={logo}
                            alt="AlgeriPoste"
                            className={classes.img}
                        />
                    </Grid>
                    
                    <Grid xs={12} sm={12} md item container alignContent={'center'} justify={'center'} className={classes.rightSide}>
                        <CardContent>
                            <Typography className={classes.counterTitle} >
                            Please process to counter : 
                            </Typography>
                            <Typography className={classes.counter} >
                                02
                            </Typography>
                        </CardContent>
                    </Grid>
                </Card>
                <MainFooter/>
            </Paper>
        </Grid>
    );
}

export default MainContainer;