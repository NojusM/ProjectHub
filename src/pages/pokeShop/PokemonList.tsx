import { useQuery } from "react-query";
import getPokemon from "./getPokemon";

export default function PokemonList() {
  const { data: pokemon, isLoading, error } = useQuery("pokemon", getPokemon);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to find Pokemon</div>;
  }

  return (
    <div>
      <h2>PokemonList</h2>
      <ul>
        {pokemon?.map((pokemonData: any) => (
          <li key={pokemonData.name}>{pokemonData.name}</li>
        ))}
      </ul>
    </div>
  );
}
