import React from 'react';
import logo from './logo.svg';
import './App.css';
import recipeData from "./recipeData"
import Navbar from "./components/navbar";
import Home from "./components/Home"
import RecipePreview from './components/RecipePreview';
import About from "./components/About"
import RecipePage from "./components/RecipePage";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./components/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="recipe/:id" element={<RecipePage />}/>
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;


// {/* <main>
//       <Navbar />
//       <Home />
//       {/* <RecipePreview name={recipeData[0].name} image={recipeData[0].image} desc={recipeData[0].desc}/>
//       <RecipePreview name={recipeData[1].name} image={recipeData[1].image} desc={recipeData[1].desc}/>
//       <RecipePreview name={recipeData[2].name} image={recipeData[2].image} desc={recipeData[2].desc}/> */}
//       {recipeData.map(recipe => 
//         <RecipePreview name={recipe.name} image={recipe.image} desc={recipe.desc}/>)}
//     </main> */}