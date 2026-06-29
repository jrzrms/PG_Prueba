
import React, { useState } from 'react';
import { PharmacogenomicEntry } from '../types';

interface CatalogProps {
  data: PharmacogenomicEntry[];
}

const Catalog: React.FC<CatalogProps> = ({ data }) => {
  const [filter, setFilter] = useState('');
  
  const filteredData = data.filter(item => 
    item.drug.toLowerCase().includes(filter.toLowerCase()) || 
    item.category.toLowerCase().includes(filter.toLowerCase()) ||
    item.gene.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Catálogo de Recomendaciones</h2>
          <p className="text-slate-500">Listado completo de fármacos nivel A según Zhao et al. (2025).</p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Filtrar catálogo..."
            className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none w-full md:w-64"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <svg className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Fármaco</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Gen / Biomarcador</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Categoría</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Acción CPIC</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Prioridad</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-bold text-slate-900">{item.drug}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {item.gene}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                  {item.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                    item.recommendationType === 'Cambio de Fármaco' 
                      ? 'border-rose-200 bg-rose-50 text-rose-700' 
                      : 'border-amber-200 bg-amber-50 text-amber-700'
                  }`}>
                    {item.recommendationType}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`text-xs font-bold ${
                    item.priority === 'Alta' ? 'text-rose-600' : 'text-amber-500'
                  }`}>
                    {item.priority}
                  </span>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-slate-400 italic">
                  No se encontraron resultados para los criterios de búsqueda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
        <h4 className="font-bold text-indigo-900 mb-2 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          ¿Por qué es crítico el genotipo?
        </h4>
        <p className="text-sm text-indigo-800 leading-relaxed">
          La evidencia CPIC Nivel A indica que existe un fuerte consenso clínico sobre la utilidad de las pruebas genéticas antes de iniciar el tratamiento. Por ejemplo, en el caso del <span className="font-bold">CYP2C19</span> y el <span className="font-bold">clopidogrel</span>, los metabolizadores lentos no activan el fármaco, lo que resulta en un alto riesgo de eventos cardiovasculares recurrentes si no se cambia a una alternativa como el ticagrelor.
        </p>
      </div>
    </div>
  );
};

export default Catalog;
