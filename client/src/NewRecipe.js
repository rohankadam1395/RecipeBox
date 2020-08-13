import React from 'react';
import './NewRecipe.css';
class NewRecipe extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.submit=this.submit.bind(this);
      
    }

    
  submit(event){
    // console.log(event.target.elements.recipeName.value);
    var recipe=[];

    recipe=JSON.parse(localStorage.getItem("recipe")) || [];

    let obj={
        name:event.target.elements.recipeName.value,
        detail:event.target.elements.recipeDetails.value
    }
    recipe.push(obj);
localStorage.setItem("recipe",JSON.stringify(recipe));
// localStorage.setItem("recipeDetails",event.target.elements.recipeDetails.value);
this.props.callFromParent(event.target.elements);
     event.preventDefault();
}

render(){
    return(
        <div >
            <h1>new Recipe</h1>
            <form className="recipeInput" onSubmit={this.submit}>
            <label>Recipe Name: <input id="recipeName" type="text"  /></label>
            <br/>

<label>Details: <input id="recipeDetails" type="text" /></label>
<br/>
<button type="submit" value="Submit">Submit</button>
            </form>


        </div>
    );
}
}

export default NewRecipe;