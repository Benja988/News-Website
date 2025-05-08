import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  "US",
  "World",
  "Politics",
  "Business",
  "Opinion",
  "Health",
  "Entertainment",
  "Style",
  "Travel",
  "Sports",
  "Videos"
];

const Nav = () => {
  return (
    <nav className='flex justify-between items-center bg-black px-4 py-2 flex-wrap'>
      {/* Left Section */}
      <div className='flex items-center gap-6 flex-wrap'>
        {/* Hamburger Icon */}
        <div className='cursor-pointer'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>

        {/* Logo */}
        <div className='flex items-center'>
          <img src="/images/Header/logo.png" alt="CNN Logo" className='h-10' />
        </div>

        {/* Nav Links */}
        <div className='flex gap-4 flex-wrap'>
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-white text-[0.937rem] font-bold hover:text-gray-400 ${isActive ? 'underline' : ''}`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-6 mt-2 sm:mt-0'>
        <NavLink to="/watch" className="text-white text-[0.937rem] font-bold hover:text-gray-400">Watch</NavLink>
        <NavLink to="/listen" className="text-white text-[0.937rem] font-bold hover:text-gray-400">Listen</NavLink>
        <NavLink to="/live-tv" className="text-white text-[0.937rem] font-bold hover:text-gray-400">Live TV</NavLink>

        {/* Search Icon */}
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>

        {/* Login Button */}
        <NavLink
          to="/login"
          className="text-white px-3 py-1 rounded border border-white text-[0.937rem] font-bold hover:text-gray-400"
        >
          Log In
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
