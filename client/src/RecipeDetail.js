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
    if(this.props.index>0){
        this.props.callFromParent(this.props.index-1);

    }else{
        this.props.callFromParent(0);

    }

    
}

render(){
    return(
        <div className="details">

           <div className="recipeName"> {this.props.detail.name || "No Name for recipe"}
           
           {<button onClick={()=>{
this.props.editRecipe(this.props.detail);      
    }}>Edit Recipe</button>}

{<button className="delRecipe" onClick={this.deleteRecipe}>Delete Recipe</button>}
           </div>
        
<div className="Detail"> 
Ingredients: 
<ul>
{this.props.detail.detail.split("\\").map((data,index)=>{
    return <li>{data}</li>;
}) || "No Details for recipe"}
</ul>
</div>   
<div className="Procedure">
Procedure:
<ol>
{this.props.detail.procedure.split("\\").map((data,index)=>{
        return <li>{data}</li>;
    })}
</ol>
</div>

        </div>
    )
}
}

export default RecipeDetail;

// this.props.editRecipe(this.props.detail)