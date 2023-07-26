import { useState } from "react";
import { GridData, RangesData, SortRange } from "../../../types/pokeshopTypes";
import ItemGrid from "./ItemGrid";
import Sidebar from "./Sidebar";

interface Props {
  rangesData: RangesData[];
  gridData: GridData[];
}

export default function Shop({ rangesData, gridData }: Props) {
  const [sortingFilter, setSortingFilter] = useState<SortRange[]>([]);

  function handleSortingFilterUpdate(updatedSortingFilter: SortRange[]) {
    setSortingFilter(updatedSortingFilter);
  }

  return (
    <div className="pokemonshop-wrapper">
      <Sidebar rangesData={rangesData} setFilter={handleSortingFilterUpdate} />
      <ItemGrid gridData={gridData} filter={sortingFilter} />
    </div>
  );
}
