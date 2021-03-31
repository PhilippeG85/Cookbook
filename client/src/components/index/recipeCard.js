import React from 'react';
import { Link } from "react-router-dom";

export default function Recipe({recipe}) {
    return (
        <Link to={`/${recipe.name}`} className='link-content'>
            <div className='recipe-card'>
                <h3>{recipe.name}</h3>
                <div className='time-content'>
                    <p>Level: {recipe.level}</p>
                    <p>Time: {recipe.time}</p>
                </div>
            </div>
        </Link>
    )
}