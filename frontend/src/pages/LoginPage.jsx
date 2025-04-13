import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {

  const [formData, setFormData] = useState({
      email: "",
      password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const validateForm = () => {
    if(!email || !password) {
      toast.error("All fields are required");
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side */}
      <div className="w-1/2 bg-blue-500 flex flex-col justify-center items-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to</h1>
        <h1 className="text-4xl font-bold mb-4">Education</h1>
        {/* Placeholder for logo */}
        <div className="mb-6">
          {/* Graduation Cap Icon */}
          <img
            src="logoN.png"
            alt="Education Logo"
            className="w-50 h-50 mb-6"
          />
        </div>
        <p className="text-center max-w-sm">
          Stay ahead in your academic journey with a seamless resource-sharing platform, simplifying access to notes, question papers, and projects while keeping you connected with the latest study materials.
        </p>
      </div>

      {/* Right side */}
      <div className="w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2 flex justify-center align-items-center +min-h-screen">Create An Account Or Sign In To Get Started</h2>
          <h3 className="text-lg font-extrabold mb-4 flex justify-center align-items-center +min-h-screen">login</h3>
          <p className="mb-6 text-gray-500 flex justify-center align-items-center +min-h-screen">Please Enter your Account details</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Email*</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Password*</label>
              <input
                type="password"
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
            {/* <div className="text-right text-sm text-blue-500 cursor-pointer">Forgot password?</div> */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <div className="flex justify-center items-center"><Loader2 className="size-5 animate-spin" /></div>
                  Loading...
                </>
              ) : (
                "Continue"
              )}
            </button>
          </form>
          <div className="flex items-center justify-center mt-4 space-x-2">
            <span className="text-sm">Or</span>
            <span className="text-sm text-gray-600">Do you want to create an</span>
            <a href="#" className="text-blue-500 text-sm underline"><Link to="/signup">account?</Link></a>
          </div>
          
        </div>
      </div>
    </div>
  );
}