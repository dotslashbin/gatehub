import React from 'react';
import { connect } from 'react-redux';
import { searchUserData } from '../actions'

let searchButton = ({ searchUserData }) => (
	<button onClick={ () => searchUserData('freeCodeCamp') }>Search</button>
)

const mapDispatchToProps = {
	searchUserData: searchUserData
}

searchButton = connect(null, mapDispatchToProps)(searchButton)

export default searchButton