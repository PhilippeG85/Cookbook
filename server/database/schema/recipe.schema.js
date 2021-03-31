import { Schema } from 'mongoose';

const recipeSchema = new Schema({
  name: { type: String, required: true },
  ingredient: { type: Array, required: true },
  time: { type: String, required: true },
  level: { type: String, required: true },
  tag: { type: String, required: false },
  description: { type: Object, required: true },
  user: { type: String, required: true }
});

export default recipeSchema;