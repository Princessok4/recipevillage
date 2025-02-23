import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
 
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLoading(true);
      navigate('/results', { state: { query: searchQuery } });
    }
  };
 
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto">
        <form onSubmit={handleSearchSubmit} className="">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for a recipe!"
            className="px-4 py-2 border border-gray-300 rounded-md w-full"
          />
        </form>
 
        {loading && <div className="text-center">Loading...</div>}
      </div>
    </div>
  );
};
 
export default SearchPage;