import recipes from "../recipeData";
import { useParams } from "react-router-dom";
import React, { useState, useEffect, ChangeEvent, ReactComponentElement } from 'react'
import { findDOMNode } from "react-dom";

interface Recipe {
    name: string;
    desc: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    path?: string,
    id?: string
}

export default function RecipePage() {
    const { id } = useParams();

    const [recipe, setRecipe] = useState<Recipe[]>([])
    const [ingredient, setIngredient] = useState("")
    const [instruction, setInstruction] = useState("")
    const [allIngredients, setAllIngredients] = useState<string[]>([]);
    const [allInstructions, setAllInstructions] = useState<string[]>([]);

    useEffect(() => {
        const findRecipe = recipes.find(recipe => {
            const title = id!.replace("-", " ")
            const words = title?.split(" ")

            console.log("words : ", words)

            let recipeTitle = words?.map((word) => {
                return word[0].toUpperCase() + word.substring(1)
            }).join(" ")

            return recipe.name === recipeTitle;
        });

        console.log("findRecipe: ", findRecipe)

        setRecipe((currentRecipe) => [...currentRecipe, findRecipe!]);
        setAllIngredients(findRecipe!.ingredients)

        setAllInstructions(findRecipe!.instructions)
    }, [])
    // const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === id);
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingLeft: "30px", paddingRight: "30px" }}>
                <div>
                    {
                        recipe.map((ele, idx) => {
                            return (
                                <div>
                                    <h1>{ele.name}</h1>
                                    <p>{ele.desc}</p>
                                    <img src={ele.image} alt="Pani-Puri" />
                                </div>
                            )
                        })
                    }
                </div>
                <div >
                    <div>
                        <h3 className="ingredient">Ingredients</h3>
                        <ul className="">
                            {
                                allIngredients.map((ingred, idx) =>
                                    <React.Fragment key={idx}>
                                        <li>{ingred}</li>
                                    </React.Fragment>
                                )
                            }
                        </ul>
                    </div>
                    <div className="form-ingredient">
                        <input
                            placeholder=""
                            value={ingredient} // add newIngredient as the input's value
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                // this event handler updates the value of newIngredient
                                setIngredient(e.target.value);
                            }}
                        />
                        <button onClick={() => {
                            setAllIngredients([...allIngredients, ingredient])
                            setIngredient("")
                        }}>
                            Add Ingredient
                        </button>
                    </div>
                </div>

            </div>

            <div>
                <h3 className="instruction">Instructions</h3>
                <ol className="instructions">
                    {
                        allInstructions.map((ingred, idx) =>
                            <React.Fragment key={idx}>
                                <li>{ingred}</li>
                            </React.Fragment>
                        )
                    }
                </ol>
            </div>
            <div>
                <input
                    placeholder=""
                    value={instruction} // add newIngredient as the input's value
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        // this event handler updates the value of newIngredient
                        setInstruction(e.target.value);
                    }}
                />
                <button onClick={() => {
                    setAllInstructions([...allInstructions, instruction])
                    setInstruction("")
                }}>
                    Add Instruction
                </button>
            </div>
        </div>
    )
}