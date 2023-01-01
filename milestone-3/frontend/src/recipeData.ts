export interface Recipe {
    name: string;
    image: string;
    desc: string;
    ingredients: string[];
    instructions: string[];
  }

  const recipeData: Recipe[]=[

    {
        name: "Pani Puri",
        desc: "A hollow, crispy-fried puffed ball that is filled with potato, chickpeas, onions, spices, and <br> flavoured water, usually tamarind mint, and popped into one's mouth whole.",
        image:"images/Pani-Puri.jpeg",
        ingredients: ["3/4 cup Parboiled Rice (idli-dosa rice)", "3/4 cup Regular Rice"],
        instructions: ["Make the dosa batter: Put rice in a bowl", "Make the dosa batter: Put rice in a bowl"],  
    },

    {
        name: "Neapolitan Pizza",
        desc: "A favorite classic inspired by recipes from Naples- the birthplace of Pizza. Making it at home has never been easier!",
        image:"https://www.acouplecooks.com/wp-content/uploads/2018/09/Neapolitan-Pizza-0019.jpg",
        ingredients: ["3/4 cup Parboiled Rice (idli-dosa rice)", "3/4 cup Regular Rice"],
        instructions: ["Make the dosa batter: Put rice in a bowl", "Make the dosa batter: Put rice in a bowl"],  
    },
    {
        name: "Tiramisu",
        desc: "A delightful dessert inspired from Venetia for the sweet cravings. <br> It's sure to cheer you up!",
        image:"https://www.sandravalvassori.com/wp-content/uploads/2022/04/Tiramisu-11484-728x971.jpg",
        ingredients: ["3/4 cup Parboiled Rice (idli-dosa rice)", "3/4 cup Regular Rice"],
        instructions: ["Make the dosa batter: Put rice in a bowl", "Make the dosa batter: Put rice in a bowl"],  
    }
]

export default recipeData;