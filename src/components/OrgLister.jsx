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
 * Creates a compoent that lists organizations 
 * @param {orgs, loading} params
 */
let OrgList = ({orgs, loading}) => {

	const classes = new useStyles()

	return (
		orgs ?
		<div>
			{orgs.map((org, index) => 
				<Card className={classes.card} key={index}>
					<CardContent>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
							Description
						</Typography>
						<Typography variant="h5" component="h2">
							{org.description}
						</Typography>
					</CardContent>
					<CardActions>
						<Link href={org.repos_url}>go to org repos</Link>
					</CardActions>
				</Card>
			)}
		</div> :
		loading? 'loading ...' : <p>There are no records ..</p>
	)
}

/**
 * Maps the current state to the components props
 * @param {state} state 
 */
const mapStateToProps = (state) => ({
	orgs: state.orgs,
	loading: state.loading
})

OrgList = connect(mapStateToProps,null)(OrgList)

export default OrgList