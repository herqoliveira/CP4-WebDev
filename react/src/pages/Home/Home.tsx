import React, { useState } from 'react';
import FormularioIMC from '../FormularioIMC/FormularioIMC';
import ResultadoIMC from '../ResultadoIMC/ResultadoIMC';

const CalculadoraIMC: React.FC = () => {
  const [peso, setPeso] = useState<string>(''); 
  const [altura, setAltura] = useState<string>(''); 
  const [imc, setImc] = useState<string | null>(null); 
  const [erro, setErro] = useState<string>(''); 

  const calcularIMC = () => {
    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura);

    if (isNaN(pesoFloat) || isNaN(alturaFloat) || pesoFloat <= 0 || alturaFloat <= 0) {
      setErro('Por favor, insira valores válidos para peso e altura.');
      setImc(null);
      return;
    }

    const imcCalculado = pesoFloat / (alturaFloat * alturaFloat);
    setImc(imcCalculado.toFixed(2)); 
    setErro('');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-10">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6">
        <img
          className="w-full h-52 object-cover rounded-lg mb-6"
          src="https://www.saboravida.com.br/wp-content/uploads/2023/11/Depositphotos_121622358_XL-scaled.webp"
          alt="Cálculo de IMC"
        />

        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Calculadora de IMC</h2>

        <FormularioIMC peso={peso} altura={altura} setPeso={setPeso} setAltura={setAltura} />

        <div className="flex justify-center mt-6">
          <button
            onClick={calcularIMC}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Calcular IMC
          </button>
        </div>

        <ResultadoIMC imc={imc} erro={erro} />
      </div>
    </div>
  );
};

export default CalculadoraIMC;