import axios from "axios";

// Funzione per ottenere un ID casuale (da 1 a 1010, che sono i Pokémon disponibili)
const getRandomPokemonId = () => Math.floor(Math.random() * 1010) + 1;

// Funzione per ottenere i dettagli di un Pokémon casuale
export const fetchRandomPokemon = () => {
  const randomId = getRandomPokemonId();
  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Errore durante il recupero del Pokémon casuale:", error);
      return null;
    });
};
