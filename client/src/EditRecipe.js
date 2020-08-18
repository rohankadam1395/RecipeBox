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
                Edit Recipe : {this.props.recipeToEdit.detail}
{this.props.index}
                <form className="recipeInput" onSubmit={this.submit}>
            <label>Recipe Name: <input id="recipeName" type="text"  defaultValue={this.props.recipeToEdit.name} onChange={this.handleChange} /></label>
            <br/>

<label>Details: <input id="recipeDetails" type="text" defaultValue={this.props.recipeToEdit.detail}/></label>
<br/>
<button type="submit" value="Submit">Submit</button>

            </form>
            <button onClick={this.props.toggle}>Close</button>

            </div>
        )
    }
}

export default EditRecipe;