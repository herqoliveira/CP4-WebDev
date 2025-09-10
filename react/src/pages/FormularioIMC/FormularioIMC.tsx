import React from 'react';

interface FormularioIMCProps {
  peso: string;
  altura: string;
  setPeso: React.Dispatch<React.SetStateAction<string>>;
  setAltura: React.Dispatch<React.SetStateAction<string>>;
}

const FormularioIMC: React.FC<FormularioIMCProps> = ({ peso, altura, setPeso, setAltura }) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center">
        <label className="text-black text-lg">Peso (kg)</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Digite seu peso"
          className="mt-2 p-2 w-60 rounded-lg text-black"
        />
      </div>
      <div className="flex flex-col items-center">
        <label className="text-black text-lg">Altura (m)</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Digite sua altura"
          step="0.01"
          className="mt-2 p-2 w-60 rounded-lg text-black"
        />
      </div>
    </div>
  );
};

export default FormularioIMC;