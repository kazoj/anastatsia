import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-chocolate text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-serif text-2xl font-bold mb-4 tracking-widest">ANASTASIA</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Votre partenaire de confiance pour l'immobilier d'exception dans l'Est Parisien. Tradition, modernité et expertise depuis 30 ans.
          </p>
          <div className="flex space-x-4">
             <a href="#" className="text-gold hover:text-white transition-colors"><Facebook size={20}/></a>
             <a href="#" className="text-gold hover:text-white transition-colors"><Instagram size={20}/></a>
             <a href="#" className="text-gold hover:text-white transition-colors"><Linkedin size={20}/></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-gold text-sm uppercase tracking-wider mb-6">Navigation</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Accueil</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Nos Biens</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Vendre</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Estimation</a></li>
          </ul>
        </div>

         {/* Agences */}
         <div>
          <h4 className="font-bold text-gold text-sm uppercase tracking-wider mb-6">Nos Agences</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-gold mt-1 shrink-0" />
              <span>12 Allée de l'Église,<br/>93340 Le Raincy</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-gold mt-1 shrink-0" />
              <span>45 Avenue du Général de Gaulle,<br/>93250 Villemomble</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
           <h4 className="font-bold text-gold text-sm uppercase tracking-wider mb-6">Contact</h4>
           <ul className="space-y-4 text-sm text-gray-300">
             <li className="flex items-center gap-2">
               <Phone size={16} className="text-gold" />
               01 43 00 00 00
             </li>
             <li className="flex items-center gap-2">
               <Mail size={16} className="text-gold" />
               contact@anastasia.immo
             </li>
           </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-400">
         <p>&copy; {new Date().getFullYear()} Anastasia Immobilier. Tous droits réservés. Mentions Légales.</p>
      </div>
    </footer>
  );
};