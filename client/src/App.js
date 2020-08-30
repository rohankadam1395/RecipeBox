import React from 'react';
import './App.css';
import NewRecipe from './NewRecipe';
import RecipeIndex from './RecipeIndex';
import RecipeDetail from './RecipeDetail';
import EditRecipe from './EditRecipe';
class App extends React.Component {
  constructor(props){
super(props);
var a=[];
  a=JSON.parse(localStorage.getItem("recipe"))||[];
  console.log(a);

  
  if(a.length===0){

  

    let obj={
        name:"Test name",
        detail:"Ingredient1\\Ingredient2\\Ingredient3",
        procedure:"Step1\\Step2\\Step3"
      };
      a.push(obj);
    localStorage.setItem("recipe",JSON.stringify(a));

  }
  
console.log("con1");
this.state={
  addRecipeToggle:false,
  childData:"",
  recipe:a,
  detail:a[0],
  editRecipe:a[0],
  editRecipeToggle:false,
  index:0,
  procedure:""
  // recipe:JSON.parse(localStorage.getItem("recipe")).split(",")
}

console.log("Con2");
console.log("Chek "+this.state.detail.detail)
this.addRecipeToggle=this.addRecipeToggle.bind(this);
this.fromParent=this.fromParent.bind(this);
this.toggle=this.toggle.bind(this);
  }


// componentWillMount(){
//   this.setState({

//   })
//   console.log("yet to mount");
//   var a=[];
//   a=JSON.parse(localStorage.getItem("recipe"))||[];
//   console.log(a);

  
//   if(a.length==0){

  

//     let obj={
//         name:"Trial name",
//         detail:"Trial detail"
//       };
//       a.push(obj);
//     localStorage.setItem("recipe",JSON.stringify(a));

//   }
  
// }


  componentDidMount(){
// console.log("Mounting");
//       // var recipe=[];
//       var a=[];
// a=JSON.parse(localStorage.getItem("recipe"));
// // let obj={
// //   name:"Trial name",
// //   detail:"Trial detail"
// // };

// // a.push(obj);

// // console.log(a);
// // localStorage.setItem("recipe",JSON.stringify(a));

//       if(a!=null){
//         // recipe=a;
//         // localStorage.setItem("recipe",JSON.stringify(recipe));
//         this.fromParent();
//       }
// this.fromParent();
  
}


// componentWillMount(){

// // if(this.state.detail===""){


// //   let obj=JSON.parse(localStorage.getItem("recipe"));
// //   this.setState({
// //     index:0,
// //     detail:obj[0],
// //     editRecipe:obj[0]
// //   });
// //   // this.state.index=0;
// //   // this.state.detail=obj[0];
// //   // this.state.editRecipe=obj[0];

// // }

// // this.state.index=0;
// console.log("Let seee");
// console.log(localStorage.getItem("recipe"));
// console.log(this.state.detail);
// console.log(this.state.index);
// console.log(this.state.editRecipe);
// console.log("Let seee");



// }
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

  fromParent=(index)=>{
// console.log(dataFromChild);
var a=[];
a=JSON.parse(localStorage.getItem("recipe"))|| [];
//had to initiale an empty array and then assign the JSON.parse so as that it converts to an array
console.log(a);
this.setState({
  // childData:dataFromChild,
  index:index,
recipe:a,
detail:a[index],


})
  }

  deleteRecipe(index){
console.log("In parent "+index);
let recipe=[];
recipe=JSON.parse(localStorage.getItem("recipe")||[]);
if(recipe.length===1){
window.alert("One item needs to be present");
}else{
  recipe.splice(index,1);
  localStorage.setItem("recipe",JSON.stringify(recipe));
}

//  this.fromParent();


  }
  render(){
    return (
      <div className="App">
        <RecipeIndex recipe={this.state.recipe} detail={(data,index)=>{
          console.log("In App");
          console.log(data);
          console.log("=====");
this.setState({
detail:data,
index:index,
editRecipe:data
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

{this.state.addRecipeToggle && <NewRecipe  callFromParent={this.fromParent}  toggle={this.toggle}/>}

{this.state.editRecipeToggle && <EditRecipe callFromParent={this.fromParent} recipeToEdit={this.state.editRecipe} index={this.state.index} toggle={this.toggle}/>}
     
<button className="addRecipe" onClick={this.addRecipeToggle}>Add Recipe</button>

      </div>
    );
  }
  
 
}

export default App;
