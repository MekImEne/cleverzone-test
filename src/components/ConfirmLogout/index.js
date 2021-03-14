import React from 'react';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/auth';

function useKeyboardEvent(key, callback) {
    useEffect(() => {
        const handler = function (event) {
            if (event.key === key) {
                callback();
            }
        }
        window.addEventListener('keydown', handler)
        return () => {
            window.removeEventListener('keydown', handler)
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
export default function ConfirmLogout(props) {
    const [open, setOpen] = React.useState(false);
    let history = useHistory();
    const dispatch = useDispatch();
    const actions = {
        logoutUser: () => dispatch(logoutUser()),
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        actions.logoutUser();
        setOpen(false);
        localStorage.clear();
        history.push("/login");
    };

    useKeyboardEvent('l' || 'L', () => {
        setOpen(true);
    })
    return (
        <>
            <span />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Do you want to quit the application ?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        If you confirm, you'll be logged out from the application.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleLogout} color="secondary" autoFocus>
                        Logout
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}