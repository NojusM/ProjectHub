import { useQuery } from "react-query";
import { getPokemon } from "./api/getPokemon";
import "./pokemon.css";
import ItemGrid from "./components/ItemGrid";
import Sidebar from "./components/Sidebar";

export default function PokemonList() {
  const {
    data: pokemonData,
    isLoading,
    error,
  } = useQuery("pokemon", () => getPokemon());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to find Pokemon</div>;
  }

  return (
    <div className="pokeshop-wrapper">
      <Sidebar />
      <ItemGrid data={pokemonData?.pokemon} />
    </div>
  );
}
