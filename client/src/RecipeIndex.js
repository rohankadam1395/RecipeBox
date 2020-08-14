import React from 'react';
import './RecipeIndex.css';
import RecipeDetail from './RecipeDetail';
class RecipeIndex extends React.Component{
    constructor(props){
        super(props);
        this.details=this.details.bind(this);
        this.state={
            // detail:"Initial"
        }
    }


    details(index,data){
        console.log("clciked "+index);
        this.props.detail(data);
// this.setState({
// detail:data
// })
    }
    render(){
        return(<div className="index">
        <ul>
 
        {this.props.recipe.map((data,index)=>{
          return <li key={index} onClick={()=>this.details(index,data)}>{data.name}</li>;
        })}
               </ul>

{/* <RecipeDetail detail={this.state.detail}/> */}
   

 
        </div>)
    }
}

export default RecipeIndex;