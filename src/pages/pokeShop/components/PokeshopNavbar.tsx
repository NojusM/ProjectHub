import { NavLink } from "react-router-dom";

export default function PokeshopNavbar() {
  return (
    <nav className="pokemon-navbar">
      <NavLink to="/pokeshop" end>
        <div className="nav-container">Home</div>
      </NavLink>
      <NavLink to="/pokeshop/pokemon">
        <div className="nav-container">Pokemon</div>
      </NavLink>
      <NavLink to="/pokeshop/berries">
        <div className="nav-container">Berries</div>
      </NavLink>
      <NavLink to="/pokeshop/cart">
        <div className="nav-container">Cart</div>
      </NavLink>
    </nav>
  );
}
