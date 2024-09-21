import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipeDetail();
  }, [id]);

  const fetchRecipeDetail = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=YOUR_API_KEY`
    );
    const data = await response.json();
    setRecipe(data);
  };

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
