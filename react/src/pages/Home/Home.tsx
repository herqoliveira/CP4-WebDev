export default function Home() {
    return (
    <div className="min-h-screen bg-gray-900 ">
        <div className="justify-center flex flex-col items-center">
            <img className="w-45 h-60 rounded-lg py-8" src="https://tse4.mm.bing.net/th/id/OIP.H68FgWBoEUyq0ZbLxHca3QHaEf?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            <h3 className="text-white py-10 text-lg">Vamos calcular o seu índice de massa corporal (IMC)</h3>
        </div>
        <input type="number" />
    </div>
    );
}
