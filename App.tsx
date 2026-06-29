
import React, { useState, useMemo } from 'react';
import { PGX_DATA, CATEGORIES } from './data/pharmacogenomics';
import { PharmacogenomicEntry } from './types';
import Catalog from './components/Catalog';
import RiskAnalyzer from './components/RiskAnalyzer';
import Header from './components/Header';
import Disclaimer from './components/Disclaimer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'analyzer' | 'catalog'>('analyzer');
  const [selectedDrugs, setSelectedDrugs] = useState<string[]>([]);

  const handleToggleDrug = (drugName: string) => {
    setSelectedDrugs(prev => 
      prev.includes(drugName) 
        ? prev.filter(d => d !== drugName) 
        : [...prev, drugName]
    );
  };

  const analyzedResults = useMemo(() => {
    return PGX_DATA.filter(item => selectedDrugs.includes(item.drug));
  }, [selectedDrugs]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-200 rounded-xl shadow-inner">
            <button
              onClick={() => setActiveTab('analyzer')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'analyzer' 
                  ? 'bg-white text-indigo-700 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Analizador Interactivo
            </button>
            <button
              onClick={() => setActiveTab('catalog')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'catalog' 
                  ? 'bg-white text-indigo-700 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Catálogo de Evidencia
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-slate-100">
          {activeTab === 'analyzer' ? (
            <RiskAnalyzer 
              selectedDrugs={selectedDrugs} 
              onToggleDrug={handleToggleDrug} 
              results={analyzedResults}
            />
          ) : (
            <Catalog data={PGX_DATA} />
          )}
        </div>
      </main>

      <Disclaimer />
      
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm border-t border-slate-800">
        <p>© 2025 FarmacoGen - Basado en la metodología de Zhao et al. (2025) y Guías CPIC.</p>
      </footer>
    </div>
  );
};

export default App;
