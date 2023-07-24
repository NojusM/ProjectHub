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
      <div className="sidebar-item">
        <label>Sort</label>
        <div className="sort-buttons">
          <button
            className={sortAsc ? "button active" : "button"}
            disabled={sortAsc}
            onClick={() => setSortAsc(true)}
          >
            ASC
          </button>
          <button
            className={sortAsc ? "button" : "button active"}
            disabled={!sortAsc}
            onClick={() => setSortAsc(false)}
          >
            DESC
          </button>
        </div>
      </div>
      <div className="sidebar-item">
        <Range label="Price" data={price} setData={setPrice} />
      </div>
      <div className="sidebar-item">
        <Range label="Base experience" data={baseExp} setData={setBaseExp} />
      </div>
      <div className="sidebar-item">
        <Range label="Height" data={height} setData={setHeight} />
      </div>
      <div className="sidebar-item">
        <Range label="Weight" data={weight} setData={setWeight} />
      </div>
    </div>
  );
}
