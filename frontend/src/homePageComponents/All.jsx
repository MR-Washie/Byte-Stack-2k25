import React from 'react';
import OptionSelect from '../components/OptionSelect';
import { Link } from "react-router-dom";

const StudyMaterialsPage = () => { 
    return ( <div className="font-sans"> 
    

<section
  className="relative bg-cover bg-center bg-no-repeat p-8 flex items-center justify-between text-white"
  style={{ backgroundImage: "books-seamless-pattern-doodle-outline-textbooks 2.png" }}  // no need for import
>
<div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>

  <div className="relative z-10 flex-1 text-center">
    <h2 className="text-3xl font-extrabold text-white">
      Empowering Students With The Best <span className="text-blue-600">College Resources</span>!
    </h2>
    <p className="mt-2 font-semibold text-white">
      Access a wide range of study materials from top institutions. Share knowledge, collaborate, and stay ahead in your academics!
    </p>
    <div className="mt-4 flex justify-center space-x-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded"><Link to="/notes">Download Notes</Link></button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded"><Link to='/notes'>Upload Notes</Link></button>
    </div>
  </div>

  <div className="relative z-10 ml-8">
    <img 
      src="online-communication 1.png"
      alt="Marketing Picture"
      className="ml-auto w-96 h-auto mb-6"
    />
  </div>
</section>
{/* Hero Section */}


  {/* Study Materials */}
  <div className='mt-10'>
    <h3 className="text-2xl font-semibold text-center">Most Downloaded Study Materials</h3>
    <p className="text-center text-gray-600 mb-6">Get the Best Notes & Papers</p>
  </div>
  <OptionSelect />

  {/* Study Materials */}
  <section
  className="relative bg-cover bg-center bg-no-repeat p-8 text-white"
  style={{ backgroundImage: "url('/background.png')" }}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">  
    {/* Subject - Chemistry */}
    <div className="flex flex-col items-center text-center">
      {/* <img
        src="chemistry.png"
        alt="Chemistry"
        className="w-72 h-48.5 mb-4"
      /> */}
      <div className="bg-pink-200 p-6 rounded-lg shadow-lg w-full">
        <h3 className="text-xl font-semibold text-gray-800">Chemistry</h3>
        <p className="mt-2 text-gray-700">
          Explore the fascinating world of molecules, reactions, and chemical processes.
        </p>
        <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded"><Link to='/notes'>See More</Link></button>
      </div>
    </div>

    {/* Subject - Mathematics */}
    <div className="flex flex-col items-center text-center">
      {/* <img
        src="math.jpg"
        alt="Mathematics"
        className="w-auto h-auto mb-4"
      /> */}
      <div className="bg-yellow-200 p-6 rounded-lg shadow-lg w-full">
        <h3 className="text-xl font-semibold text-gray-800">Mathematics</h3>
        <p className="mt-2 text-gray-700">
          Dive deep into algebra, calculus, geometry, and more to master the language of the universe.
        </p>
        <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded"><Link to='/notes'>See More</Link></button>
      </div>
    </div>

    {/* Subject - Physics */}
    <div className="flex flex-col items-center text-center">
      {/* <img
        src="physics.jpg"
        alt="Physics"
        className="w-72 h-48.5 mb-4"
      /> */}
      <div className="bg-blue-200 p-6 rounded-lg shadow-lg w-full">
        <h3 className="text-xl font-semibold text-gray-800">Physics</h3>
        <p className="mt-2 text-gray-700">
          Unravel the mysteries of forces, energy, modern physics and the laws of the universe.
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"><Link to='/notes'>See More</Link></button>
      </div>
    </div>

    {/* Subject - Biology */}
    <div className="flex flex-col items-center text-center">
      {/* <img
        src="biology.jpg"
        alt="Biology"
        className="w-72 h-48.5 mb-4"
      /> */}
      <div className="bg-yellow-100 p-6 rounded-lg shadow-lg w-full">
        <h3 className="text-xl font-semibold text-gray-800">Biology</h3>
        <p className="mt-2 text-gray-700">
          Discover the science of life, from genetics to ecosystems, and everything in between.
        </p>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded"><Link to='/notes'>See More</Link></button>
      </div>
    </div>
  </div>
</section>

  {/* Top Contributors */}
  <section className="w-full flex flex-col lg:flex-row items-start justify-between px-8 py-12 max-w-7xl mx-9">
  
  {/* Left side: Text + Small Contributor */}
  <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
    <div className="text-center lg:text-left">
      <h2 className="text-3xl font-bold mb-4">Our Top Contributors</h2>
      <p className="text-gray-600 mb-10 max-w-md">
        Meet the amazing minds who’ve helped bring quality resources to students across the country. These top contributors stand out through dedication and consistency.
      </p>
    </div>

    {/* Smaller Contributor Card - Rahul Sharma */}
    <div className="relative w-60 h-72 rounded-xl overflow-hidden shadow-md mt-auto ">
      <img
        src="boy.png"  // Replace with your image
        alt="Rahul Sharma"
        className="w-full h-fullobject-cover"
      />
      {/* Name */}
      <div className="absolute top-2 right-2 bg-white bg-opacity-80 px-2 py-0.5 text-sm font-medium rounded-full text-gray-800">
        Anuj Raj(AIIMS Delhi)
      </div>
      {/* Button */}
      <button className="absolute bottom-3 left-3 bg-black bg-opacity-90 text-white text-sm px-5 py-1 rounded-br-full rounded-tr-full shadow">
        See Here
      </button>
    </div>
    
  </div>

  {/* Right side: Large Contributor Card - Neha Verma */}
  <div className="relative lg:w-1/2 flex justify-between items-start mt-12 lg:mt-8">
    <div className="relative w-72 h-[430px] rounded-2xl overflow-hidden shadow-lg">
      <img
        src="girl.png"  // Replace with your image
        alt="Neha Verma"
        className="w-full h-full object-cover"
      />
      {/* Name */}
      <div className="absolute top-3 right-3 bg-white bg-opacity-80 px-3 py-1 text-sm font-semibold rounded-full text-gray-800">
        Neha Verma(NIT Trichy)
      </div>
      {/* Button */}
      <button className="absolute bottom-4 left-4 bg-black bg-opacity-90 text-white font-medium px-5 py-2 rounded-br-full rounded-tr-full shadow">
        See Here
      </button>
    </div>
  </div>
</section>
  

  {/* Testimonials */}
  <section className="w-full px-8 py-12 max-w-7xl mx-auto">
  {/* Bold Heading */}
  <h2 className="text-5xl text-blue-600 font-extrabold tracking-tight leading-snug mb-6 font-serif">Testimonial</h2>

  {/* Blue Box wrapping text and image */}
  <div className="bg-violet-300 text-blue-800 p-6 rounded-xl shadow-md flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
    
    {/* Text Section */}
    <div className="lg:w-2/3 text-left">
      <h3 className="text-2xl font-semibold text-red-700 mb-4">What Students Say...</h3>
      <p className="text-lg font-medium">
        “Thanks to this platform, I finally have access to the exact notes I needed for my semester exams. It’s like having a personal mentor!”
      </p>
      <p className="mt-4 text-sm font-semibold">– A Happy Student</p>
    </div>

    {/* Image Section */}
    <div className="lg:w-1/3 w-full">
      <img 
        src="stack.png"  // Replace with your actual image path
        alt="Student giving testimonial"
        className="rounded-lg w-full h-auto object-cover"
      />
    </div>

  </div>
</section>

  {/* Motivation Section */}
  <section className="w-full px-8 py-12 max-w-7xl mx-auto">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

    {/* Left Side: Image */}
    <div className="lg:w-1/2 w-full">
      <img
        src="books.png"  // Replace with your image path
        alt="Dream Big"
        className=" h-auto rounded-xl object-cover"
      />
    </div>

    {/* Right Side: Text */}
    <div className="lg:w-1/2 w-full text-right">
      <h2 className="text-6xl font-extrabold tracking-tight leading-snug mb-4 font-serif">
        Dream Big,<br /> Stay Focused.
      </h2>
      <p className="text-2xl text-gray-700 font-medium font-sans">
        Every great achievement starts with a dream. Stay consistent, stay curious, and let your passion lead the way.
      </p>
    </div>

  </div>
</section>

  
</div>

); };

export default StudyMaterialsPage;