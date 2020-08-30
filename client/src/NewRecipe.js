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
        detail:event.target.elements.recipeDetails.value,
        procedure:event.target.elements.recipeProcedure.value

    }
    recipe.push(obj);
localStorage.setItem("recipe",JSON.stringify(recipe));
// localStorage.setItem("recipeDetails",event.target.elements.recipeDetails.value);
// this.props.callFromParent(event.target.elements);
this.props.callFromParent(recipe.length-1);

this.props.toggle();
     event.preventDefault();
}

render(){
    return(
        <div className="newRecipeModal">
          <div className="addRecipeHeader">Add Recipe <button className="close" onClick={this.props.toggle}>Close</button> 
</div>
<div className="formContainer">

            <form className="newRecipeForm" onSubmit={this.submit}>
                <p>

               
            <label htmlFor="recipeName">Recipe Name: </label>
            <input id="recipeName" type="text"  placeholder="Enter Recipe Name"/>
            </p>
            <p>

           
<label htmlFor="recipeDetails">Ingredients: </label>
<textarea id="recipeDetails" type="text" placeholder="Enter ingredients separated by \" rows="3"/>

</p>
<p>
    <label htmlFor="recipeProcedure">Procedure: </label>
    <textarea id="recipeProcedure" type="text" placeholder="Enter steps to prepare separated by \" rows="3"/>
</p>
<div className="submitButton">
<button type="submit" value="Submit" className="newRecipeSubmit">Submit</button>

</div>

    
            </form>
            </div>



        </div>
    );
}
}

export default NewRecipe;