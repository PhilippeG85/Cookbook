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

    useEffect(() => {
        const path = window.location.pathname;
        if (user) {
            axios.get(`/recipe/${user.email}${path}`)
                .then(res => initState(res.data[0]))
                .catch(err => console.log(err))
        }
    }, [user]);

    return (
        <div>
            <h1>Inside show recipe</h1>
            <h1>{name}</h1>
            <div className='recipe-action'>
                <Link to={`/update-recipe/${id}`}>Update</Link>
                <FontAwesomeIcon className='pointer' icon={faTrashAlt} onClick={handleClick} />
            </div>
        </div>
    );
}