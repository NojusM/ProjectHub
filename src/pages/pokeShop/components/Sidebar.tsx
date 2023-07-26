import { useEffect, useState } from "react";
import Range from "./Range";
import { RangesData, SortRange } from "../../../types/pokeshopTypes";

interface Props {
  rangesData: RangesData[];
}

export default function Sidebar({ rangesData }: Props) {
  const validRangesData = rangesData.filter((range) => range.data && range.data.length > 0);
  const [sortAsc, setSortAsc] = useState(true);
  const [ranges, setRanges] = useState<SortRange[]>();

  useEffect(() => {
    const calculatedRanges = validRangesData.map((pokemonData) => {
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
      {ranges?.map((rangeData, index) => (
        <div className="sidebar-item" key={index}>
          <Range data={rangeData} setData={handleRangeDataChange} />
        </div>
      ))}
    </div>
  );
}
