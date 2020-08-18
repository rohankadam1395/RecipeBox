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
  editRecipe:"",
  editRecipeToggle:false,
  index:0
  // recipe:JSON.parse(localStorage.getItem("recipe")).split(",")
}
this.addRecipeToggle=this.addRecipeToggle.bind(this);
this.fromParent=this.fromParent.bind(this);
this.toggle=this.toggle.bind(this);
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
      addRecipeToggle:true

    })
  }

  toggle(){
    console.log("toggle called")
this.setState({
  editRecipeToggle:false,
  addRecipeToggle:false
})
  }

  fromParent=()=>{
// console.log(dataFromChild);
var a=[];
a=JSON.parse(localStorage.getItem("recipe"));
//had to initiale an empty array and then assign the JSON.parse so as that it converts to an array
console.log(a);
this.setState({
  // childData:dataFromChild,
recipe:a
})
  }

  deleteRecipe(index){
console.log("In parent "+index);
let recipe=[];
recipe=JSON.parse(localStorage.getItem("recipe")||[]);

recipe.splice(index,index);
localStorage.setItem("recipe",JSON.stringify(recipe));
//  this.fromParent();


  }
  render(){
    return (
      <div className="App">
        <RecipeIndex recipe={this.state.recipe} detail={(data,index)=>{
          console.log("In App");
          console.log(data);
this.setState({
detail:data,
index:index
})
        }}/>
       <RecipeDetail callFromParent={this.fromParent} deleteRecipe={this.deleteRecipe} index={this.state.index} detail={this.state.detail}  editRecipe={(data)=>{
         console.log("Got the recipe to edit");
         console.log(data);
         this.setState({
          editRecipeToggle:true,
           editRecipe:data
         })
       }}/>

       <button onClick={this.addRecipeToggle}>Add Recipe</button>
{this.state.addRecipeToggle && <NewRecipe  callFromParent={this.fromParent}  toggle={this.toggle}/>}

{this.state.editRecipeToggle && <EditRecipe callFromParent={this.fromParent} recipeToEdit={this.state.editRecipe} index={this.state.index} toggle={this.toggle}/>}
      </div>
    );
  }
  
 
}

export default App;
