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
    <div className='min-h-screen bg-gray-800 text-black px-30 flex flex-col justify-center items-center'>
        <div className='bg-white w-100 h-100 flex flex-col rounded-lg'>
            <img className='w-100 h-60 rounded-lg px-10 py-10' src="https://www.saboravida.com.br/wp-content/uploads/2023/11/Depositphotos_121622358_XL-scaled.webp" alt="" />
            <h2 className='text-center'>Calculadora de IMC</h2>
            <div>
                <label className='px-10'>
                Peso (kg):
                <input 
                    className='text-black-300'
                    type="number" 
                    value={peso} 
                    onChange={(e) => setPeso(e.target.value)} 
                    placeholder="Digite seu peso"
                />
                </label>
            </div>
            <div>
                <label className='px-10'>
                Altura (m):
                <input 
                    className='text-black-300'
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
                <div className='text-center'>
                <h3>Seu IMC é: {imc}</h3>
                </div>
            )}
            </div>
        </div> 
  );
};

export default CalculadoraIMC;