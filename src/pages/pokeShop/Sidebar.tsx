import { useEffect, useState } from "react";
import Range from "./components/Range";
import { SortRange } from "../../types/pokeshopTypes";

interface Props {
  pokemon: any;
}

export default function Sidebar({ pokemon }: Props) {
  const [sortAsc, setSortAsc] = useState(true);
  const [price, setPrice] = useState<SortRange>({
    dataMin: 0,
    dataMax: 100000,
    userMin: 0,
    userMax: 100000,
  });
  const [baseExp, setBaseExp] = useState<SortRange>({
    dataMin: 0,
    dataMax: 100000,
    userMin: 0,
    userMax: 100000,
  });
  const [height, setHeight] = useState<SortRange>({
    dataMin: 0,
    dataMax: 100000,
    userMin: 0,
    userMax: 100000,
  });
  const [weight, setWeight] = useState<SortRange>({
    dataMin: 0,
    dataMax: 100000,
    userMin: 0,
    userMax: 100000,
  });

  useEffect(() => {
    const prices: number[] = pokemon.map((poke: any) => poke.price);
    const baseExps: number[] = pokemon.map((poke: any) => poke.base_experience);
    const heights: number[] = pokemon.map((poke: any) => poke.height);
    const weights: number[] = pokemon.map((poke: any) => poke.weight);

    setPrice(() => {
      const priceMin = Math.min(...prices);
      const priceMax = Math.max(...prices);
      return {
        dataMin: priceMin,
        dataMax: priceMax,
        userMin: priceMin,
        userMax: priceMax,
      };
    });
    setBaseExp(() => {
      const baseExpMin = Math.min(...baseExps);
      const baseExpMax = Math.max(...baseExps);
      return {
        dataMin: baseExpMin,
        dataMax: baseExpMax,
        userMin: baseExpMin,
        userMax: baseExpMax,
      };
    });
    setHeight(() => {
      const heightMin = Math.min(...heights);
      const heightMax = Math.max(...heights);
      return {
        dataMin: heightMin,
        dataMax: heightMax,
        userMin: heightMin,
        userMax: heightMax,
      };
    });
    setWeight(() => {
      const weightMin = Math.min(...weights);
      const weightMax = Math.max(...weights);
      return {
        dataMin: weightMin,
        dataMax: weightMax,
        userMin: weightMin,
        userMax: weightMax,
      };
    });
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
