import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


// This is Mena's code
const Home = () => {
    return (
        <div>
            <Navbar/>
            <div
                className="flex justify-center items-center h-screen bg-cover bg-center relative"
                style={{
                    backgroundImage: "url('/images/Rom.jpg')" 
                }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>

                <div className="relative z-10 text-center text-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-5xl font-bold mb-4 text-shadow-md">Welcome to Foodies Corner!</h1>
                    <p className="text-xl mb-6 text-shadow-md">Where you get the best recipes, straight from the heart of the kitchen.</p>
                    <Link
                        to="/recipes"
                        className="bg-green-600 text-gray-900 py-2 px-6 text-lg rounded-lg hover:bg-yellow-600 transition duration-300"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;