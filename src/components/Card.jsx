// Si usas Next.js descomenta:
// import Image from "next/image";
import '../styles/index.css' 

export default function Card({onClick, id, name}) {
  return (
    <div onClick={onClick} className="max-w-sm rounded overflow-hidden shadow-lg w-36 sm:w-44 md:w-52 lg:w-60 h-40 sm:h-48 md:h-56 lg:h-60 transition-transform duration-200 hover:scale-105 hover:cursor-pointer" key={id}>
      {/* Usa img si no estás en Next.js */}
        <div className="flex justify-center">
            <img
            className="w-28 sm:w-34 md:w-40 lg:w-46 pt-4 px-4"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
            />
        </div>
      <div className="px-6 py-4">
        <div className="font-bold  mb-2 sm:text-lg md:text-xl lg:text-2xl">{name}</div>
      </div>
    </div>
  );
}
