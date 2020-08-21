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
let recipe=[];


recipe=JSON.parse(localStorage.getItem("recipe")||[]);

let obj=recipe[this.props.index];
obj.name=event.target.elements.recipeName.value;
obj.detail=event.target.elements.recipeDetails.value;
recipe[this.props.index]=obj;
localStorage.setItem("recipe",JSON.stringify(recipe));
console.log("Update this");
console.log(obj);
// this.props.callFromParent(event.target.elements);
this.props.callFromParent();

this.props.toggle();
event.preventDefault();
}

    render(){
        return(
            <div className="editRecipeModal">
                <div className="editRecipeHeader">
                Edit Recipe : {this.props.recipeToEdit.detail}
            <button onClick={this.props.toggle}>Close</button>
                </div>
                
                <form className="editForm" onSubmit={this.submit}>
<p>
            <label for="recipeName">Recipe Name: </label>
            <input id="recipeName" type="text"  defaultValue={this.props.recipeToEdit.name} onChange={this.handleChange} />
            </p>
            <p>
<label for="recipeDetails">Details: </label>
<input id="recipeDetails" type="text" defaultValue={this.props.recipeToEdit.detail}/>
</p>
<button type="submit" value="Submit">Submit</button>

            </form>

            </div>
        )
    }
}

export default EditRecipe;