import React from 'react';
import './EditRecipe.css';
class EditRecipe extends React.Component{
    constructor(props){
        super(props);
        this.state={
            recipe:""
        }

        this.handleChange=this.handleChange.bind(this);
        this.submit=this.submit.bind(this);
    }

    componentDidMount(){
        console.log("In Edit Recipe");
        console.log(this.props);
        console.log(this.props.index);
        console.log(this.state);
    }

handleChange(event){
    this.setState({
        recipe:event.target.value
    })
}
// componentWillReceiveProps(props){
    
//     // this.setState({
//     //     recipe:props.recipeToEdit
//     //         })
// }
// componentDidMount(){
// }

submit(event){
console.log(event.target.elements.recipeName);
let recipe=[];


recipe=JSON.parse(localStorage.getItem("recipe")||[]);
console.log(recipe);
let obj=recipe[this.props.index];
console.log(obj);
obj.name=event.target.elements.recipeName.value;
obj.detail=event.target.elements.recipeDetails.value;
obj.procedure=event.target.elements.recipeProcedure.value;
recipe[this.props.index]=obj;
localStorage.setItem("recipe",JSON.stringify(recipe));
console.log("Update this");
console.log(obj);
// this.props.callFromParent(event.target.elements);
this.props.callFromParent(this.props.index);

this.props.toggle();

event.preventDefault();

}

    render(){
        return(
            <div className="editRecipeModal">
                <div className="editRecipeHeader">
                Edit Recipe : {this.props.recipeToEdit.name}
            <button onClick={this.props.toggle}>Close</button>
                </div>
              <div className="editFormContainer">
                <form className="editForm" onSubmit={this.submit}>
<p>
            <label for="recipeName">Recipe Name: </label>
            <input id="recipeName" type="text"  defaultValue={this.props.recipeToEdit.name}  />
            </p>
            <p>
<label for="recipeDetails">Ingredients: </label>
<textarea id="recipeDetails" type="text" defaultValue={this.props.recipeToEdit.detail}/>
</p>

<p>
    <label for="recipeProcedure">Procedure: </label>
    <textarea id="recipeProcedure" type="text" defaultValue={this.props.recipeToEdit.procedure}/>
</p>
<div  className="submitButton">
<button  type="submit" value="Submit">Submit</button>

</div>

            </form>
            </div>  

            </div>
        )
    }
}

export default EditRecipe;