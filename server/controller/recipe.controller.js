import express from 'express';
import { Recipe } from '../database/model/index';

const recipeController = express.Router();

// Get all recipe
recipeController.get('/', (req, res) => {
    const { user } = req.body;
    Recipe.find({}, (req, result) => {
        res.status(200).send({
            data: result
        })
    })
});

// Get recipes for a user
recipeController.get('/:user', (req, res) => {
    const {user} = req.params;
    Recipe.find({user}, (re, result) => {
        res.status(200).send({
            data: result
        })
    })
})

// Add new recipe
recipeController.post('/add-recipe', (req, res) => {
    const { name, ingredient, time, level, tag, description, user } = req.body;
    const recipeData = {
        name,
        ingredient,
        time,
        level,
        tag,
        description,
        user
    }
    const newRecipe = new Recipe(recipeData);
    newRecipe
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send('unable to save to database');
    });
});

// Get and Update recipe
recipeController.get('/update/:id', (req, res) => {
    Recipe.findById(req.params.id)
        .then(data => res.status(200).send(data))
});

recipeController.put('/update/:id', (req, res) => {
    const { ingredient, time, level, tag, description, user } = req.body;
    Recipe.findByIdAndUpdate(req.params.id, { ingredient, time, level, tag, description, user })
        .then(data => res.status(200).send(data))
});

// Delete recipe
recipeController.delete('/delete/:id', (req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then(() => {
            res.send('Recipe deleted')
        })
        .catch(err => res.status(400).send("Error: " + err))
});

export default recipeController;