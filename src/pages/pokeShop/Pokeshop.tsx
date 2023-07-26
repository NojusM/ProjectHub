import { QueryClient, QueryClientProvider } from "react-query";
import "./pokemon.css";
import PokeshopNavbar from "./components/PokeshopNavbar";
import { Route, Routes } from "react-router-dom";
import PokemonShop from "./pages/PokemonShop";
import PokemonHome from "./pages/PokemonHome";
import BerrieShop from "./pages/BerrieShop";
import PokemonCart from "./pages/PokemonCart";
import ItemZoom from "./components/ItemZoom";
const queryClient = new QueryClient();

export default function Pokeshop() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="pokeshop-wrapper">
        <div className="pokeshop-title">Pokeshop</div>
        <PokeshopNavbar />
        <Routes>
          <Route path="/" element={<PokemonHome />} />
          <Route path="/pokemon" element={<PokemonShop />} />
          <Route path="/berries" element={<BerrieShop />} />
          <Route path="/cart" element={<PokemonCart />} />
          <Route path="/pokemon/:name" element={<ItemZoom />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}
