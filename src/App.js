import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import * as serviceWorker from './serviceWorker'

/** COMPONENTS */
import RepoList from './components/Repolister'
import SearchField from './components/searchField'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}))

function App() {
	const classes = useStyles()
	return (
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<p>Search for a Git user: (Example: 'freeCodeCamp')</p>
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
