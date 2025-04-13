import { Search } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import {Link} from "react-router-dom"
import { useState } from 'react';


export default function Navbar() {

  const { logout, authUser } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);


  return (
    <div className=''>
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-black text-xl font-bold flex items-center">
          <span className="text-2xl w-10"><img src="logoN.png" alt="logo" /></span>
          <span className="ml-1">Education</span>
        </div>
      </div>

      {/* Middle: Nav Links */}
      <div className="flex items-center space-x-6 bg-slate-300 px-7 py-2 rounded-full">
      <button className="text-gray-700 hover:text-black active:font-bold active:underline cursonr-pointer"><Link to="/">Home</Link></button>
        <div className="relative">
          <button className="text-gray-700 hover:text-black"><Link to="/notes">Note Gallery</Link></button>
          <span className="absolute -top-2 -right-4 text-xs text-white bg-orange-500 px-1 rounded-full">New</span>
        </div>
        <button className="text-gray-700 hover:text-black"><Link to='/about'>About</Link></button>
        {/* <button className="text-gray-700 hover:text-black">Reels</button> */}
        {/* <button className="text-gray-700 hover:text-black">Feedback</button> */}
        <button className="text-gray-700 hover:text-black"><Link to="/contact">Contact</Link></button>
      </div>
      {/* Right: Search and Profile Icon */}
      <div className="flex items-center space-x-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for college"
            className="border border-gray-300 rounded-full px-4 py-1 text-sm"
          />
          <Search className="absolute right-2 top-1.5 h-4 w-4 text-gray-500" />
        </div>
        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
          {/* user icon */}
          <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            src={selectedImg || authUser.profilePic || "/avatar.png"}
            alt="Profile" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            <Link to="/profile" >Profile</Link>
            <span className="badge">New</span>
          </a>
        </li>
        <li><Link to="/setting">Setting</Link></li>
        <li onClick={logout}><a>Logout</a></li>
      </ul>
    </div>
        </div>
      </div>
    </nav>
    </div>
  );
}