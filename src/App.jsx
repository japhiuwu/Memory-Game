import { useEffect, useState } from "react";
import Card from "./components/Card"
import './styles/App.css'

export default function Clock() {
const [posts, setPosts] = useState([]);
const [selected, setSelected] = useState([]);
const [update, setUpdate] = useState(0);
const [aciertos, setAciertos] = useState(0);
const [highScore, setHighScore] = useState(0);
const [cantidad, setCantidad] = useState(10);

  function actualizarCantidad(e) {
    setCantidad(e.target.value)
  }

  function actualizarPokemones() {
    const tempUpdate = update == 1 ? 0 : 1;
    setUpdate(tempUpdate)
  }

   useEffect(() => {
    let offSet = getRandomArbitrary(0,1031)
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${cantidad}&offset=${offSet}`)
    .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data.results);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, [cantidad,update]);

   const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  function obtenerIdPokemon(url){
    const parts = url.split("/").filter(Boolean);
    return parts[parts.length - 1];
  }

  function selectPokemon(id){
    if(selected.includes(id)){
      setAciertos(0)
      setSelected([])
    } else {
      setAciertos(aciertos + 1)
      setSelected(prev => [...prev, id]);
      if (aciertos + 1 > highScore) {
        setHighScore(aciertos + 1);
      }
      sortPokemons()
    }
  }

  function sortPokemons(){
    setPosts(prevPosts => {
      const shuffled = [...prevPosts].sort(() => Math.random() - 0.5);
      return shuffled;
    });
  }

  return (
    <div>
      <div className="flex justify-around">
        <div className="flex flex-col text-left">
          <span>High Score: {highScore}</span>
          <span className={aciertos === 0 ? 'text-red-500' : 'text-green-600'}>Aciertos: {aciertos}</span>
        </div>
        <button type="button" className="w-32 rounded shadow-lg transition-transform duration-200 hover:scale-105 hover:cursor-pointer" onClick={actualizarPokemones}>Actualizar</button>
        <div className="py-auto text-center">
          <label htmlFor="cantidad">Cantidad: </label>
          <select name="cantidad" id="cantidad" onChange={actualizarCantidad}>
            {Array.from({ length: 11 }, (_, i) => i + 10).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-row w-min-full h-min-screen flex-wrap justify-center content-center space-around gap-5 py-2 mt-10">

        {posts.map((post) => (
          <Card onClick={() => selectPokemon(obtenerIdPokemon(post.url))} key={obtenerIdPokemon(post.url)} id={obtenerIdPokemon(post.url)} name={post.name} />
        ))}
      </div>

    </div>

  );
}
