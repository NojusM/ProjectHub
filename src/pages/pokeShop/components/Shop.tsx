import { GridData, RangesData } from "../../../types/pokeshopTypes";
import ItemGrid from "./ItemGrid";
import Sidebar from "./Sidebar";

interface Props {
  rangesData: RangesData[];
  gridData: GridData;
}

export default function Shop({ rangesData, gridData }: Props) {
  return (
    <div className="pokemonshop-wrapper">
      <Sidebar rangesData={rangesData} />
      <ItemGrid gridData={gridData} />
    </div>
  );
}
