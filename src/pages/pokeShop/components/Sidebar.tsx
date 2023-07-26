import { useEffect, useState } from "react";
import Range from "./Range";
import { RangesData, SortRange } from "../../../types/pokeshopTypes";

interface Props {
  rangesData: RangesData[];
  setFilter: (updatedSortingFilter: SortRange[]) => void;
}

export default function Sidebar({ rangesData, setFilter }: Props) {
  const validRangesData = rangesData.filter((range) => range.data && range.data.length > 0);
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
    if (ranges) {
      setFilter(ranges);
    }
  }

  return (
    <div className="sidebar-wrapper">
      {ranges?.map((rangeData, index) => (
        <div className="sidebar-item" key={index}>
          <Range data={rangeData} setData={handleRangeDataChange} />
        </div>
      ))}
    </div>
  );
}
