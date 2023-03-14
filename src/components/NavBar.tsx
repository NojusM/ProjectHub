import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/ProjectHub/" className="button">
        Home
      </NavLink>
      <NavLink to="/ProjectHub/checkout" className="button">
        Checkout
      </NavLink>
      <NavLink to="/ProjectHub/cards" className="button">
        Card Game
      </NavLink>
      <NavLink to="/ProjectHub/colors" className="button">
        Color Game
      </NavLink>
    </nav>
  );
}

export default NavBar;
