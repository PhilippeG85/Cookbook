import React, { useState } from 'react';

function AddRecipe() {
    const [ingredient, setIngredients] = useState('');
    const [time, setTime] = useState('');
    const [level, setLevel] = useState('');
    const [steps, setSteps] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'ingredient') {
            setIngredients(e.target.value);
        } else if (e.target.name === 'time') {
            setTime(e.target.value);
        } else if (e.target.name === 'level') {
            setLevel(e.target.value);
        } else {
            setSteps(e.target.value);
        }
    }

    return (
        <form>
            <input type='text' placeholder='Ingredients' value={ingredient} onChange={handleChange} name='ingredient' />
            <input type='text' placeholder='Time' value={time} onChange={handleChange} name='time' />
            <input type='text' placeholder='Level' value={level} onChange={handleChange} name='level' />
            <input type='text' placeholder='Steps' value={steps} onChange={handleChange} name='steps' />
            <input type='submit' placeholder='Add this recipe' />
        </form>
    );
}

export default AddRecipe;