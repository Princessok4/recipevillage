import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../components/Navbar';
import SearchPage from '../components/SearchPage';



const Recipes = () => {
  // Define state for categories, loading, and error
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch categories from the API
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories); // Set categories data
        setLoading(false); // Data is loaded
      })
      .catch((error) => {
        setError(error); // Handle error
        setLoading(false); // Stop loading
      });
  }, []);

  // Handle click to navigate to a single recipe page by category name (strCategory)
  const handleCategoryClick = (category) => {
    // Navigate to the recipe details page with the category name (strCategory)
    navigate(`/recipes/${category.strCategory}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent border-primary"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Failed to load categories. Please try again later.</div>;
  }

  return (
    <div>
      <Navbar/>
      <br />
      <SearchPage/>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold text-left mb-8">Recipe Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {categories.map((category) => (
            <div
              key={category.idCategory}
              className="bg-gray-400 text-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer hover:bg-gray-600"
              onClick={() => handleCategoryClick(category)} 
            >
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white">{category.strCategory}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br /> <br />
    </div>
  );
  
};

export default Recipes;
