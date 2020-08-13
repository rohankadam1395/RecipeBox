import React from 'react';
import './App.css';
import NewRecipe from './NewRecipe';
class App extends React.Component {
  constructor(props){
super(props);
this.state={
  addRecipeToggle:false,
  childData:"",
  recipe:[]
  // recipe:JSON.parse(localStorage.getItem("recipe")).split(",")
}
this.addRecipeToggle=this.addRecipeToggle.bind(this);
this.fromParent=this.fromParent.bind(this);

  }




  componentDidMount(){

      // var recipe=[];
      var a=[];
a=JSON.parse(localStorage.getItem("recipe"));
      if(a!=null){
        // recipe=a;
        // localStorage.setItem("recipe",JSON.stringify(recipe));
        this.fromParent();
      }
  
}

  addRecipeToggle(){
    this.setState({
      addRecipeToggle:!this.state.addRecipeToggle

    })
  }

  fromParent=(dataFromChild)=>{
// console.log(dataFromChild);
var a=[];
a=JSON.parse(localStorage.getItem("recipe"));
//had to initiale an empty array and then assign the JSON.parse so as that it converts to an array
console.log(a);
this.setState({
  childData:dataFromChild,
recipe:a
})
  }
  render(){
    return (
      <div className="App">
       <div className="index">Index: 
       <ul>

       </ul>
       {this.state.recipe.map((data,index)=>{
         return <li key={index}>{data.name}</li>;
       })}
       </div>
       {/* <div className="details">details  {this.state.childData.recipeDetails && this.state.childData.recipeDetails.value}</div> */}

       <button onClick={this.addRecipeToggle}>Add Recipe</button>
{this.state.addRecipeToggle && <NewRecipe  callFromParent={this.fromParent}/>}
      </div>
    );
  }
 
}

export default App;
