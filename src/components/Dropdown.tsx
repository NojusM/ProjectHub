import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface DropdownMenuProps {
  name: string;
  links: { title: string; url: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ name, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <a
        className="dropdown-button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {name}
      </a>
      {isOpen && (
        <ul
          className="dropdown-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {links.map((link, index) => (
            <li key={index} onClick={() => navigate(`${link.url}`)}>
              <NavLink to={link.url}>{link.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
