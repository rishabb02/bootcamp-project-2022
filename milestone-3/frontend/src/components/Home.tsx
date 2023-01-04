import "./styles.css"
import React, { useState, useEffect } from 'react';
import "./styles.css";
import { Recipe } from '../recipeData';
import RecipePreview from './RecipePreview';
import recipeData from "../recipeData";

export default function Home() {
    return (
        <div className="header-home">
            <h2>Curry Man's Delights</h2>
            <div className="recipe-cards">
                {recipeData.map((recipe: Recipe) => (
                    <RecipePreview {...recipe} />
                ))}
            </div>

        </div>);
}