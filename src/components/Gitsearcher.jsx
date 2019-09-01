import React, { useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { searchUserData, triggerAction } from '../actions'

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
	button: {
		margin: theme.spacing(1),
	},
}))

const GitSearcher = () => {

	const classes = useStyles()

	const [state, setstate] = useState({ username: '' })

	return (
		<div>
			<div>
				<h3>GIT USER: {state.username}</h3>
			</div>
			<form className={classes.container} noValidate autoComplete="off">
				<TextField className={classes.textField} id="git-searcher" label="Enter username here" margin="normal" name="search_string"/>
				<Button variant="contained" color="primary" className={classes.button} 	onClick={() => { searchUserData('freeCodeCamp', 'repos'); setstate({username: 'freeCodeCamp' })} }>
					Search&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
				</Button>
				<Button variant="contained" color="primary" className={classes.button} 	onClick={() => triggerAction('testindasfdajsfj') }>
					TESTING&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
				</Button>
			</form>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		triggerAction: something => dispatch(triggerAction(something))
	}
}

const Form = connect(null, mapDispatchToProps)(GitSearcher)

export default Form