import React from 'react';
import { connect } from 'react-redux';
import { searchUserData } from '../actions'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

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
	dense: {
	  marginTop: 19,
	},
	menu: {
	  width: 200,
	},
	button: {
		margin: theme.spacing(1),
	  },
  }));


let searchButton = ({ searchUserData }) => {

	const classes = new useStyles()

	return (
		<div>
			<Button variant="contained" color="primary" className={classes.button} onClick={ () => searchUserData('dotslashbin') }>Search</Button>
		</div>
	)
}

const mapDispatchToProps = {
	searchUserData: searchUserData
}

searchButton = connect(null, mapDispatchToProps)(searchButton)

export default searchButton