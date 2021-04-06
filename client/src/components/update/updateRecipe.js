import React from "react";
import { useHistory } from "react-router-dom";
import UpdateForm from "./updateForm";

export default function UpdateRecipe() {
    const history = useHistory();

    const handleClick = () => {
        history.goBack();
    }
    return (
        <div className='update-page'>
            <button onClick={handleClick}>Retour</button>
            <h1 className='text-center'>Update Recipe</h1>
            <UpdateForm />
        </div>
    );
}