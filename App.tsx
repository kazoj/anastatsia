import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { PropertyGrid } from './components/PropertyGrid';
import { MarketInsights } from './components/MarketInsights';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SearchBar />
        <PropertyGrid />
        <MarketInsights />
      </main>
      <Footer />
    </div>
  );
}

export default App;