import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105"
        style={{ 
          backgroundImage: "url('https://image2url.com/r2/default/images/1770024502312-98d2f182-0649-4729-b0dc-b42733140988.png')" 
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-between pt-20">
        
        {/* Left: Main Headings */}
        <div className="max-w-2xl text-white space-y-6 animate-fade-in-up">
          <div className="inline-block px-3 py-1 border border-gold/50 rounded-full text-gold-light text-xs tracking-widest uppercase mb-2 bg-black/30 backdrop-blur-sm">
            Depuis 1995
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
            L'Art de Vivre <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">Immobilier</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-lg">
            Votre agence de confiance au Raincy et à Villemomble. 
            Découvrez une sélection exclusive de biens d'exception.
          </p>
          <div className="pt-4 flex gap-4">
             <button className="bg-white text-chocolate px-8 py-3 rounded-sm font-semibold hover:bg-gray-100 transition-colors">
                Nos Agences
             </button>
             <button className="border border-white/40 text-white px-8 py-3 rounded-sm font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                Contactez-nous
             </button>
          </div>
        </div>

        {/* Right: Featured Property Glass Card */}
        <div className="hidden md:block w-80 relative group cursor-pointer">
            {/* Floating Element */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gold rounded-full flex items-center justify-center text-chocolate font-bold text-xs shadow-xl z-20 animate-bounce-slow">
               Coup de<br/>Cœur
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl transition-transform transform group-hover:-translate-y-2 duration-500">
               <div className="h-48 w-full rounded-lg bg-gray-200 mb-4 overflow-hidden relative">
                  <img src="https://image2url.com/r2/default/images/1770025186534-fb737117-dcef-462d-a5bd-4e9bbbcb1405.png" alt="Featured" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                  <div className="absolute bottom-2 left-2 bg-chocolate/90 text-white text-xs px-2 py-1 rounded">
                    Exclusivité
                  </div>
               </div>
               <h3 className="text-white font-serif text-xl mb-1">Villa Villemomble</h3>
               <p className="text-gray-300 text-sm mb-3 flex items-center gap-1">
                 <Star size={12} className="text-gold fill-gold"/> Quartier des Coquetiers
               </p>
               <div className="flex justify-between items-end border-t border-white/10 pt-3">
                  <span className="text-gold font-bold text-lg">890 000 €</span>
                  <div className="bg-white/20 p-2 rounded-full text-white group-hover:bg-gold group-hover:text-chocolate transition-colors">
                     <ArrowRight size={16} />
                  </div>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};