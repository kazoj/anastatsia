import React from 'react';
import { PropertyCard } from './PropertyCard';
import { Property } from '../types';

export const PropertyGrid: React.FC = () => {
  // Mock Data mimicking the mix of items
  const properties: Property[] = [
    {
      id: '1',
      title: 'Villa d\'Architecte',
      price: 890000,
      location: 'Villemomble (93250)',
      beds: 5,
      baths: 3,
      sqft: 220,
      type: 'Villa',
      status: 'Sale',
      isNew: true,
      imageUrl: 'https://image2url.com/r2/default/images/1770025252302-6a84a95c-911d-43ff-8fc3-63e1707c431e.png',
      description: 'A stunning architectural villa with a large garden and modern amenities, located in the peaceful area of Villemomble.'
    },
    {
      id: '2',
      title: 'Appartement Haussmannien',
      price: 450000,
      location: 'Le Raincy (93340)',
      beds: 3,
      baths: 1,
      sqft: 95,
      type: 'Apartment',
      status: 'Sale',
      isNew: false,
      imageUrl: 'https://image2url.com/r2/default/images/1770025268637-d6c3d0b3-130b-449b-b759-875d7d5b9f57.png',
      description: 'Classic Haussmann style apartment in the heart of Le Raincy. High ceilings, parquet floors, and moldings.'
    },
    {
      id: '3',
      title: 'Maison Familiale',
      price: 620000,
      location: 'Gagny (93220)',
      beds: 4,
      baths: 2,
      sqft: 150,
      type: 'House',
      status: 'Sale',
      isNew: true,
      imageUrl: 'https://image2url.com/r2/default/images/1770025290404-091b9f52-952b-4742-bca9-43e02e387908.png',
      description: 'Perfect family home near schools and parks. Spacious living room and renovated kitchen.'
    },
     {
      id: '4',
      title: 'Loft Moderne',
      price: 1200,
      location: 'Le Raincy (93340)',
      beds: 1,
      baths: 1,
      sqft: 60,
      type: 'Apartment',
      status: 'Rent',
      isNew: false,
      imageUrl: 'https://image2url.com/r2/default/images/1770025186534-fb737117-dcef-462d-a5bd-4e9bbbcb1405.png',
      description: 'Modern loft for rent. Open plan living, industrial style, very bright.'
    },
     {
      id: '5',
      title: 'Pavillon avec Jardin',
      price: 550000,
      location: 'Villemomble (93250)',
      beds: 3,
      baths: 1,
      sqft: 110,
      type: 'House',
      status: 'Sale',
      isNew: false,
      imageUrl: 'https://image2url.com/r2/default/images/1770025252302-6a84a95c-911d-43ff-8fc3-63e1707c431e.png',
      description: 'Charming pavilion with a private garden. Needs some refreshment but great potential.'
    },
     {
      id: '6',
      title: 'Duplex Terrasse',
      price: 720000,
      location: 'Le Raincy (93340)',
      beds: 4,
      baths: 2,
      sqft: 130,
      type: 'Apartment',
      status: 'Sale',
      isNew: true,
      imageUrl: 'https://image2url.com/r2/default/images/1770025268637-d6c3d0b3-130b-449b-b759-875d7d5b9f57.png',
      description: 'Top floor duplex with a magnificent terrace offering panoramic views of the city.'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-bold tracking-widest uppercase">Opportunités</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mt-2 mb-4">Nos Dernières Annonces</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="bg-transparent border-2 border-chocolate text-chocolate px-10 py-3 rounded hover:bg-chocolate hover:text-white transition-colors duration-300 font-bold tracking-wide">
                Voir toutes nos offres
            </button>
        </div>
      </div>
    </section>
  );
};