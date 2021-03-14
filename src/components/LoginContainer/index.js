import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Key from '@material-ui/icons/VpnKey';
import SnackbarF from '../UI/Snackbar';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/auth';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    mainTitle: {
        fontFamily: 'GoogleSans',
        fontSize: '40px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#040f33'
    },
    subTitle: {
        fontFamily: 'GoogleSans',
        fontSize: '30px',
        textAlign: 'center',
        color: '#576673',
        marginTop: theme.spacing(2),
    },
    icon: {
        background: '#edf1f3',
        borderRadius: '12px',
        color: '#576673',
        padding: theme.spacing(2),
    },
    errorMessage: {
        textAlign: 'center',
        color: `#ff3366`,
        fontSize: `13px`,
    },
}));

export default function LoginContainer() {
    const validKey = 'WD8U4-9YRPD-X7HZU-GHXBC-MUH9P';
    const classes = useStyles();
    const [openFailureSnackbar, setOpenFailureSnackbar] = useState(false);
    const [serialKey, setSerialKey] = React.useState("");
    const handleChange = e => {
        setSerialKey(e.target.value);
    };
    let history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("serialKey : " + serialKey);
        if(serialKey === validKey){
            setOpenFailureSnackbar(false);
            actions.loginUser(serialKey);
            localStorage.setItem('token', serialKey);
            history.push("/"); 
        }
        else {
            setOpenFailureSnackbar(true);
        } 
    }

    const dispatch = useDispatch();
    const actions = {
        loginUser: key => dispatch(loginUser(key)),
    }
    return (
        <>
            <Typography className={classes.mainTitle} >Agency screen identification</Typography>
            <Typography className={classes.subTitle} > Please enter your agency identification code to continue.</Typography>
            <form onSubmit={handleSubmit} >
                <Input
                    placeholder={"Enter your identification code"}
                    width={'60%'}
                    type={"text"}
                    icon={<Key className={classes.icon} />}
                    required
                    value={serialKey || ""}
                    onChange={handleChange}
                    id='serialKey'
                    name='serialKey'
                />
                <Button onClick={handleSubmit} text="Next" type="submit" />
            </form>
            { openFailureSnackbar &&
                <SnackbarF
                    open={openFailureSnackbar}
                    message={'The serial key is not correct ! Close and retry.'}
                    close={() => { setOpenFailureSnackbar(false) }}
                />
            }
        </>
    );
}
