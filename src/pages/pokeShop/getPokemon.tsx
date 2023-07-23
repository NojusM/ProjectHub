import axios from "axios";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemonByPage(page: number) {
  try {
    const response = await axios.get(
      `${POKEMON_API}?offset=${(page - 1) * 20}&limit=20`
    );
    const data = response.data;

    const extraInfoResponses = await Promise.all(
      data.results.map((pokemon: any) => axios.get(pokemon.url))
    );
    const pokemon = extraInfoResponses.map((res) => res.data);

    return { pokemon, ...data };
  } catch (error) {
    console.error("Failed to fetch Pokémon:", error);
    throw error;
  }
}
