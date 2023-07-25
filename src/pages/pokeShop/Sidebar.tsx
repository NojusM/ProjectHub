import { useEffect, useState } from "react";
import Range from "./components/Range";
import { SortRange } from "../../types/pokeshopTypes";

interface Props {
  pokemon: any;
}

export default function Sidebar({ pokemon }: Props) {
  const [sortAsc, setSortAsc] = useState(true);
  const initialSortRange: SortRange = {
    dataMin: 0,
    dataMax: 100000,
    userMin: 0,
    userMax: 100000,
  };
  const [price, setPrice] = useState<SortRange>(initialSortRange);
  const [baseExp, setBaseExp] = useState<SortRange>(initialSortRange);
  const [height, setHeight] = useState<SortRange>(initialSortRange);
  const [weight, setWeight] = useState<SortRange>(initialSortRange);

  useEffect(() => {
    const prices: number[] = pokemon.map((poke: any) => poke.price);
    const baseExps: number[] = pokemon.map((poke: any) => poke.base_experience);
    const heights: number[] = pokemon.map((poke: any) => poke.height);
    const weights: number[] = pokemon.map((poke: any) => poke.weight);

    const calculateRange = (data: number[]): SortRange => {
      const dataMin = Math.min(...data);
      const dataMax = Math.max(...data);
      return {
        dataMin,
        dataMax,
        userMin: dataMin,
        userMax: dataMax,
      };
    };

    setPrice(calculateRange(prices));
    setBaseExp(calculateRange(baseExps));
    setHeight(calculateRange(heights));
    setWeight(calculateRange(weights));
  }, [pokemon]);

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
        <Range label="Price" data={price} setData={setPrice} units="$" />
      </div>
      <div className="sidebar-item">
        <Range
          label="Base experience"
          data={baseExp}
          setData={setBaseExp}
          units="xp"
        />
      </div>
      <div className="sidebar-item">
        <Range label="Height" data={height} setData={setHeight} units="dm" />
      </div>
      <div className="sidebar-item">
        <Range label="Weight" data={weight} setData={setWeight} units="hg" />
      </div>
    </div>
  );
}
