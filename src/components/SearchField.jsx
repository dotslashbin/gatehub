import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchButton from './SearchButton'

const useStyles = makeStyles(theme => ({
	container: {
	  display: 'flex',
	  flexWrap: 'wrap',
	},
	textField: {
	  marginLeft: theme.spacing(1),
	  marginRight: theme.spacing(1),
	  width: 200,
	},
  }));

/**
 * Creates a component that is basically a text field. 
 * It saves all its input into a state variable to be passed on to the child component SearchButton
 */
export default function SearchField() {
	const classes = useStyles()

	const [values, setValues] = useState({
		search_string: ''
	})

	const handleChange = search_string => event => {
		setValues({ ...values, [search_string]: event.target.value });
	};

	return (
		<form className={classes.container} autoComplete="off" noValidate>
			<TextField 
				id="standard-name"
				label="Enter user ID here"
				className={classes.textField}
				value={values.search_string}
				onChange={handleChange('search_string')}
				margin="normal"
			/>
			<SearchButton searchString={values.search_string} />
		</form>
	)
}
