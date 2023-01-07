// backend/models/RecipeSchema.ts
import { Document, Schema, model} from "mongoose";

export interface IRecipe extends Document {
    name: string;
    image: string;
    desc: string;
    ingredients: string[];
    instructions: string[];
}

const RecipeSchema = new Schema<IRecipe>({
  name: { type: String, },
  image: {type: String},
  desc: {type: String},
  ingredients: {type: [String]},
  instructions: {type: [String]}
});

const Recipe = model<IRecipe>("RecipeDoc", RecipeSchema);

export default Recipe;