import React from 'react';
import './RecipeDetail.css';
class RecipeDetail extends React.Component{
    constructor(props){
        super(props);
        this.deleteRecipe=this.deleteRecipe.bind(this);
        this.state={
            detail:this.props.detail
        }
    }

componentDidMount(){
    console.log("Recipe detail mounted");
    console.log(this.props.detail);
}
componentWillReceiveProps(props){
    console.log("Props received in RecipeDetail");
console.log(props);
}
deleteRecipe(){
    console.log('Delete ');
    console.log(this.props.index);
    this.props.deleteRecipe(this.props.index);
    // this.props.editRecipe(this.props.detail);      
    this.props.callFromParent();
}

render(){
    let temp=[];
    temp=JSON.parse(localStorage.getItem("recipe")) || [];
    return(
        <div className="details">

           <div className="recipeName"> {this.props.detail.name || temp[temp.length-1].name  || "No Name for recipe"}
           
           {<button onClick={()=>{
this.props.editRecipe(this.props.detail);      
    }}>Edit Recipe</button>}

{<button className="delRecipe" onClick={this.deleteRecipe}>Delete Recipe</button>}
           </div>
        
<div className="Detail">    
{this.props.detail.detail  || temp[temp.length-1].detail || "No Details for recipe"}
</div>    
        </div>
    )
}
}

export default RecipeDetail;

// this.props.editRecipe(this.props.detail)