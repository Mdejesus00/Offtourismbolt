import React from 'react';

interface ExperienceCardProps {
  title: string;
  location: string;
  imageUrl: string;
  category: string;
}

export default function ExperienceCard({ title, location, imageUrl, category }: ExperienceCardProps) {
  return (
    <div className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105">
      <div className="relative">
        <img src={imageUrl} alt={title} className="object-cover w-full h-48" />
        <span className="absolute top-4 right-4 px-3 py-1 text-sm font-medium text-white bg-black bg-opacity-75 rounded-full">
          {category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600">{location}</p>
      </div>
    </div>
  );
}