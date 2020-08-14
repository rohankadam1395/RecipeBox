import React from 'react';
import './App.css';
import NewRecipe from './NewRecipe';
import RecipeIndex from './RecipeIndex';
import RecipeDetail from './RecipeDetail';
import EditRecipe from './EditRecipe';
class App extends React.Component {
  constructor(props){
super(props);
this.state={
  addRecipeToggle:false,
  childData:"",
  recipe:[],
  detail:"No Recipes yet",
  editRecipe:""
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
        <RecipeIndex recipe={this.state.recipe} detail={(data)=>{
          console.log("In App");
          console.log(data);
this.setState({
detail:data
})
        }}/>
       <RecipeDetail detail={this.state.detail}  editRecipe={(data)=>{
         console.log("Got the recipe to edit");
         console.log(data);
         this.setState({
           editRecipe:data
         })
       }}/>

       <button onClick={this.addRecipeToggle}>Add Recipe</button>
{this.state.addRecipeToggle && <NewRecipe  callFromParent={this.fromParent}/>}

<EditRecipe recipeToEdit={this.state.editRecipe}/>
      </div>
    );
  }
  
 
}

export default App;
