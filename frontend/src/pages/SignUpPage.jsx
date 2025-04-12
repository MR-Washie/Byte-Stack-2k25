import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUpPage = () => {

  // const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if(!formData.fullName || !formData.email || !formData.password) {
      toast.error("All fields are required");
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");

    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();
    
    if(success === true) signup(formData);
  }



  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-1/2 bg-blue-500 text-white flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to</h1>
        <h1 className="text-4xl font-bold mb-4">Education</h1>
        <div className="mb-6">
          {/* Graduation Cap Icon */}
          <img
            src="logoN.png"
            alt="Education Logo"
            className="w-30 h-30 mb-6"
          />
        </div>
        <p className="text-center max-w-md text-sm">
          Stay ahead in your academic journey with a seamless resource-sharing platform, simplifying access to notes, question papers, and projects while keeping you connected with the latest study materials.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <div className="w-full max-w-md">
          <h2 className="text-xl font-semibold mb-1 flex justify-center align-items-center +min-h-screen">Create An Account Or Sign In To Get Started</h2>
          <h3 className="text-xl font-bold mb-6 flex justify-center items-center">signup</h3>
          <p className="mb-6 text-gray-500 flex justify-center align-items-center +min-h-screen">Please Enter your details to create an Account</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
            <input
              type="email"
              placeholder="Your Email*"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input
              type="password"
              placeholder="Your Password*"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            {/* <div className="text-right text-sm text-blue-600 cursor-pointer">Forgot password?</div> */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className='size-5 animate-spin' />
                  Loading...
                </>
              ) : (
                "Continue"
              )}
            </button>
          </form>
          <div className="my-4 text-center text-gray-500">OR</div>
          <div className="mt-4 text-sm text-center">
            Already have an account? <span className="text-blue-600 cursor-pointer"><Link to='/login' >Login</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;