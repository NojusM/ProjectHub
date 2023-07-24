import { useState } from "react";
import Range from "./Range";

export default function Sidebar() {
  const [sortAsc, setSortAsc] = useState(true);
  const [price, setPrice] = useState<[number, number]>([0, 100000]);
  const [baseExp, setBaseExp] = useState<[number, number]>([0, 100000]);
  const [height, setHeight] = useState<[number, number]>([0, 100000]);
  const [weight, setWeight] = useState<[number, number]>([0, 100000]);

  return (
    <div className="sidebar-wrapper">
      <div className="sort">
        Sort:
        <button className="button">ASC</button>
        <button className="button">DESC</button>
      </div>
      <div className="price">
        <Range label="Price Range:" data={price} setData={setPrice} />
      </div>
      <div className="baseExp"></div>
      <div className="height"></div>
      <div className="weight"></div>
    </div>
  );
}
