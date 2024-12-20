import React from "react";
import styles from "./PokemonCard.module.css";

export default function PokemonCard({ pokemon }) {
  if (!pokemon) return <p>Premi il pulsante per visualizzare un Pokémon!</p>;

  return (
    <div className={styles.pokemonCard}>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Tipo: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
    </div>
  );
}
