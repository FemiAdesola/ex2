import React from 'react';
import './App.css';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const theme = createMuiTheme();

const useStyles = makeStyles({
	customHeading: {
		fontSize: '200%',
		background: 'linear-gradient(5deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
	},
	formControl: {
	    margin: theme.spacing(3),
	},
});

function App() {
	const [headingColor, setHeadingColor] = React.useState("black");
	
	const handleChange = (event) => {
		setHeadingColor(event.target.value);
	}
	
	const styledClasses = useStyles();
	
	return (
		<div className="App">
			<div className={styledClasses.customHeading} style={{color: headingColor}}>
				Greetings
			</div>
			<FormControl component="fieldset" className={styledClasses.formControl}>
				<FormLabel component="legend">Colour</FormLabel>
				
				
				<RadioGroup name="color" value={headingColor} onChange={handleChange}>
					<FormControlLabel value="red" control={<Radio />} label="Red" />
					<FormControlLabel value="green" control={<Radio />} label="Green" />
					<FormControlLabel value="#800080" control={<Radio />} label="Purplish" />
				</RadioGroup>
			</FormControl>
		</div>
	);
}

export default App;
