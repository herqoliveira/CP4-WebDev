import React from 'react';

interface ResultadoIMCProps {
  imc: string | null;
  erro: string;
}

const ResultadoIMC: React.FC<ResultadoIMCProps> = ({ imc, erro }) => {
  return (
    <div className="mt-6 text-center">
      
      {erro && <p className="text-red-500">{erro}</p>}

      {imc !== null && !erro && (
        <div>
          <h3 className="text-2xl font-semibold">Seu IMC é: {imc}</h3>
        </div>
      )}
    </div>
  );
};

export default ResultadoIMC;
