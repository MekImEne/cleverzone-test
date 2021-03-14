import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: `#ff3366`,
        width: '100%'
    }
}));

const StyledRating = (props) => {
  const classes = useStyles();
  return (
    <Snackbar open={props.open} autoHideDuration={6000}>
        <MuiAlert onClose={props.close} className= {classes.root} elevation={6} variant="filled" severity="error">
            {props.message}
        </MuiAlert>
    </Snackbar>
  );
}

export default  StyledRating ;