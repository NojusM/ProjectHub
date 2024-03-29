import { NavLink } from "react-router-dom";
import DropdownMenu from "./Dropdown";

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <DropdownMenu name={"Websites"} links={URLs.websites} />
      <DropdownMenu name={"Games"} links={URLs.games} />
      <DropdownMenu name={"Functional puzzles"} links={URLs.puzzles} />
    </nav>
  );
}

const URLs = {
  websites: [{ title: "Pokemon Shop", url: "pokeshop" }],
  games: [
    { title: "Match Me!", url: "cards" },
    { title: "Color Guess", url: "colors" },
  ],
  puzzles: [{ title: "Checkout", url: "checkout" }],
};
