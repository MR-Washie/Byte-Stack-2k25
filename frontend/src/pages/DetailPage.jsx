import React from "react";

export default function DetailPage() { 
    return ( 
    <div className="flex h-screen w-full"> {/* Left Section */} <div className="w-1/2 bg-blue-500 flex flex-col items-center justify-center text-white p-10"> <h1 className="text-4xl font-bold">Welcome to</h1> <h1 className="text-4xl font-bold mt-1">Education</h1> <div className="my-6"> 
<div className="mb-6">
          {/* Graduation Cap Icon */}
          <img
            src="logoN.png"
            alt="Education Logo"
            className="w-30 h-30 mb-6"
          />
        </div>
 </div> <p className="text-center max-w-sm text-white"> Stay ahead in your academic journey with a seamless resource-sharing platform, simplifying access to notes, question papers, and projects while keeping you connected with the latest study materials. </p> </div>

{/* Right Section */}
  <div className="w-1/2 bg-white flex flex-col justify-center px-16">
    <h2 className="text-2xl font-semibold text-gray-800 flex justify-center align-items-center +min-h-screen">Enter your Details</h2>
    <p className="text-sm text-gray-500 mt-1 mb-6 flex justify-center align-items-center +min-h-screen">Please Enter your details</p>
    <form className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="border border-gray-300 px-4 py-2 rounded-md"
      />
      <div className="flex space-x-4">
        <select className="border border-gray-300 px-4 py-2 rounded-md w-full">
          <option>College name</option>
        </select>
        <select className="border border-gray-300 px-4 py-2 rounded-md w-full text-black">
          <option>Select Semester</option>
        </select>
      </div>
      <div className="flex space-x-4">
        <select className="border border-gray-300 px-4 py-2 rounded-md w-full">
          <option>Department</option>
        </select>
        
      </div>
      <div className="flex items-center justify-between mt-2">
        <label className="flex items-center space-x-2">
          <span className="text-sm text-black">Allow Profile Visibility</span>
          <input type="checkbox" className="toggle toggle-sm" />
        </label>
        <label className="flex items-center space-x-2">
          <span className="text-sm">Notification</span>
          <input type="checkbox" defaultChecked className="toggle toggle-sm" />
        </label>
      </div>
      <button className="mt-6 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-500">
        Continue
      </button>
    </form>
  </div>
</div>

); }