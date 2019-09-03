import React from 'react'
import { connect } from 'react-redux'

/** Material  */
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import Link from '@material-ui/core/Link'


const useStyles = makeStyles({
	card: {
		minWidth: 275,
		marginBottom: '20px'
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	link: {
		margin: '5px'
	}
  });

/**
 * Returns a component that lists repositories
 * @param {repos, loading} param0 
 */
let RepoList = ({repos, loading}) => {

	const classes = new useStyles()

	return (
		repos ?
		<div>
			{repos.map((repo, index) => 
				<Card className={classes.card} key={index}>
					<CardContent>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
							Repo name
						</Typography>
						<Typography variant="h5" component="h2">
							{repo.name}
						</Typography>
						<Typography variant="body2" component="p">
							{repo.description}
						</Typography>
					</CardContent>
					<CardActions>
						<Link href={repo.html_url}>go to repo</Link>
					</CardActions>
				</Card>
			)}
		</div> :
		loading? 'loading ...' : <p>There are no records ..</p>
	)
}

/**
 * This maps the state into the components props
 * @param {state} state 
 */
const mapStateToProps = (state) => ({
	repos: state.repos,
	loading: state.loading
})

RepoList = connect(mapStateToProps,null)(RepoList)

export default RepoList