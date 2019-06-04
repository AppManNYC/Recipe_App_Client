import React from 'react'
import Recipes from './Recipes.js'

function Main(props) {
	const { recipes, handleDelete, handleUpdate } = props
	return (
		<main>
        <Recipes
	        recipes={recipes}
	        handleDelete={handleDelete}
	        handleUpdate={handleUpdate}
        />
      </main>
	)
}

export default Main