import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../componenet/NavBar';
 
const ResultsPage = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = location.state?.query || ''; // Get the search query from the location state
 
  useEffect(() => {
    if (query.trim()) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.meals || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [query]);
 
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <div>
        <Navbar/>
        <br /> <br />
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">Search Results</h1>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {searchResults.map((meal) => (
            <div key={meal.idMeal} className="bg-white p-4 rounded-lg shadow-lg cursor-pointer">
              <Link to={`/recipe/${meal.idMeal}`}>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">{meal.strMeal}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
 
export default ResultsPage;