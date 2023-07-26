import { useState } from "react";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Pokemon, PokemonApiResponse } from "../../../types/pokeshopTypes";

export default function ItemZoom() {
  const { name } = useParams();
  const queryClient = useQueryClient();
  const pokemonData = queryClient.getQueryData("pokemon") as PokemonApiResponse;
  if (!pokemonData?.pokemon) {
    return <div>Pokemon have ran away :{"("}</div>;
  }

  const pokemon = pokemonData?.pokemon.find((poke) => poke.name === name);

  return !pokemon ? (
    <div>Pokemon not found!</div>
  ) : (
    <div>
      {pokemon.height}
      {pokemon.name}
    </div>
  );
}
