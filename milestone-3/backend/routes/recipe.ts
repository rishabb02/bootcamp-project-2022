// backend/routes/person.ts
// const Recipe = require("../models/RecipeSchema");
import Recipe from "../models/RecipeSchema";
import express, { Request, Response, Router } from "express";

const router: Router = express.Router()

// get all people
router.get("/recipe", async (req: Request, res: Response) => {
    const recipe = await Recipe.find({})
    res.send(recipe)
    // res.send("RECIPE routes")
})

// get specific person
router.get('/recipe/:recipeName', async (req: Request, res: Response) => {
    const { recipeName } = req.params;
    const recipe = await Recipe.findOne({
        'name': recipeName
    });
    res.send(recipe);
});

router.post("/recipe", async (req: Request, res: Response) => {
    const { name, desc, image, ingredients, instructions } = req.body;

    console.log("req.body: ", req.body)

    const recipeData = {
        name: name,
        desc: desc,
        image: image,
        ingredients: [ingredients],
        instructions: [instructions]
    }
    const small = new Recipe(req.body);
    small.save(function (err) {
        if (err) return (`This is my  error ${err}`);
        // saved!
        res.send('Saved successfuly')
    });


})

router.put("/recipe/:recipeName/ingredient", async (req: Request, res: Response) => {
    let newIngredient = req.body.ingredients;
    let recipeName = req.params.recipeName;

    const recipe = await Recipe.findOne({ 'name': recipeName })

    if (recipe) {
        recipe.ingredients = [...recipe.ingredients, newIngredient];
        await recipe.save();
        res.status(200).json({updatedData: recipe})
    }
    else {
        res.status(400).send("Update could not be completed")
    }
    
})

router.put("/recipe/:recipeName/instruction", async (req: Request, res: Response) => {
    let newInstruction = req.body.instructions;
    let recipeName = req.params.recipeName;
    console.log(newInstruction);
    console.log(recipeName);
    const recipe = await Recipe.findOne({ 'name': recipeName })

    if (recipe) {
        recipe.instructions = [...recipe.instructions, newInstruction];
        await recipe.save();
        res.status(200).json({updatedData: recipe})
    }
    else {
        res.status(400).send("Update could not be completed")
    }
})

export default router;

// `GET - /recipe` get all recipes

// `GET - /recipe/:recipeName`  gets a specific recipe given the recipe name

// `POST - /recipe` Creates a new recipe given a body.

// `PUT - /recipe/:recipeName/ingredient` Adds an ingredient to a given recipe

// `PUT - /recipe/:recipeName/instruction` Adds an instruction to a given recipe