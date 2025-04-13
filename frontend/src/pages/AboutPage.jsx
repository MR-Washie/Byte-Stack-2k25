import React from 'react';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <div>
        <Navbar/>
        <section className="bg-white text-gray-800 py-12 px-4 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg md:text-xl mb-4">
          Welcome to Education – your one-stop platform for high-quality <span className="font-semibold text-blue-600">Notes</span> and previous year questions (<span className="font-semibold text-blue-600">PYQs</span>).
        </p>
        <p className="text-base md:text-lg text-gray-600">
          We help students prepare better by providing organized study materials and curated past exam papers. Whether you're revising for exams or looking to understand concepts better, we've got your back.
        </p>
      </div>
    </section>
    </div>
  );
};

export default AboutPage;