import { QueryClient, QueryClientProvider } from "react-query";
import PokemonList from "./PokemonList";

const queryClient = new QueryClient();

export default function Pokeshop() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonList />
    </QueryClientProvider>
  );
}
