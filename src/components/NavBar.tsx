import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/checkout">Checkout</NavLink>
      <NavLink to="/cards">Card Game</NavLink>
      <NavLink to="/colors">Color Game</NavLink>
    </nav>
  );
}

export default NavBar;
