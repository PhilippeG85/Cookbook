import { Schema } from 'mongoose';

const recipeSchema = new Schema({
  ingredient: { type: String, required: true },
  time: { type: String, required: true },
  level: { type: String, required: true },
  tag: { type: String, required: false },
  description: { type: String, required: true },
  user: { type: String, required: true }
});

export default recipeSchema;