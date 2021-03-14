import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ConfirmLogout() {
    const [open, setOpen] = React.useState(false);
    let history = useHistory();

    const handleClickOpen = (event) => {
        if (event.key === 'l' || 'L') {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        setOpen(false);
        history.push("/login");
    };

    return (
        <div>
            <input type="text" onKeyPress={handleClickOpen} />
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
        </div>
    );
}
