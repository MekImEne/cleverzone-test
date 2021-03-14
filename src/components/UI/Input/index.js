import React from 'react';
import { makeStyles,withStyles, fade } from '@material-ui/core/styles';

import {FormControl, InputBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    marginTop: theme.spacing(5),
  },
}));

const StyledInput = withStyles((theme) => ({
  input: {
    color: '#040f33',
    backgroundColor: `#fff`,
    fontSize: 24,
    fontFamily: 'CircularStd',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade(`#fff`, 0.25)} 0 0 0 0.2rem`,
      borderColor: `#0178ff`,
    },
    '&:-webkit-autofill': {
      '-webkit-box-shadow': '0 0 0px 1000px white inset'
    },
    '&:-webkit-autofill:focus' : {
      '-webkit-box-shadow': '0 0 0 50px white inset',
      '-webkit-text-fill-color': '#040f33'
    },
    '-webkit-text-fill-color': '#040f33 !important'
  },
  adornedEnd: {
    padding: '10px',
    borderRadius: `12px`,
    backgroundColor: `#ffffff`,
    border: `solid 2px #e3ecf0`,
    color: '#040f33',
  }

}))(InputBase);

const StyledInputWithIcon = (props) => {
  const classes = useStyles();
    return(
      <div className={classes.container}>
        <FormControl style={{width : props.width}}>
          <StyledInput 
            placeholder={props.placeholder} 
            id={props.id} 
            name={props.name}
            type={props.type}
            endAdornment={props.icon}
            // value={props.value}
            // onChange={props.onChange}
            required={props.required}
            error={props.error}
          />
        </FormControl>
      </div>
    )
}

export default StyledInputWithIcon