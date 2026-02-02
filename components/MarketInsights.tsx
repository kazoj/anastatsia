import React, { useState } from 'react';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { getMarketInsights } from '../services/geminiService';
import { MarketInsight } from '../types';

export const MarketInsights: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState<MarketInsight | null>(null);

  const predefinedQueries = [
    "Prix m² Le Raincy",
    "Tendances immobilier 93",
    "Villemomble vs Gagny"
  ];

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setQuery(searchQuery);
    const result = await getMarketInsights(searchQuery);
    setInsight(result);
    setLoading(false);
  };

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-gray-900 to-chocolate rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-gold-light text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} />
              Assistant IA Anastasia
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-4">
              Experts du marché local
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Posez une question à notre intelligence artificielle pour obtenir des tendances de marché en temps réel et des analyses précises sur votre secteur.
            </p>

            {/* Input */}
            <div className="relative max-w-lg mx-auto mb-6">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex: Quel est le prix moyen d'une maison au Raincy ?"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-full py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-gold focus:bg-black/20 transition-all backdrop-blur-sm"
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
              />
              <button 
                onClick={() => handleSearch(query)}
                className="absolute right-2 top-2 bg-gold hover:bg-gold-dark text-chocolate p-2 rounded-full transition-colors"
                disabled={loading}
              >
                {loading ? (
                    <div className="w-5 h-5 border-2 border-chocolate border-t-transparent rounded-full animate-spin"></div>
                ) : (
                    <ArrowRight size={20} />
                )}
              </button>
            </div>

            {/* Predefined Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {predefinedQueries.map((q) => (
                <button 
                  key={q}
                  onClick={() => handleSearch(q)}
                  className="text-xs text-gray-300 bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-white/10 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Results Display */}
            {insight && (
              <div className="bg-white rounded-xl p-6 text-left shadow-lg animate-fade-in text-gray-800">
                 <h4 className="font-bold text-chocolate mb-2 flex items-center gap-2">
                    <Sparkles size={16} className="text-gold"/> Réponse
                 </h4>
                 <p className="text-sm leading-relaxed mb-4">
                   {insight.answer}
                 </p>
                 {insight.sources && insight.sources.length > 0 && (
                   <div className="border-t pt-3">
                     <span className="text-xs font-bold text-gray-400 uppercase">Sources</span>
                     <div className="flex flex-wrap gap-2 mt-2">
                        {insight.sources.map((source, idx) => (
                          <a 
                            key={idx} 
                            href={source.uri} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center gap-1 text-xs text-blue-600 hover:underline bg-blue-50 px-2 py-1 rounded"
                          >
                            {source.title} <ExternalLink size={10} />
                          </a>
                        ))}
                     </div>
                   </div>
                 )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};