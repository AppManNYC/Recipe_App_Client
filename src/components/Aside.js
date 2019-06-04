import React from 'react'
import Form from './Form.js'

function Aside(props) {
	return (
		<aside>
			<h1>Add A Recipe:</h1>
			<Form handleSubmit={props.handleSubmit}/>
		</aside>
	)
}

export default Aside