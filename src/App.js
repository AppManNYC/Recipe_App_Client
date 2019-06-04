import React from 'react'
import Aside from './components/Aside.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Nav from './components/Nav.js'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            recipes : []
        }
        this.getRecipes = this.getRecipes.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    componentDidMount(){
        this.getRecipes()
    }
    getRecipes () {
        fetch('/recipes')
            .then(response => response.json())
            .then(json => this.setState({recipes: json}))
            .catch(error => console.error(error))
    }
    handleAdd (event, formInputs) {
        fetch('/recipes', {
            body: JSON.stringify(formInputs),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdRecipe => {
            return createdRecipe.json()
        }).then(jsonedRecipe => {
            this.setState({
                recipes: [jsonedRecipe, ...this.state.recipes]
            })
        }).catch(error => console.error(error))
    }
    handleDelete (deletedRecipe) {
        fetch(`/recipes/${deletedRecipe.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
            .then(json => {
                this.setState(state => {
                    const recipes = state.recipes.filter((recipe, index) => recipe.id !== deletedRecipe.id)
                    return {
                        recipes,
                    }
                })
            })
            .catch(error => console.log(error))
    }
    handleUpdate (event, formInputs) {
        event.preventDefault()
        fetch(`/recipes/${formInputs.id}`, {
            body: JSON.stringify(formInputs),
            method: 'Put',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
            .then(updatedRecipe => {
                this.getRecipes()
            })
            .catch(error => console.error(error))
    }
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <Aside handleSubmit={this.handleAdd}/>
                    <Main
                        recipes={this.state.recipes}
                        handleDelete={this.handleDelete}
                        handleUpdate={this.handleUpdate}
                    />
                    <Nav />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App
