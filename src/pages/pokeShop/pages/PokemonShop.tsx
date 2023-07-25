import { useQuery } from "react-query";
import { getPokemon } from "../api/getPokemon";
import ItemGrid from "../components/ItemGrid";
import Sidebar from "../Sidebar";
import Loading from "../../../components/Loading";
import { useMemo } from "react";

export default function PokemonShop() {
  const {
    data: pokemonData,
    isLoading,
    error,
  } = useQuery("pokemon", () => getPokemon(), {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Failed to find Pokemon</div>;
  }

  const { prices, baseExps, heights, weights } = useMemo(() => {
    const pokemon = pokemonData?.pokemon;
    const prices: number[] = pokemon.map((poke: any) => poke.price);
    const baseExps: number[] = pokemon.map((poke: any) => poke.base_experience);
    const heights: number[] = pokemon.map((poke: any) => poke.height);
    const weights: number[] = pokemon.map((poke: any) => poke.weight);
    return { prices, baseExps, heights, weights };
  }, [pokemonData?.pokemon]);

  return (
    <div className="pokemonshop-wrapper">
      <Sidebar
        rangesData={[
          { data: prices, title: "Price", units: "$" },
          { data: baseExps, title: "Base Experience", units: "xp" },
          { data: heights, title: "Height", units: "dm" },
          { data: weights, title: "Weight", units: "hg" },
        ]}
      ></Sidebar>
      <ItemGrid data={pokemonData?.pokemon} />
    </div>
  );
}
