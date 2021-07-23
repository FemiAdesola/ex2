import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';

function A() {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [text, setText] = React.useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const[textInput, setTextInput]=React.useState("")
    
    const openDialog = (event) => {
        setTextInput("");
		setDialogOpen(true);
    }
    const closeDialog = (event) => {
		setDialogOpen(false);
	}
	const menutab= (event) => {
        setAnchorEl(event.currentTarget);
    }
    const inputText = (event) => {
        setTextInput(event.target.value);
    }
    const acceptDialog = (event) => {
        setText(textInput);
        closeDialog();
    }
  const editDialog = (event) => {
        setText(textInput);
        closeDialog();
    }  
   

    return (
        <Paper>
            <div >
           
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={menutab}>
                        <MenuIcon />
                    </IconButton>
                    
                    <IconButton color="inherit" onClick={openDialog}>File</IconButton>
                        <IconButton color="inherit" onClick={closeDialog}>Edit</IconButton>
                        <IconButton color="inherit" onClick={openDialog}>Help</IconButton>
                    <IconButton color="inherit" onClick={closeDialog}>Login</IconButton>
                </Toolbar>
            </AppBar>
                <Box style={{backgroundColor: 'green'}} display="flex" justifyContent="center"  bgcolor="background.paper">
                    <FormControl style={{display:"block", padding: 30, backgroundColor: 'gray', }}>
                    <FormLabel component="legend" style={{ justifyContent:"center" }}>{text}</FormLabel>
                    <FormControlLabel  control={<Radio  onClick={openDialog}>Click to see the Question</Radio>}>{text}</FormControlLabel>Click to see the Question
                </FormControl>
                </Box>
                <Dialog  onclose={closeDialog} open={dialogOpen}>
                    <DialogTitle id="alert-dialog-slide-title">Question</DialogTitle>
                <DialogContentText id="alert-dialog-slide-description"> <Typography>
                    What is Finland flag's color?
                </Typography></DialogContentText>
                    
                    <DialogTitle style={{ background: 'blue' }} id="alert-dialog-slide-title">Type Your Answer Below</DialogTitle>
                    <TextField color="inherit" id={"name"} className={editDialog} value={textInput}onChange={inputText}></TextField>
                
                    <DialogActions>
                    <Button onClick={closeDialog} color="primary">
                    Unknow
                    </Button>
                    <Button  onClick={acceptDialog} color="primary">
                        My Answer
                    </Button>
                    </DialogActions>
                </Dialog>    

        </div>
        </Paper>
    )

    
   

}
export default A;


