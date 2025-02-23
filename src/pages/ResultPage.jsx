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