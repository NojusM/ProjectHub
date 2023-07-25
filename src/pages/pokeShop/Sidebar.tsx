import { useEffect, useState } from "react";
import Range from "./components/Range";
import { SortRange } from "../../types/pokeshopTypes";

interface Props {
  rangesData: { data: number[]; title: string; units: string }[];
}

export default function Sidebar({ rangesData }: Props) {
  const [sortAsc, setSortAsc] = useState(true);
  const [ranges, setRanges] = useState<SortRange[]>();

  useEffect(() => {
    const calculatedRanges = rangesData.map((pokemonData) => {
      const dataMin = Math.min(...pokemonData.data);
      const dataMax = Math.max(...pokemonData.data);
      return {
        title: pokemonData.title,
        units: pokemonData.units,
        dataMin: dataMin,
        dataMax: dataMax,
        userMin: dataMin,
        userMax: dataMax,
      };
    });
    setRanges(calculatedRanges);
  }, [rangesData]);

  function handleRangeDataChange(title: string, updatedRangeData: SortRange) {
    setRanges((prevRanges) => prevRanges?.map((range) => (range.title === title ? { ...updatedRangeData } : range)));
  }

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-item">
        <label>Sort</label>
        <div className="sort-buttons">
          <button className={sortAsc ? "button active" : "button"} disabled={sortAsc} onClick={() => setSortAsc(true)}>
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
      {ranges?.map((rangeData) => (
        <div className="sidebar-item">
          <Range data={rangeData} setData={handleRangeDataChange} />
        </div>
      ))}
    </div>
  );
}
