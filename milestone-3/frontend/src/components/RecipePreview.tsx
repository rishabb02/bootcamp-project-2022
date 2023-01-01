import { Link } from "react-router-dom";

interface Recipe {
    name: string;
    image: string;
    desc: string;
}
function RecipePreview(props: Recipe) {
    return(
        <div className="singular-card">
            <Link to= {`/recipe/${props.name.toLowerCase().replace(" ", "-")}`}>  <h3 className="food-label">{props.name}</h3> </Link>
            <img src={props.image} alt="Pani-Puri"/>
            <p>{props.desc}</p>
            
        </div>
    );
}

export default RecipePreview;

