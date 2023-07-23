import axios from "axios";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon";

export default async function getPokemon() {
  let allPokemon: any = [];

  async function fetchPokemon(url: string) {
    try {
      const response = await axios.get(url);
      const data = response.data;
      allPokemon = allPokemon.concat(data.results);

      if (data.next) {
        await fetchPokemon(data.next);
      }
    } catch (error) {
      console.error("Failed to fetch Pokémon:", error);
    }
  }

  await fetchPokemon(POKEMON_API);

  return allPokemon;
}
