import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = useState([]);

  const onClickHandler = () => {

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(res => {
      console.log(res);
      setPokemons(res.data.results)
    })
    .catch(err => console.log(err))
  


  }
  return (
    <div className="App">
      <button onClick={onClickHandler} className='btn btn-lg btn-secondary'>Fetch Pokemon</button>

      {
        pokemons.map((pokemon, i) => {
          return <ul key={i}><li>{pokemon.name}</li></ul>
        })
      }
    </div>
  );





}

export default App;
