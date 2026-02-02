import React, { useState } from 'react';
import { Search, MapPin, Home } from 'lucide-react';

export const SearchBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent'>('buy');

  return (
    <div className="relative z-30 max-w-5xl mx-auto -mt-10 px-4">
      <div className="bg-white rounded-lg shadow-2xl p-2 md:p-6 border-t-4 border-gold">
        {/* Tabs */}
        <div className="flex space-x-6 mb-4 px-2">
          <button
            onClick={() => setActiveTab('buy')}
            className={`text-sm font-bold uppercase tracking-wider pb-1 border-b-2 transition-colors ${
              activeTab === 'buy' ? 'border-chocolate text-chocolate' : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            Acheter
          </button>
          <button
            onClick={() => setActiveTab('rent')}
            className={`text-sm font-bold uppercase tracking-wider pb-1 border-b-2 transition-colors ${
              activeTab === 'rent' ? 'border-chocolate text-chocolate' : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            Louer
          </button>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Location */}
          <div className="md:col-span-4 relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gold">
              <MapPin size={20} />
            </div>
            <select className="block w-full pl-10 pr-3 py-4 text-gray-700 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-shadow appearance-none cursor-pointer hover:bg-gray-100">
              <option>Toutes les villes</option>
              <option>Le Raincy (93340)</option>
              <option>Villemomble (93250)</option>
              <option>Gagny (93220)</option>
            </select>
          </div>

          {/* Type */}
          <div className="md:col-span-4 relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gold">
              <Home size={20} />
            </div>
            <select className="block w-full pl-10 pr-3 py-4 text-gray-700 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-shadow appearance-none cursor-pointer hover:bg-gray-100">
              <option>Type de bien</option>
              <option>Maison</option>
              <option>Appartement</option>
              <option>Terrain</option>
              <option>Parking</option>
            </select>
          </div>

          {/* Button */}
          <div className="md:col-span-4">
            <button className="w-full bg-chocolate hover:bg-chocolate-dark text-white font-bold py-4 rounded-md shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
              <Search size={20} />
              Rechercher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};