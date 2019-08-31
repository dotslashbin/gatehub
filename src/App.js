import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

/** COMPONENTS */
import GitSearcher from './components/Gitsearcher'


const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	// textField: {
	// 	marginLeft: theme.spacing(1),
	// 	marginRight: theme.spacing(1),
	// 	width: 200,
	// }, 
	// container: {
	// 	display: 'flex', 
	// 	flexWrap: true
	// }
}))

function App() {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<GitSearcher />
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>xs=12 sm=6</Paper>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>xs=12 sm=6</Paper>
				</Grid>
			</Grid>
		</div>
	)
}

export default App
