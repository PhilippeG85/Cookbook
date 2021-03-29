import React from 'react';
import axios from "axios";

export default function Recipe({recipe}) {
    const handleClick = () => {
        axios.delete(`/recipe/delete/${recipe._id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>{recipe.name}</h1>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}