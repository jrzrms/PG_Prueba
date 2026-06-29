
import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="bg-rose-50 border-y border-rose-100 py-6 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center text-rose-600 mb-2">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span className="text-sm font-bold uppercase tracking-widest">Aviso Médico Importante</span>
        </div>
        <p className="text-rose-800 text-sm italic font-medium">
          "Esta herramienta es puramente informativa y se basa estrictamente en el estudio de Zhao et al. (2025). 
          Los resultados son guías de soporte a la decisión y bajo ningún concepto deben interpretarse como consejo médico directo. 
          Cualquier cambio en la medicación o solicitud de pruebas genéticas debe ser estrictamente supervisado por un médico especialista."
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
