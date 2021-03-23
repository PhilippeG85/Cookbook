import React, { useContext, useState } from "react";
import axios from 'axios';
import { UserContext } from '../logInContext';

export default function NewRecipe() {
    const user = useContext(UserContext);
    const [ingredient, setIngredient] = useState('');
    const [time, setTime] = useState('');
    const [level, setLevel] = useState('');
    const [tag, setTag] = useState('');
    const [step, setStep] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = {
            ingredient,
            time,
            level,
            tag,
            description: step,
            user: user.email
        }
        axios.post('/recipe/add-recipe', newRecipe)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        if (e.target.name === 'ingredient') {
            setIngredient(e.target.value)
        } else if (e.target.name === 'time') {
            setTime(e.target.value)
        } else if (e.target.name === 'level') {
            setLevel(e.target.value)
        } else if (e.target.name === 'tag') {
            setTag(e.target.value)
        } else if (e.target.name === 'step') {
            setStep(e.target.value)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='new-form'>
                <div className='style-input'>
                    <input type="text" name='ingredient' value={ingredient} onChange={handleChange} required />
                    <label className="label">
                        <span className='span-content'>Ingredient</span>
                    </label>
                </div>
                <div className='time-level'>
                    <div className='style-input'>
                        <input type='text' name='time' value={time} onChange={handleChange} required />
                        <label className='label'>
                            <span className='span-content'>Time</span>
                        </label>
                    </div>
                    <div className='style-input'>
                        <input type='text' name='level' value={level} onChange={handleChange} required />
                        <label className='label'>
                            <span className='span-content'>Level</span>
                        </label>
                    </div>
                </div>
                <div className='style-input'>
                    <input type='text' name='tag' value={tag} onChange={handleChange} required />
                    <label className='label'>
                        <span className='span-content'>Tag</span>
                    </label>
                </div>
                <div className='style-input'>
                    <input type='text' name='step' value={step} onChange={handleChange} required />
                    <label className='label'>
                        <span className='span-content'>Steps</span>
                    </label>
                </div>
                <input type='submit' value='Add this recipe' required />
            </form>
        </div>
    )
}