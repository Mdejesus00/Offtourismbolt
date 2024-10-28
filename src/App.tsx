import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import BrowseTabs from './components/BrowseTabs';
import ExperienceCard from './components/ExperienceCard';

const cityExperiences = {
  Paris: [
    {
      title: "Street Art Tour",
      imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800",
      category: "Alternative Culture"
    },
    {
      title: "Cooking Class",
      imageUrl: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&w=800",
      category: "Food"
    },
    {
      title: "Fashion Workshop",
      imageUrl: "https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&w=800",
      category: "Business"
    }
  ],
  Tbilisi: [
    {
      title: "Wine Tasting Experience",
      imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800",
      category: "Food"
    },
    {
      title: "Traditional Dance Class",
      imageUrl: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800",
      category: "Alternative Culture"
    },
    {
      title: "Cooking Workshop",
      imageUrl: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?auto=format&fit=crop&w=800",
      category: "Food"
    }
  ],
  Lagos: [
    {
      title: "Tech Startup Workshop",
      imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800",
      category: "Business"
    },
    {
      title: "Music Production Class",
      imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800",
      category: "Alternative Culture"
    },
    {
      title: "Football Training",
      imageUrl: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=800",
      category: "Sport"
    }
  ]
};

const cityImages = {
  Paris: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600",
  Tbilisi: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600",
  Lagos: "https://images.unsplash.com/photo-1587659901518-7020d4413085?auto=format&fit=crop&w=1600"
};

function App() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">
            Discover Life-Changing Travel Experiences
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            Explore the world's best destinations and create unforgettable memories
          </p>
          
          <div className="flex justify-center mb-16">
            <SearchBar />
          </div>

          <div className="mb-12">
            <BrowseTabs onCitySelect={setSelectedCity} selectedCity={selectedCity} />
          </div>

          {selectedCity ? (
            <>
              <div className="relative mb-12 h-[400px] rounded-xl overflow-hidden">
                <img 
                  src={cityImages[selectedCity as keyof typeof cityImages]} 
                  alt={selectedCity}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-white">Experiences in {selectedCity}</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cityExperiences[selectedCity as keyof typeof cityExperiences].map((exp, index) => (
                  <ExperienceCard
                    key={index}
                    title={exp.title}
                    location={selectedCity}
                    imageUrl={exp.imageUrl}
                    category={exp.category}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ExperienceCard
                title="Street Art Tour"
                location="Paris, France"
                imageUrl="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800"
                category="Alternative Culture"
              />
              <ExperienceCard
                title="Wine Tasting Experience"
                location="Tbilisi, Georgia"
                imageUrl="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800"
                category="Food"
              />
              <ExperienceCard
                title="Tech Startup Workshop"
                location="Lagos, Nigeria"
                imageUrl="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800"
                category="Business"
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;