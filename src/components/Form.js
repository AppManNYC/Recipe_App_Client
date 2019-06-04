import React from 'react'
import Input from './Input.js'

class Form extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			title:'',
			category:'',
			image:'',
			ingredients:'',
			time:''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	componentWillMount (){
		if(this.props.recipe){
			this.setState ({
				title: this.props.recipe.title,
				category: this.props.recipe.category,
				image: this.props.recipe.image,
				ingredients: this.props.recipe.ingredients,
				time: this.props.recipe.time,
				id: this.props.recipe.id
			})
		}
	}
	handleChange (event) {
		this.setState({[event.target.id] : event.target.value})
	}
	handleSubmit (event){
		event.preventDefault()
		this.props.handleSubmit(
			event,
			{
				title: this.state.title,
				category: this.state.category,
				image: this.state.image,
				ingredients: this.state.ingredients,
				time: this.state.time,
				id: this.state.id
			}
		)
		this.setState({
			title: '',
			category:'',
			image: '',
			ingredients:'',
			time:''
		})
		if(this.props.recipe) {
			this.props.toggleForm()
		}
	}
	render () {
		return (
			<form onSubmit={this.handleSubmit}>
        <Input
	        handleChange={this.handleChange}
	        name={'title'}
	        placeholder={'Recipe Title'}
	        type={'text'}
	        value={this.state.title}
	        id={'title'}
        />
         <Input
	         handleChange={this.handleChange}
	         name={'category'}
	         placeholder={'Recipe Category'}
	         type={'text'}
	         value={this.state.category}
	         id={'category'}
         />
        <Input
	        handleChange={this.handleChange}
	        name={'image'}
	        placeholder={'Recipe Image'}
	        type={'text'}
	        value={this.state.image}
	        id={'image'}
        />
        <Input
	        handleChange={this.handleChange}
	        name={'ingredients'}
	        placeholder={'Recipe Ingredients'}
	        type={'text'}
	        value={this.state.ingredients}
	        id={'ingredients'}
        />
        <Input
	        handleChange={this.handleChange}
	        name={'time'}
	        placeholder={'Recipe Time'}
	        type={'text'}
	        value={this.state.time}
	        id={'time'}
        />
       <input type='submit'value={this.props.recipe ? "update this recipe": "add a recipe"}/>
      </form>
		)
	}
}

export default Form