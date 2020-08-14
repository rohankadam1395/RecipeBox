import React from 'react';
class EditRecipe extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                Edit Recipe : {this.props.recipeToEdit.detail}
            </div>
        )
    }
}

export default EditRecipe;