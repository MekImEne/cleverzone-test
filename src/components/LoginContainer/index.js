import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Key from '@material-ui/icons/VpnKey';

const useStyles = makeStyles((theme) => ({
    mainTitle: {
        fontFamily: 'GoogleSans',
        fontSize : '40px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#040f33'
    },
    subTitle: {
        fontFamily: 'GoogleSans',
        fontSize : '30px',
        textAlign: 'center',
        color: '#576673',
        marginTop: theme.spacing(2),
    },
    icon: {
        background: '#edf1f3',
        borderRadius: '12px',
        color: '#576673',
        padding: theme.spacing(2),
    }
}));

export default function LoginContainer() {
    const classes = useStyles();

    return (
        <>
            <Typography className={classes.mainTitle} >Agency screen identification</Typography>
            <Typography className={classes.subTitle} > Please enter your agency identification code to continue.</Typography>
            <Input  
                placeholder={"Enter your identification code"}
                width={'50%'}
                icon={<Key className={classes.icon} />}
                required
                value=""
                onChange=""
                id="key"
                name="key"
            />
            <Button type="submit" text="Next" />
        </>
    );
}
