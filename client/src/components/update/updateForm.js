import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../logInContext';

export default function UpdateForm() {
    const user = useContext(UserContext);
    const [name, setName] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [time, setTime] = useState('');
    const [level, setLevel] = useState('');
    const [tag, setTag] = useState('');
    const [description, setDescription] = useState({step_1: '', step_2: '', step_3: '', step_4: '', step_5: '', step_6: '', step_7: '', step_8: '', step_9: ''});
    const [num, setNum] = useState([1]);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const path = window.location.pathname;
        const ingredientArray = ingredient.split(' ');
        for (let key in description) {
            if (description[key] === '') {
                delete description[key];
            }
        }
        const updateRecipe = {
            name,
            ingredient: ingredientArray,
            time,
            level,
            tag,
            description,
            user: user.email
        }
        axios.put(`/recipe${path}`, updateRecipe)
            .then(res => history.goBack())
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
        } else if (e.target.name === 'description') {
            setDescription(e.target.value)
        } else if (e.target.name === 'name') {
            setName(e.target.value)
        }
    }

    const initState = (data) => {
        if (data.name) {
            setName(data.name);
        }
        if (data.ingredient) {
            const ingredientString = data.ingredient.join(' ');
            setIngredient(ingredientString);
        }
        if (data.time) {
            setTime(data.time);
        }
        if (data.level) {
            setLevel(data.level);
        }
        if (data.tag) {
            setTag(data.tag);
        }
        if (data.description) {
            setDescription(data.description);
        }
        const keys = Object.keys(data.description);
        const keysToNum = keys.map((key, i) => {
            return i + 1;
        })
        setNum(keysToNum);
    }

    useEffect(() => {
        const path = window.location.pathname;
        axios.get(`/recipe${path}`)
            .then(res => initState(res.data))
            .catch(err => console.log(err))
    }, []);

    const handleStepChange = (e) => {
        setDescription(prevStep => ({ ...prevStep, [e.target.name]: e.target.value }))
    }

    const displaySteps = (n, index) => {
        return (
            <div className='step-content' key={index}>
                <label>Step {index + 1}: </label>
                <div className='style-input'>
                    <input type='text' name={`step_${n}`} value={description[`step_${n}`]} onChange={handleStepChange} autoComplete='off' />
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
                <input type='submit' value='Update recipe' required />
            </form>
            <button onClick={handleClick}>add element</button>
        </div>
    )
}