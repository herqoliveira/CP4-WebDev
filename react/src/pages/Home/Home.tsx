import React, { useState } from 'react';

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
    <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Calculadora de IMC</h2>
      <div>
        <label>
          Peso (kg):
          <input 
            type="number" 
            value={peso} 
            onChange={(e) => setPeso(e.target.value)} 
            placeholder="Digite seu peso"
          />
        </label>
      </div>
      <div>
        <label>
          Altura (m):
          <input 
            type="number" 
            value={altura} 
            onChange={(e) => setAltura(e.target.value)} 
            placeholder="Digite sua altura"
            step="0.01"
          />
        </label>
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>

      {/* Exibir erro, se houver */}
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {/* Exibir o resultado do IMC, se calculado */}
      {imc !== null && !erro && (
        <div>
          <h3>Seu IMC é: {imc}</h3>
        </div>
      )}
    </div>
  );
};

export default CalculadoraIMC;