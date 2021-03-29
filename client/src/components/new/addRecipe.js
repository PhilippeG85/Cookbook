import React from 'react';
import NewRecipe from './newRecipe';

function AddRecipe() {
    return (
        <div className='add-recipe-content'>
            <h1 className='text-center'>Add a new recipe to your cookbook</h1>
            <div className='instructions-and-form'>
                <div>
                    <h3>Instructions: </h3>
                    <p>First, you need to add all the ingredient for your recipe</p>
                    <p>Second, specifie the time and level to complete the recipe</p>
                    <p>Third, we need to know what this recipe mean for you</p>
                    <p>And last but not least, how do you make this bloody recipe</p>
                </div>
                <div className='flex-form'>
                    <NewRecipe />
                </div>
            </div>
        </div>
    );
}

export default AddRecipe;