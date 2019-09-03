import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import GitSearcher from './Gitsearcher'

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
			<GitSearcher searchString={values.search_string} />
		</form>
	)
}
