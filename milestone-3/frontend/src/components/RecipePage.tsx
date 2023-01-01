import recipes from "../recipeData";
import { useParams } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from 'react'

interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    path?: string,
    id?: string
}

export default function RecipePage() {
    const { id } = useParams();

    const [recipe, setRecipe] = useState<Recipe>()
    const [ingredient, setIngredient] = useState("")

    useEffect(() => {
        const currentRecipe = recipes.find(recipe => recipe.name === id?.replace("-", " ").toUpperCase())
        // setRecipe(currentRecipe)
    }, [])
    // const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === id);
    return (
        <div>
            <h1>
                {recipe?.name}
            </h1>
            <form>
                <input
                    placeholder="2 cups of spinach"
                    value={ingredient} // add newIngredient as the input's value
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        // this event handler updates the value of newIngredient
                        setIngredient(e.target.value);
                    }}
                />
                <button onClick={() => setIngredient([...allIngredients, ingredient])}>
                    Add Ingredient
                </button>
            </form>
        </div>
    )
}