import React from 'react'
import Recipe from './Recipe.js'

function Recipes(props) {
	const { recipes, handleDelete, handleUpdate } = props
	return (
		<div>
        {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}
                                       handleDelete={handleDelete}
                                       handleUpdate={handleUpdate}
        />)}
      </div>
	)
}

export default Recipes