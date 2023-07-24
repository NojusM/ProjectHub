import { useState } from "react";

export default function Sidebar() {
  const [sortAsc, setSortAsc] = useState(true);
  const [price, setPrice] = useState([0, 100000]);
  const [baseExp, setBaseExp] = useState([0, 100000]);
  const [height, setHeight] = useState([0, 100000]);
  const [weight, setWeight] = useState([0, 100000]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (e.target.name === "minPrice") {
      setPrice((current) => [value, current[1]]);
      if (value > price[1]) {
        setPrice((current) => [current[0], value]);
      }
    } else if (e.target.name === "maxPrice") {
      setPrice((current) => [current[0], value]);
      if (value < price[0]) {
        setPrice((current) => [value, current[1]]);
      }
    }
  };

  return (
    <div className="sidebar-wrapper">
      <div className="sort">
        Sort:
        <button className="button">ASC</button>
        <button className="button">DESC</button>
      </div>
      <div className="price">
        <label htmlFor="priceRange">Price Range:</label>
        <input
          type="range"
          id="priceRange"
          name="minPrice"
          min={0}
          max={100}
          value={price[0]}
          onChange={handlePriceChange}
        />
        <input
          type="range"
          name="maxPrice"
          min={0}
          max={100}
          value={price[1]}
          onChange={handlePriceChange}
        />
        <span>{price[0]}</span> - <span>{price[1]}</span>
      </div>
      <div className="baseExp"></div>
      <div className="height"></div>
      <div className="weight"></div>
    </div>
  );
}
