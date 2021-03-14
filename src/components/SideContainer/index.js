import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import SideContainerItem from '../SideContainerItem';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 'auto',
  },
  paperStyle: {
    backgroundColor: '#fff',
    display: 'block',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  mainTitle: {
    backgroundColor: '#edf1f3',
    width: '100%',
    padding: theme.spacing(1),
  },
  arTitle: {
    fontFamily: 'GeezaPro',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#0061b7'
  },
  enTitle: {
    fontFamily: 'GoogleSans',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#0061b7'
  },
}));

const SideContainer = (props) => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Paper elevation={0} className={classes.paperStyle}>
        <Grid className={classes.mainTitle} container alignItems="flex-start" direction="row">
          <Grid  item xs={12} sm={6} md={6} container>
            <Grid item xs container  direction="column">
              <Grid item >
                <Typography className={classes.arTitle} > التذكرة </Typography>
              </Grid>
              <Grid item >
                <Typography className={classes.enTitle} > Ticket </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={6} container>
            <Grid item xs container direction="column">
              <Grid item >
                <Typography style={{textAlign:'right'}} className={classes.arTitle} > الشباك </Typography>
              </Grid>
              <Grid item >
                <Typography style={{textAlign:'right'}} className={classes.enTitle} > Desk </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <SideContainerItem
          counter={"92"}
          waiting={"02"}
          numGuichet={"01"}
          type={"Business"}
        />
        <Divider />
        <SideContainerItem
          counter={"302"}
          waiting={"28"}
          numGuichet={"02"}
          type={"Type 2"}
        />
        <Divider />
        <SideContainerItem
          counter={"32"}
          waiting={"00"}
          numGuichet={"03"}
          type={"People with special needs"}
        />
      </Paper>
    </Grid>
  );
}

export default SideContainer;