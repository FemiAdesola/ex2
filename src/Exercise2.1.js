import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green, purple, red, blue } from "@material-ui/core/colors";
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const useStyles = makeStyles(theme => ({
	title: {
		flexGrow: 1,
		fontStyle: 'italic'
	},
}));



function App() {
	const [weight, setFontWeight] = React.useState({ id:'greeting'});
	const [headingColor, setHeadingColor] = React.useState("black");
	
	const handleChange = (event) => {
		setHeadingColor(event.target.value);
	}

	const weightChange = (event) => {
		setFontWeight(event.target.value);
	}
	const styledClasses = useStyles({});

	
	return (
		<Paper style={{marginBottom:'50px'}} variant="outlined"  elevation={3} className="App" >
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h4" className={styledClasses.title}>
						Colors and font family bar
					</Typography>
				</Toolbar>
			</AppBar>
			
			<FormControl component="fieldset" className={styledClasses.formControl}>
				<FormLabel component="legend"><h2>Font weight</h2></FormLabel>
				<RadioGroup >
					<FormControlLabel  onChange={weightChange} value="300" control={<Radio/>} label="Normal" />
					<FormControlLabel  onChange={weightChange} value="500" control={<Radio />} label="Bold" />
					<FormControlLabel onChange={weightChange} value="700" control={<Radio />} label="Bolder" />
			
				</RadioGroup>
				<RadioGroup name="color" value={headingColor} onChange={handleChange}>
					<FormControlLabel value="red" control={<Radio />} label="Red" />
					<FormControlLabel value="green" control={<Radio />} label="Green" />
					<FormControlLabel value="#800080" control={<Radio />} label="Purplish" />
				</RadioGroup>
				
			</FormControl>
			<div style={{color: headingColor}}>
<Typography  variant="h1" style={{ fontWeight: weight}} className="greeting">
				{'Greetings!'}
			</Typography>

			</div>
		
				
		</Paper>
	);
}
export default App;
