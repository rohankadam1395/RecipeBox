import React from 'react';
import './RecipeDetail.css';
class RecipeDetail extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    return(
        <div className="details">
          {this.props.detail.detail || "Detailed Recipe"}
          <button onClick={()=>{
this.props.editRecipe(this.props.detail);      
    }}>Edit Recipe</button>
        </div>
    )
}
}

export default RecipeDetail;

// this.props.editRecipe(this.props.detail)