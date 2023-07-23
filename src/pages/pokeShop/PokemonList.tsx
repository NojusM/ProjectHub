import { useQuery } from "react-query";
import { getPokemonByPage } from "./getPokemon";
import { useState } from "react";
import "./pokemon.css";

export default function PokemonList() {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: pokemonData,
    isLoading,
    error,
    refetch,
  } = useQuery(["pokemon", currentPage], () => getPokemonByPage(currentPage));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to find Pokemon</div>;
  }

  return (
    <div className="pokeshop-wrapper">
      <div className="pokeshop-items">
        <ul className="pokemon-grid-wrapper">
          {pokemonData?.pokemon.map((pokemon: any) => (
            <div key={pokemon.name} className="pokemon-grid-item">
              <div className="pokemon-content">
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.front_default} />
              </div>
            </div>
          ))}
        </ul>
        <div className="pokeshop-buttons">
          <button
            className="button"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <div className="pokeshop-page-number">{currentPage}</div>
          <button
            className="button"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={!pokemonData?.next}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}
