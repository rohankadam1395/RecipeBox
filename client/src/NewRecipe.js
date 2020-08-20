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
// this.props.callFromParent(event.target.elements);
this.props.callFromParent();

this.props.toggle();
     event.preventDefault();
}

render(){
    return(
        <div className="newRecipeModal">
          <div className="addRecipeHeader"> <p className="AddTitle">Add Recipe</p> <button className="close" onClick={this.props.toggle}>Close</button> 
</div>
            <form className="recipeInput" onSubmit={this.submit}>
            <label>Recipe Name: <input id="recipeName" type="text"  /></label>

<label>Details: <input id="recipeDetails" type="text" /></label>
<button type="submit" value="Submit">Submit</button>
            </form>


        </div>
    );
}
}

export default NewRecipe;