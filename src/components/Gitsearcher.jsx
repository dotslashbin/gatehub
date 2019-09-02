import React from 'react';
import { connect } from 'react-redux';
import { triggerAction } from '../actions'

let testButton = ({ triggerAction }) => (
	<button onClick={ triggerAction }>Click this</button>
)

const mapDispatchToProps = {
	triggerAction: triggerAction
}

testButton = connect(null, mapDispatchToProps)(testButton)

export default testButton