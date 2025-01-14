import React from "react";
import styles from "./PokemonCard.module.css";

export default function PokemonCard({ pokemon }) {
  if (!pokemon) return <p>Press the button to display a Pokémon!</p>;

  const bestMoves = pokemon.moves.slice(0, 4); // Assuming the first 4 moves are the best

  return (
    <div className={styles.pokemonCard}>
      <div className={styles.content}>
        <div className={styles.details}>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
        </div>
        <div className={styles.stats}>
          <h4>Stats:</h4>
          {pokemon.stats.map((stat) => (
            <div key={stat.stat.name} className={styles.stat}>
              <span>{stat.stat.name}</span>
              <span>{stat.base_stat}</span>
            </div>
          ))}
        </div>
        <div className={styles.moves}>
          <h4>Best Moves:</h4>
          {bestMoves.map((move) => (
            <div key={move.move.name} className={styles.move}>
              {move.move.name}
            </div>
          ))}
        </div>
        <div className={styles.locations}>
          <h4>Games:</h4>
          <p>
            {pokemon.game_indices.map((game) => game.version.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
