import { useQuery } from "react-query";
import { getPokemon } from "./api/getPokemon";
import "./pokemon.css";
import ItemGrid from "./components/ItemGrid";
import Sidebar from "./Sidebar";
import Loading from "../../components/Loading";
import PokeshopNavbar from "./components/PokeshopNavbar";
import { Route, Routes } from "react-router-dom";

export default function PokemonList() {
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

  return (
    <>
      <div className="pokeshop-title">Pokeshop</div>
      <PokeshopNavbar />
      <Routes>
        <Route
          path="/pokemon"
          element={
            <div className="pokemonshop-wrapper">
              <Sidebar pokemon={pokemonData?.pokemon} />
              <ItemGrid data={pokemonData?.pokemon} />
            </div>
          }
        />
      </Routes>
    </>
  );
}
