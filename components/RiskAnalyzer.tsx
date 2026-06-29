
import React, { useState, useMemo } from 'react';
import { PharmacogenomicEntry } from '../types';
import { PGX_DATA, CATEGORIES } from '../data/pharmacogenomics';

interface RiskAnalyzerProps {
  selectedDrugs: string[];
  onToggleDrug: (drugName: string) => void;
  results: PharmacogenomicEntry[];
}

const RiskAnalyzer: React.FC<RiskAnalyzerProps> = ({ selectedDrugs, onToggleDrug, results }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [bulkText, setBulkText] = useState('');
  const [showBulkInput, setShowBulkInput] = useState(false);

  const availableDrugs = useMemo(() => 
    Array.from(new Set(PGX_DATA.map(d => d.drug))).sort()
  , []);

  const filteredOptions = availableDrugs.filter(drug => 
    drug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const drugsByCategory = useMemo<Record<string, string[]>>(() => {
    return CATEGORIES.reduce((acc, cat) => {
      const drugsInCat = Array.from(new Set(
        PGX_DATA.filter(d => d.category === cat).map(d => d.drug)
      )).sort();
      acc[cat] = drugsInCat;
      return acc;
    }, {} as Record<string, string[]>);
  }, []);

  const handleProcessBulkText = () => {
    const foundDrugs: string[] = [];
    availableDrugs.forEach(drug => {
      // Búsqueda insensible a mayúsculas/minúsculas dentro del bloque de texto
      const regex = new RegExp(`\\b${drug}\\b`, 'gi');
      if (regex.test(bulkText)) {
        foundDrugs.push(drug);
      }
    });

    foundDrugs.forEach(drug => {
      if (!selectedDrugs.includes(drug)) {
        onToggleDrug(drug);
      }
    });
    
    setBulkText('');
    setShowBulkInput(false);
  };

  // Agrupar los genes que se deben testear
  const genesToTest = useMemo(() => {
    return Array.from(new Set(results.map(r => r.gene)));
  }, [results]);

  return (
    <div className="space-y-12">
      {/* Sección de Entrada */}
      <section className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-indigo-100/40 overflow-hidden transition-all duration-500">
        <div className="bg-gradient-to-b from-indigo-50/50 to-transparent p-8 md:p-12 border-b border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="flex items-center space-x-5">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-200 ring-4 ring-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight italic">Analizador de Medicación</h2>
                <p className="text-slate-500 text-lg font-medium">Detección automática de biomarcadores.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setShowBulkInput(!showBulkInput)}
                className={`px-6 py-3 rounded-2xl font-bold transition-all flex items-center shadow-sm border-2 ${
                  showBulkInput 
                  ? 'bg-rose-50 border-rose-200 text-rose-600' 
                  : 'bg-white border-indigo-100 text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {showBulkInput ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  )}
                </svg>
                {showBulkInput ? 'Cancelar' : 'Pegar Listado Completo'}
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col min-h-[400px]">
            {showBulkInput ? (
              <div className="flex-grow flex flex-col animate-in fade-in slide-in-from-top-4 duration-500">
                <label className="block text-xs font-black text-rose-600 mb-3 uppercase tracking-widest">Pegue el listado de medicación aquí</label>
                <textarea 
                  className="flex-grow w-full p-6 text-slate-700 bg-white border-2 border-indigo-100 rounded-3xl focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300 shadow-inner font-mono text-sm"
                  placeholder="- Atorvastatina 40 mg/24h&#10;- Metformina 850 mg/24h&#10;- Paroxetina 20 mg/Noche..."
                  value={bulkText}
                  onChange={(e) => setBulkText(e.target.value)}
                />
                <button 
                  onClick={handleProcessBulkText}
                  disabled={!bulkText.trim()}
                  className="mt-4 w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Identificar Fármacos Críticos
                </button>
              </div>
            ) : (
              <div className="flex flex-col h-full animate-in fade-in duration-300">
                <div className="relative group mb-6">
                  <label className="block text-xs font-black text-indigo-600 mb-2 uppercase tracking-[0.2em]">Buscador Manual</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ej: Clopidogrel..."
                      className="w-full p-5 pl-14 text-xl border-2 border-slate-200 bg-white rounded-3xl focus:border-indigo-500 outline-none shadow-sm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <svg className="w-8 h-8 text-slate-300 absolute left-4 top-4 group-focus-within:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  {searchTerm && (
                    <div className="absolute mt-2 w-full bg-white border border-slate-200 rounded-3xl shadow-2xl max-h-[250px] overflow-y-auto z-50">
                      {filteredOptions.map((drug) => (
                        <button
                          key={drug}
                          onClick={() => { onToggleDrug(drug); setSearchTerm(''); }}
                          className="w-full text-left px-6 py-4 hover:bg-indigo-50 border-b last:border-0 border-slate-50 flex justify-between"
                        >
                          <span className="font-bold">{drug}</span>
                          <span className="text-indigo-500 text-xs font-black">+ AÑADIR</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex-grow bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 p-8">
                  <h4 className="text-[10px] font-black text-slate-400 mb-6 uppercase tracking-[0.2em] flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Medicamentos con evidencia CPIC ({selectedDrugs.length})
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedDrugs.map(drug => (
                      <button key={drug} onClick={() => onToggleDrug(drug)} className="bg-white border border-indigo-100 text-slate-800 px-4 py-2.5 rounded-xl font-bold text-sm shadow-sm flex items-center hover:bg-rose-50 hover:text-rose-600 transition-colors">
                        {drug}
                        <svg className="w-4 h-4 ml-2 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    ))}
                    {selectedDrugs.length === 0 && <p className="text-slate-400 italic text-sm">No se han seleccionado fármacos de riesgo.</p>}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* RESULTADOS DEL ANÁLISIS */}
      {results.length > 0 && (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b-2 border-slate-100">
            <div>
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">Informe Farmacogenómico</h3>
              <p className="text-slate-500 font-medium">Análisis detallado de RAMs y recomendaciones de Zhao et al. (2025).</p>
            </div>
            <div className="bg-indigo-600 text-white p-6 rounded-3xl shadow-xl shadow-indigo-200">
              <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-80 text-center">Genotipos a Solicitar</p>
              <div className="flex flex-wrap justify-center gap-2">
                {genesToTest.map(gene => (
                  <span key={gene} className="bg-white/20 px-3 py-1 rounded-lg text-xs font-black ring-1 ring-white/30">{gene}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {results.map((res) => (
              <div key={res.id} className="group bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden hover:border-indigo-400 hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className={`h-3 w-full ${res.priority === 'Alta' ? 'bg-rose-500' : 'bg-amber-400'}`}></div>
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-2xl font-black text-slate-900 leading-none mb-2">{res.drug}</h4>
                      <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-[10px] font-black tracking-widest border border-indigo-100 uppercase">Biomarcador: {res.gene}</span>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${res.priority === 'Alta' ? 'bg-rose-500 animate-pulse' : 'bg-amber-400'}`}></div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-rose-50/50 border border-rose-100 p-5 rounded-2xl">
                      <div className="flex items-center text-rose-700 font-black text-[10px] uppercase tracking-widest mb-2">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Riesgo de RAM / Fallo Clínico
                      </div>
                      <p className="text-slate-800 text-sm font-bold leading-relaxed">{res.clinicalNote}</p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Mecanismo Patológico</p>
                      <p className="text-slate-600 text-xs font-medium leading-relaxed italic">{res.mechanism}</p>
                    </div>
                  </div>
                </div>

                <div className={`p-6 mt-auto border-t flex items-center justify-between transition-colors ${
                   res.recommendationType === 'Cambio de Fármaco' ? 'bg-rose-500 text-white' : 'bg-amber-500 text-white'
                }`}>
                  <span className="text-[10px] font-black uppercase tracking-widest">Acción Sugerida:</span>
                  <span className="text-sm font-black italic">{res.recommendationType}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {results.length === 0 && (
        <div className="text-center py-32 bg-slate-50 rounded-[4rem] border-4 border-dashed border-slate-200">
          <div className="max-w-md mx-auto px-10">
            <div className="w-24 h-24 bg-white rounded-[2rem] shadow-xl border border-slate-100 flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h4 className="text-2xl font-black text-slate-800 mb-2">Sin hallazgos detectados</h4>
            <p className="text-slate-500 font-medium">Use el botón <span className="text-indigo-600 font-bold">"Pegar Listado Completo"</span> para analizar el listado del paciente y detectar riesgos ocultos.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RiskAnalyzer;
