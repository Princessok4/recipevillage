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
   