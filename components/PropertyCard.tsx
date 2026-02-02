import React, { useState, useRef } from 'react';
import { Bed, Bath, Move, Volume2, PauseCircle, PlayCircle } from 'lucide-react';
import { Property } from '../types';
import { generatePropertyAudio } from '../services/geminiService';

interface Props {
  property: Property;
}

export const PropertyCard: React.FC<Props> = ({ property }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);

  const handleAudio = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isPlaying) {
      sourceRef.current?.stop();
      setIsPlaying(false);
      return;
    }

    setIsLoadingAudio(true);
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const ctx = audioContextRef.current;
      const arrayBuffer = await generatePropertyAudio(
        `A beautiful ${property.type} in ${property.location}. This property features ${property.beds} bedrooms, ${property.baths} bathrooms, and is listed at ${property.price.toLocaleString('fr-FR')} Euros. ${property.description}`
      );

      if (arrayBuffer && ctx) {
        const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
        const source = ctx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(ctx.destination);
        source.onended = () => setIsPlaying(false);
        source.start(0);
        sourceRef.current = source;
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Audio playback error", error);
    } finally {
      setIsLoadingAudio(false);
    }
  };

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {property.isNew && (
          <div className="absolute top-4 left-0 bg-accent text-white text-xs font-bold px-3 py-1 shadow-md uppercase tracking-wider">
            Nouveau
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-chocolate font-bold text-sm px-3 py-1 rounded-sm shadow-sm">
          {property.status === 'Sale' ? 'Vente' : 'Location'}
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Audio Button */}
        <button 
          onClick={handleAudio}
          disabled={isLoadingAudio}
          className="absolute bottom-4 right-4 bg-white/90 hover:bg-gold text-chocolate p-2 rounded-full shadow-lg transform translate-y-10 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 px-3"
          title="Écouter la description (IA)"
        >
          {isLoadingAudio ? (
            <div className="w-4 h-4 border-2 border-chocolate border-t-transparent rounded-full animate-spin"></div>
          ) : isPlaying ? (
            <>
              <PauseCircle size={18} /> <span className="text-xs font-bold">Stop</span>
            </>
          ) : (
             <>
              <Volume2 size={18} /> <span className="text-xs font-bold">Écouter</span>
            </>
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
           <h3 className="font-serif text-xl font-bold text-gray-800 line-clamp-1 group-hover:text-chocolate transition-colors">
             {property.title}
           </h3>
        </div>
        <p className="text-gold-dark font-bold text-lg mb-4">
          {property.price.toLocaleString('fr-FR')} €
        </p>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPinIcon className="w-4 h-4 mr-1 text-gray-400" />
          {property.location}
        </div>

        {/* Specs */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-gray-500 text-sm">
          <div className="flex items-center gap-2" title="Chambres">
            <Bed size={18} className="text-gold" />
            <span>{property.beds}</span>
          </div>
          <div className="flex items-center gap-2" title="Salles de bain">
            <Bath size={18} className="text-gold" />
            <span>{property.baths}</span>
          </div>
          <div className="flex items-center gap-2" title="Surface">
            <Move size={18} className="text-gold" />
            <span>{property.sqft} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MapPinIcon = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
  </svg>
);
