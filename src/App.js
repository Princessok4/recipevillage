import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import for react-router-dom v6
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetails from './pages/CategoryPage';
import RecipeDetailPage from './pages/SingleRecipe';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import ResultsPage from './pages/ResultPage';


const App = () => {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch in react-router v6 */}
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:category" element={<RecipeDetails />} /> 
        <Route path="/recipe/:idMeal" element={<RecipeDetailPage />} />
        <Route path="/About" element={<About/>} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
