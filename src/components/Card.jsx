// Si usas Next.js descomenta:
// import Image from "next/image";
import '../styles/index.css' 

export default function Card({onClick, id, name}) {
  return (
    <div onClick={onClick} className="max-w-sm rounded overflow-hidden shadow-lg w-60 h-64 transition-transform duration-200 hover:scale-105 hover:cursor-pointer" key={id}>
      {/* Usa img si no estás en Next.js */}
        <div className="flex justify-center">
            <img
            className="w-48 pt-4 px-4"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
            />
        </div>
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{name}</div>
      </div>
    </div>
  );
}
