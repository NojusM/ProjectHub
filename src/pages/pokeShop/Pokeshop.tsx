import { QueryClient, QueryClientProvider } from "react-query";
import "./pokemon.css";
import PokeshopNavbar from "./components/PokeshopNavbar";
import { Route, Routes } from "react-router-dom";
import PokemonShop from "./pages/PokemonShop";
import PokemonHome from "./pages/PokemonHome";
import BerrieShop from "./pages/BerrieShop";
import PokemonCart from "./pages/PokemonCart";
const queryClient = new QueryClient();

export default function Pokeshop() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="pokeshop-wrapper">
        <div className="pokeshop-title">Pokeshop</div>
        <PokeshopNavbar />
        <Routes>
          <Route path="/" element={<PokemonHome />} />
        </Routes>
        <Routes>
          <Route path="/pokemon" element={<PokemonShop />} />
        </Routes>
        <Routes>
          <Route path="/berries" element={<BerrieShop />} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<PokemonCart />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}
