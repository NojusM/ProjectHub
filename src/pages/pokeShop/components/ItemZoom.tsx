import { useState } from "react";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Pokemon, PokemonApiResponse } from "../../../types/pokeshopTypes";

export default function ItemZoom() {
  const { name } = useParams();
  const queryClient = useQueryClient();
  const pokemonData = queryClient.getQueryData("pokemon") as PokemonApiResponse;
  const pokemon = pokemonData?.pokemon?.find((poke) => poke.name === name);
  if (!pokemon) {
    return <div>Not found</div>;
  }
  const [selected, setSelected] = useState(1);

  return (
    <div className="zoom-wrapper">
      <div className="zoom-header">
        <div className="zoom-image">
          <div className="zoom-image-selector">
            <img
              src={pokemon.sprites.front_default}
              className={selected === 1 ? "active" : ""}
              onClick={() => setSelected(1)}
            />
            <img
              src={pokemon.sprites.back_default}
              className={selected === 2 ? "active" : ""}
              onClick={() => setSelected(2)}
            />
          </div>
          <div className="zoom-image-selected">
            {selected === 1 ? (
              <img src={pokemon.sprites.front_default} />
            ) : (
              <img src={pokemon.sprites.back_default} />
            )}
          </div>
        </div>
        <div className="zoom-buy">
          {pokemon.price} <button>Buy</button>
        </div>
      </div>
    </div>
  );
}
