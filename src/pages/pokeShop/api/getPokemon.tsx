import axios from "axios";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemon() {
  try {
    const response = await axios.get(`${POKEMON_API}?limit=1000`);
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