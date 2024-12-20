import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import Button from "./components/Button/Button";
import { fetchRandomPokemon } from "./services/api";
import "./styles/globals.css";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchPokemon = () => {
    setLoading(true);
    fetchRandomPokemon()
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore:", error);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <h1>Pokémon Random React</h1>
      <Button onClick={handleFetchPokemon}>
        {loading ? "Caricamento..." : "Mostra Pokémon"}
      </Button>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;
