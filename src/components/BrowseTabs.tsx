import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface BrowseTabsProps {
  onCitySelect: (city: string | null) => void;
  selectedCity: string | null;
}

export default function BrowseTabs({ onCitySelect, selectedCity }: BrowseTabsProps) {
  const [activeTab, setActiveTab] = useState('experiences');
  
  const handleCityClick = (city: string) => {
    onCitySelect(city === selectedCity ? null : city);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex space-x-8 border-b">
        <button 
          onClick={() => {
            setActiveTab('experiences');
            onCitySelect(null);
          }}
          className={`px-4 py-2 font-semibold ${
            activeTab === 'experiences' 
              ? 'text-black border-b-2 border-black' 
              : 'text-gray-500 hover:text-black'
          }`}
        >
          Top Experiences
        </button>
        <button 
          onClick={() => setActiveTab('cities')}
          className={`px-4 py-2 font-semibold ${
            activeTab === 'cities' 
              ? 'text-black border-b-2 border-black' 
              : 'text-gray-500 hover:text-black'
          }`}
        >
          Browse by City
        </button>
        <button 
          onClick={() => {
            setActiveTab('categories');
            onCitySelect(null);
          }}
          className={`px-4 py-2 font-semibold ${
            activeTab === 'categories' 
              ? 'text-black border-b-2 border-black' 
              : 'text-gray-500 hover:text-black'
          }`}
        >
          Browse by Category
        </button>
      </div>

      {activeTab === 'cities' && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {['Paris', 'Tbilisi', 'Lagos'].map((city) => (
            <button
              key={city}
              onClick={() => handleCityClick(city)}
              className={`flex items-center justify-center p-4 space-x-2 transition-colors rounded-lg shadow-sm ${
                selectedCity === city 
                  ? 'bg-black text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>{city}</span>
            </button>
          ))}
        </div>
      )}

      {activeTab === 'categories' && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {[
            'Alternative Culture',
            'Food',
            'Bootcamp',
            'Sport',
            'Business'
          ].map((category) => (
            <button
              key={category}
              className="p-4 text-gray-700 transition-colors bg-white rounded-lg shadow-sm hover:bg-gray-50"
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}