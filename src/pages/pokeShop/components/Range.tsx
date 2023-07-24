import { SortRange } from "../../../types/pokeshopTypes";

interface Props {
  label: string;
  data: SortRange;
  setData: React.Dispatch<React.SetStateAction<SortRange>>;
  units: string;
}

export default function Range({ label, data, setData, units }: Props) {
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (e.target.name === "min") {
      if (value > data.userMax) {
        setData((current) => ({ ...current, userMax: value, userMin: value }));
      }
      setData((current) => ({ ...current, userMin: value }));
    } else if (e.target.name === "max") {
      if (value < data.userMin) {
        setData((current) => ({ ...current, userMax: value, userMin: value }));
      }
      setData((current) => ({ ...current, userMax: value }));
    }
  };

  return (
    <div className="range-wrapper">
      <label htmlFor="range">{label}</label>
      <input
        type="range"
        id="range"
        name="min"
        min={data.dataMin}
        max={data.dataMax}
        value={data.userMin}
        onChange={handleRangeChange}
      />
      <input
        type="range"
        name="max"
        min={data.dataMin}
        max={data.dataMax}
        value={data.userMax}
        onChange={handleRangeChange}
      />
      <div className="range-text">
        <span>{data.userMin}</span> -{" "}
        <span>
          {data.userMax} {units}
        </span>
      </div>
    </div>
  );
}
