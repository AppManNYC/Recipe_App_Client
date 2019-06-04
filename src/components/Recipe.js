import React from 'react';
import Form from './Form.js';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
    this.toggleForm = this.toggleForm.bind(this);
  }
  toggleForm() {
    this.setState({
      formVisible: !this.state.formVisible
    });
  }
  render() {
    const { recipe, handleDelete, handleUpdate } = this.props;
    return (
      <>
        {this.state.formVisible ? (
          <Form
            recipe={recipe}
            handleSubmit={handleUpdate}
            toggleForm={this.toggleForm}
          />
        ) : (
          <div className='recipe'>
            <h2> {recipe.title} </h2>
            <img className='center' src={recipe.image} alt={'meaningful text'} />
            <p> ( {recipe.category} ) </p>
            <p> Ingredients: {recipe.ingredients} </p>
            <p>Time: {recipe.time} </p>

            <button onClick={() => handleDelete(recipe)}>X</button>
            <button onClick={this.toggleForm}>Edit this recipe</button>
          </div>
        )}
      </>
    );
  }
}

export default Recipe;
