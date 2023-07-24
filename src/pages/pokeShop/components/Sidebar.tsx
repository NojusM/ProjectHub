import { useState } from "react";

export default function Sidebar() {
  const [sortAsc, setSortAsc] = useState(true);
  const [price, setPrice] = useState([0, 100000]);
  const [baseExp, setBaseExp] = useState([0, 100000]);
  const [height, setHeight] = useState([0, 100000]);
  const [weight, setWeight] = useState([0, 100000]);

  return (
    <div className="sidebar-wrapper">
      <div className="sort">
        Sort:
        <button className="button">ASC</button>
        <button className="button">DESC</button>
      </div>
      <div className="price"></div>
      <div className="baseExp"></div>
      <div className="height"></div>
      <div className="weight"></div>
    </div>
  );
}
