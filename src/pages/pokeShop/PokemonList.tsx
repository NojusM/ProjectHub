import { useQuery } from "react-query";
import { getPokemonByPage } from "./getPokemon";
import { useState } from "react";
import "./pokemon.css";
import ItemGrid from "../../components/ItemGrid";

export default function PokemonList() {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: pokemonData,
    isLoading,
    error,
  } = useQuery(["pokemon", currentPage], () => getPokemonByPage(currentPage));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to find Pokemon</div>;
  }

  return (
    <ItemGrid
      data={pokemonData?.pokemon}
      currentPage={currentPage}
      nextPage={pokemonData?.next}
      setCurrentPage={setCurrentPage}
    />
  );
}
