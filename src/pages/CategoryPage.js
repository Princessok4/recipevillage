 import React, { useEffect, useState } from 'react';
  import { useParams, useNavigate } from 'react-router-dom';
  import Navbar from '../componenet/NavBar';
  import SearchPage from '../componenet/SearchPage';
   
  const RecipeDetails = () => {
    const { category } = useParams();
    const navigate = useNavigate(); // Initialize the navigate function
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then((response) => response.json())
        .then((data) => {
          setRecipes(data.meals);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, [category]);
   
    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent border-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
   
    if (error) {
      return <div className="text-center text-red-500">Failed to load recipes. Please try again later.</div>;
    }
   
    const handleRecipeClick = (idMeal) => {
      navigate(`/recipe/${idMeal}`); // Navigate programmatically to the recipe detail page
    };
   
    return (
      <div>
        <Navbar />
        <br /> <br /> <br />
        <SearchPage/>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-semibold text-left mb-8 text-gray-900">Recipes for {category}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
              <div
                key={recipe.idMeal}
                onClick={() => handleRecipeClick(recipe.idMeal)} // Handle click event
                className="bg-gray-400 text-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer hover:bg-gray-600"
              >
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-white">{recipe.strMeal}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
   
  export default RecipeDetails;
   
   