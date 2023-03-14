import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="button">
        Home
      </NavLink>
      <NavLink to="/checkout" className="button">
        Checkout
      </NavLink>
      <NavLink to="/cards" className="button">
        Card Game
      </NavLink>
      <NavLink to="/colors" className="button">
        Color Game
      </NavLink>
    </nav>
  );
}

export default NavBar;
