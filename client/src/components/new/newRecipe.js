import React, { useContext, useState } from "react";
import axios from 'axios';
import { UserContext } from '../../logInContext';

export default function NewRecipe() {
    const user = useContext(UserContext);
    const [name, setName] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [time, setTime] = useState('');
    const [level, setLevel] = useState('');
    const [tag, setTag] = useState('');
    const [step, setStep] = useState({step_1: '', step_2: '', step_3: '', step_4: '', step_5: '', step_6: '', step_7: '', step_8: '', step_9: ''});
    const [num, setNum] = useState([1]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const ingredientArray = ingredient.split(' ');
        for (let key in step) {
            if (step[key] === '') {
                delete step[key];
            }
        }
        const newRecipe = {
            name,
            ingredient: ingredientArray,
            time,
            level,
            tag,
            description: step,
            user: user.email
        }
        axios.post('/recipe/add-recipe', newRecipe)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        window.location.reload();
    }

    const handleChange = (e, nam) => {
        if (e.target.name === 'ingredient') {
            setIngredient(e.target.value)
        } else if (e.target.name === 'time') {
            setTime(e.target.value)
        } else if (e.target.name === 'level') {
            setLevel(e.target.value)
        } else if (e.target.name === 'tag') {
            setTag(e.target.value)
        } else if (e.target.name === 'name') {
            setName(e.target.value)
        }
    }

    const handleStepChange = (e) => {
        setStep(prevStep => ({ ...prevStep, [e.target.name]: e.target.value }))
    }

    const displaySteps = (n, index) => {
        return (
            <div className='step-content' key={index}>
                <label>Step {n}: </label>
                <div className='style-input'>
                    <input type='text' name={`step_${n}`} value={step[`step_${n}`]} onChange={handleStepChange} autoComplete='off' required />
                    <label className='label'>
                    </label>
                </div>
            </div>
        );
    }
    const handleClick = () => {
        setNum(prevNum => [...prevNum, ((prevNum.length) + 1)])
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} className='new-form'>
                <div className='style-input'>
                    <input type="text" name='name' value={name} onChange={handleChange} autoComplete='off' required />
                    <label className="label">
                        <span className='span-content'>Name</span>
                    </label>
                </div>
                <div className='style-input'>
                    <input type="text" name='ingredient' value={ingredient} onChange={handleChange} autoComplete='off' required />
                    <label className="label">
                        <span className='span-content'>Ingredient</span>
                    </label>
                </div>
                <div className='time-level'>
                    <div className='style-input'>
                        <input type='text' name='time' value={time} onChange={handleChange} autoComplete='off' required />
                        <label className='label'>
                            <span className='span-content'>Time</span>
                        </label>
                    </div>
                    <div className='style-input'>
                        <input type='text' name='level' value={level} onChange={handleChange} autoComplete='off' required />
                        <label className='label'>
                            <span className='span-content'>Level</span>
                        </label>
                    </div>
                </div>
                <div className='style-input'>
                    <input type='text' name='tag' value={tag} onChange={handleChange} autoComplete='off' required />
                    <label className='label'>
                        <span className='span-content'>Tag</span>
                    </label>
                </div>
                <div id='steps'>
                    {
                        num.map((n, index) => {
                            return (
                                displaySteps(n, index)
                            );
                        })
                    }
                </div>
                <input type='submit' value='Add this recipe' required />
            </form>
            <button onClick={handleClick}>add element</button>
        </div>
    )
}