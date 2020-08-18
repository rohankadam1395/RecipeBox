import React from 'react';
import './RecipeDetail.css';
class RecipeDetail extends React.Component{
    constructor(props){
        super(props);
        this.deleteRecipe=this.deleteRecipe.bind(this);
    }

deleteRecipe(){
    this.props.deleteRecipe(this.props.index);
    // this.props.editRecipe(this.props.detail);      

    this.props.callFromParent();
}

render(){
    return(
        <div className="details">
          {this.props.detail.detail || "Detailed Recipe"}
         {this.props.detail.detail && <button onClick={()=>{
this.props.editRecipe(this.props.detail);      
    }}>Edit Recipe</button>}

{this.props.detail.detail &&  <button onClick={this.deleteRecipe}>Delete Recipe</button>}
   
        </div>
    )
}
}

export default RecipeDetail;

// this.props.editRecipe(this.props.detail)