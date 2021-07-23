import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';

function Ap() {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    

  
    const openDialog = (event) => {
		setDialogOpen(true);
    }
    const closeDialog = (event) => {
		setDialogOpen(false);
	}
	const menutab= (event) => {
        setAnchorEl(event.currentTarget);
    }
     
    const closingMenutab = () => {
        setAnchorEl(null);
    }

    return (
        <Paper style={{marginBottom:'100px'}}>
            <div >
           
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={menutab}>
                        <MenuIcon />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onclose={closingMenutab}>
                        <MenuItem onClick={openDialog}>File</MenuItem>
                            <MenuItem onClick={closeDialog}>Edit</MenuItem>
                            <MenuItem onClick={openDialog}>Help</MenuItem>
                        <MenuItem onClick={closeDialog}>Login</MenuItem>
                    </Menu>
                    <IconButton color="inherit" onClick={openDialog}>File</IconButton>
                        <IconButton color="inherit" onClick={closeDialog}>Edit</IconButton>
                        <IconButton color="inherit" onClick={openDialog}>Help</IconButton>
                    <IconButton color="inherit" onClick={closeDialog}>Login</IconButton>
                </Toolbar>
            </AppBar>
                
            <Dialog  open={dialogOpen}>
                <DialogTitle id="alert-dialog-slide-title">Answer</DialogTitle>
                <DialogContentText id="alert-dialog-slide-description"><Typography>
                    Blue and White
                </Typography></DialogContentText>
                <DialogActions>
                    <Button onClick={closeDialog} color="primary">
                    Disagree
                    </Button>
                    <Button onClick={closeDialog} color="primary">
                         Agree
                    </Button>
                    </DialogActions>
            </Dialog>
            <dialog open={dialogOpen}>
                <DialogTitle id="alert-dialog-slide-title">Question</DialogTitle>
                <DialogContentText id="alert-dialog-slide-description"> <Typography>
                    What is Finland flag's color?
                </Typography></DialogContentText>
            </dialog>

        </div>
        </Paper>
    )

    
   

}
export default Ap;



