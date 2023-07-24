import { NavLink } from "react-router-dom";

export default function PokeshopNavbar() {
  return (
    <nav>
      <NavLink to="/pokeshop">Home</NavLink>
      <NavLink to="/pokeshop/pokemon">Pokemon</NavLink>
      <NavLink to="/pokeshop/berries">Berries</NavLink>
      <NavLink to="/pokeshop/cart">Cart</NavLink>
    </nav>
  );
}
