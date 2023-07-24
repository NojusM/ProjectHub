import { useQuery } from "react-query";
import { getPokemonByPage } from "./getPokemon";
import "./pokemon.css";
import ItemGrid from "../../components/ItemGrid";

export default function PokemonList() {
  const {
    data: pokemonData,
    isLoading,
    error,
  } = useQuery("pokemon", () => getPokemonByPage());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to find Pokemon</div>;
  }

  return <ItemGrid data={pokemonData?.pokemon} />;
}
