import mongoose from 'mongoose';
import recipeSchema from '../schema/recipe.schema';

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;