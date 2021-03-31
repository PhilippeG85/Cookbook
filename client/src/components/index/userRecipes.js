import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../logInContext';
import axios from 'axios';
import Recipe from './recipeCard';

export default function UserRecipes() {
    const [recipes, setRecipes] = useState(null);
    const userName = useContext(UserContext);

    useEffect(() => {
        if (userName) {
            axios.get(`/recipe/${userName.email}`)
                .then(res => setRecipes(res.data))
                .catch(err => console.log(err))
        }
    }, [userName]);

    const allRecipes = () => {
        if (recipes !== null) {
            const allRecipes = recipes.data.map((recipe, i) => {
                return (<Recipe recipe={recipe} key={i} />)
            })
            return allRecipes
        }
        return (<h1>you have no recipe</h1>)
    }

    return (
        <div>
            <h1 className='text-center'>
                Vos Recettes
            </h1>
            <div className='all-recipes-container'>
                {allRecipes()}
            </div>
        </div>
    );
}