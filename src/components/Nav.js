import React from 'react'

function Nav(props) {
	return (
		<nav>
            <h1>Recipe Links:</h1>
			<ul>
				<li><p><a href="https://www.allrecipes.com/">AllRecipes</a></p></li>
				<li><p><a href="https://www.epicurious.com/">Epicurious</a></p></li>
				<li><p><a href="https://www.geniuskitchen.com/">Genius Kitchen</a></p></li>
				<li><p><a href="https://www.seriouseats.com/">Serious Eats</a></p></li>
				<li><p><a href="https://www.foodnetwork.com/">Food Network</a></p></li>
			</ul>
        </nav>
	)
}

export default Nav