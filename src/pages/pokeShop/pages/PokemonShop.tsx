import { useQuery } from "react-query";
import { getPokemon } from "../api/getPokemon";
import Loading from "../../../components/Loading";
import { useMemo } from "react";
import Shop from "../components/Shop";
import { Pokemon } from "../../../types/pokeshopTypes";

const DEFAULT_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";
interface Data {
  prices: number[];
  baseExps: number[];
  heights: number[];
  weights: number[];
  sprites: string[];
  names: string[];
}

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

  const { prices, baseExps, heights, weights, sprites, names }: Data =
    useMemo(() => {
      if (!pokemonData)
        return {
          prices: [],
          baseExps: [],
          heights: [],
          weights: [],
          sprites: [],
          names: [],
        };
      const pokemon = pokemonData?.pokemon;
      const prices: number[] = pokemon.map((poke: Pokemon) => poke.price);
      const baseExps: number[] = pokemon.map(
        (poke: Pokemon) => poke.base_experience
      );
      const heights: number[] = pokemon.map((poke: Pokemon) => poke.height);
      const weights: number[] = pokemon.map((poke: Pokemon) => poke.weight);
      const sprites: string[] = pokemon.map(
        (poke: Pokemon) => poke.sprites?.front_default || DEFAULT_IMG
      );
      const names: string[] = pokemon.map((poke: Pokemon) => poke.name);
      return { prices, baseExps, heights, weights, sprites, names };
    }, [pokemonData?.pokemon]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Failed to find Pokemon</div>;
  }

  const items = sprites.map((sprite, index) => ({
    img: sprite,
    name: names[index],
    info: [
      { value: prices[index], units: "$" },
      { value: baseExps[index], units: "xp" },
      { value: heights[index], units: "dm" },
      { value: weights[index], units: "hg" },
    ],
  }));
  return (
    <Shop
      rangesData={[
        { data: prices, title: "Price", units: "$" },
        { data: baseExps, title: "Base Experience", units: "xp" },
        { data: heights, title: "Height", units: "dm" },
        { data: weights, title: "Weight", units: "hg" },
      ]}
      gridData={items}
    />
  );
}
