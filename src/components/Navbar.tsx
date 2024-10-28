import React from 'react';
import { Globe } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      <div className="flex items-center space-x-2">
        <Globe className="w-8 h-8 text-blue-500" />
        <span className="text-2xl font-bold text-blue-500">TravelXP</span>
      </div>

      <div className="flex items-center space-x-4">
        <button className="px-6 py-2 font-semibold text-white bg-black rounded-lg hover:bg-gray-800">
          Sign Up
        </button>
        <div className="flex items-center space-x-1">
          <span>English</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </nav>
  );
}