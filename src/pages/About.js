import React from 'react';
import Navbar from '../componenet/Navbar';

const About = () => {
  return (
    <div className="pt-16"> {/* Add padding-top here */}
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Foodies Corner
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold text-primary">Foodies Corner</span> – your culinary community, where every dish tells a story, and every recipe brings us closer together.
        </p>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          At Foodies Corner, we are a passionate group of 13 dedicated food lovers, each bringing our unique flavor to the table. From seasoned chefs to home-cooking enthusiasts, our team is united by one simple mission: to inspire, share, and elevate the joy of cooking.
        </p>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Whether you're looking for a quick weeknight meal, a show-stopping dish for a special occasion, or the perfect recipe to share with loved ones, Foodies Corner is here to guide you every step of the way. With hundreds of carefully curated recipes, cooking tips, and culinary inspiration, we aim to create a place where food brings us all together.
        </p>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          We believe food is more than just fuel – it’s an experience, a memory, and a way to connect with others. At Foodies Corner, we strive to bring that experience to life with each recipe we share, and we’re proud to be part of your kitchen adventures.
        </p>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Thank you for being a part of Foodies Corner. Here, we’re not just about cooking – we’re about creating moments, making memories, and celebrating the beauty of food, one recipe at a time.
        </p>
      </div>
    </div>
  );
};

export default About;