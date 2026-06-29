
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-700 via-indigo-800 to-slate-900 text-white py-12 px-4 shadow-lg">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="inline-block p-3 bg-indigo-500/30 rounded-full mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.283a2 2 0 01-1.631 0l-.628-.283a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-.513.513a2 2 0 000 2.828l1.285 1.285a2 2 0 002.828 0l6.414-6.414a2 2 0 000-2.828L11.553 3.553a2 2 0 00-2.828 0L7.44 4.838a2 2 0 000 2.828l6.414 6.414a2 2 0 002.828 0l1.285-1.285a2 2 0 000-2.828l-.513-.513z" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">FarmacoGen Expert</h1>
        <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Asistente clínico para la implementación de farmacogenómica en adultos mayores, basado en el estudio de <span className="font-medium text-white italic">Zhao et al. (2025)</span> y guías <span className="font-semibold text-white">CPIC Nivel A</span>.
        </p>
      </div>
    </header>
  );
};

export default Header;
