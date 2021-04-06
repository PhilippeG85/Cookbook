import React, { useEffect, useContext, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { UserContext } from '../../logInContext';
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShowRecipe() {
    const user = useContext(UserContext);
    const [name, setName] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [time, setTime] = useState('');
    const [level, setLevel] = useState('');
    const [tag, setTag] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState('');

    const handleClick = () => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            axios.delete(`/recipe/delete/${id}`)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    }
    
    const initState = (data) => {
        if (data.name) {
            setName(data.name);
        }
        if (data.ingredient) {
            setIngredient(data.ingredient);
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
        if (data._id) {
            setId(data._id);
        }
    };

    const displayIngredient = () => {
        return (
            ingredient.map((ing, i) => {
                return <li key={i}>{ing}</li>
            })
        );
    }

    const displayDescription = () => {
        let array = [];
        Object.keys(description).forEach(key => {
            array.push(description[key])
        });
        return (
            array.map((ing, i) => {
                return (<div className='step' key={i}><p>Step {i + 1}: </p><p>{ing}</p></div>)
            })
        );
    }

    useEffect(() => {
        const path = window.location.pathname;
        if (user) {
            axios.get(`/recipe/${user.email}${path}`)
                .then(res => initState(res.data[0]))
                .catch(err => console.log(err))
        }
    }, [user]);

    const capitalize = (str) => {
        if(typeof str === 'string') {
            return str.replace(/^\w/, c => c.toUpperCase());
        } else {
            return '';
        }
    };

    return (
        <div className='m-4'>
            <h1 className='text-center'>{capitalize(name)}</h1>
            <p style={{ marginLeft: "18px" }}>Tags: {tag}</p>
            <div className='recipe-content'>
                <div className='ingredient-content'>
                    <div className='recipe-information'>
                        <h3>Ingredient</h3>
                        <ul>
                            {ingredient && displayIngredient()}
                        </ul>
                    </div>
                    <div>
                        <p>Time: {time}</p>
                        <p>Level: {level}</p>
                    </div>
                </div>
                <div className='steps-content'>{displayDescription()}</div>
            </div>
            <div className='text-center'>
                <div className='recipe-action'>
                    <Link to={`/update-recipe/${id}`}>Update</Link>
                    <FontAwesomeIcon className='pointer' icon={faTrashAlt} onClick={handleClick} />
                </div>
            </div>
        </div>
    );
}