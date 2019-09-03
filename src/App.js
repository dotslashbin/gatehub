import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import * as serviceWorker from './serviceWorker'

/** COMPONENTS */
import RepoList from './components/Repolister'
import SearchField from './components/SearchField'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		padding: '100px'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	note: {
		fontStyle: 'italic'
	}
}))

function App() {
	const classes = useStyles()
	return (
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<p>Enter the git username on the search field below ( ex: freeCodeCamp ).</p>
							<p className={classes.note}>
								Note: This app has limitations as it was only used for demo. 
								<br />
								Some of the git users may not have organizations, so there would be no results.
								<br />
								Most importantly, please enter a valid git username, as there are no validations implemented. Thank you - Joshua
							</p>
							<SearchField />
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper className={classes.paper}>
							<h2>List of repositories</h2>
							<RepoList />
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper className={classes.paper}>
							<h2>List of groups</h2>
						</Paper>
					</Grid>
				</Grid>
			</div>
	)
}

serviceWorker.unregister()


export default App
