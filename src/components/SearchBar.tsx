import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="flex w-full max-w-3xl">
      <input
        type="text"
        placeholder="Search experiences or destinations"
        className="w-full px-6 py-4 text-lg border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="flex items-center px-8 py-4 space-x-2 text-white bg-black rounded-r-lg hover:bg-gray-800">
        <Search className="w-5 h-5" />
        <span>Search</span>
      </button>
    </div>
  );
}