import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../componenet/NavBar';
 
const RecipeDetailPage = () => {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data.meals[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [idMeal]);
 
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-transparent border-indigo-600" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
 
  if (error) {
    return <div className="text-center text-red-500 mt-8">Failed to load recipe. Please try again later.</div>;
  }
 
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <br /> <br /> <br />
      <div className="container mx-auto p-6">
        {/* Recipe Title */}
        <h1 className="text-4xl font-semibold text-left text-gray-900 mb-8">{recipe.strMeal}</h1>
 
        {/* Recipe Image */}
        <div className="flex justify-left mb-8">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-64 h-64 object-cover rounded-lg shadow-xl"  // Reduced size
          />
        </div>
 
 
        {/* Ingredients Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
          <ul className="space-y-2 text-lg text-gray-700">
            {Array.from({ length: 20 }).map((_, index) => {
              const ingredient = recipe[`strIngredient${index + 1}`];
              const measure = recipe[`strMeasure${index + 1}`];
              return ingredient && measure ? (
                <li key={index} className="flex justify-between">
                  <span>{ingredient}</span>
                  <span className="font-semibold">{measure}</span>
                </li>
              ) : null;
            })}
          </ul>
        </div>
        <br />
 
        {/* Instructions Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instructions</h2>
          <p className="text-lg text-gray-700">{recipe.strInstructions}</p>
        </div>
        <br />
      </div>
    </div>
  );
};
 
export default RecipeDetailPage;
 
 