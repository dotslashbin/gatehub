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

let RepoList = ({repos}) => {

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
		<p>Click search to show repos</p>
	)
}

const mapStateToProps = (state) => ({
	repos: state.repos
})

RepoList = connect(mapStateToProps,null)(RepoList)

export default RepoList