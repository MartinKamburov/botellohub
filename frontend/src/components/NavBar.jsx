import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side: brand + nav links */}
          <div className="flex items-center">
            {/* Hamburger button for mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none mr-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">Features</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">Pricing</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
            </div>
          </div>

          {/* Right side: auth buttons */}
          <div className="flex items-center space-x-4">
            <a href="/login" className="text-gray-800 hover:text-gray-600">Login</a>
            <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile menu, show when open */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-1">
            <a href="#" className="block px-2 py-1 text-gray-800 hover:bg-gray-100 rounded">Home</a>
            <a href="#" className="block px-2 py-1 text-gray-800 hover:bg-gray-100 rounded">Features</a>
            <a href="#" className="block px-2 py-1 text-gray-800 hover:bg-gray-100 rounded">Pricing</a>
            <a href="#" className="block px-2 py-1 text-gray-800 hover:bg-gray-100 rounded">Contact</a>
            <div className="border-t border-gray-200 mt-2 pt-2">
              <a href="/login" className="block px-2 py-1 text-gray-800 hover:bg-gray-100 rounded">Login</a>
              <a href="/signup" className="block px-2 py-1 text-blue-600 hover:bg-gray-100 rounded">Sign Up</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
