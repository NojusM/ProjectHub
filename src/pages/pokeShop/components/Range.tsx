import { SortRange } from "../../../types/pokeshopTypes";

interface Props {
  data: SortRange;
  setData: (title: string, updatedRangeData: SortRange) => void;
}

export default function Range({ data, setData }: Props) {
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (e.target.name === "min") {
      if (value > data.userMax) {
        setData(data.title, { ...data, userMin: value, userMax: value });
      } else {
        setData(data.title, { ...data, userMin: value });
      }
    } else if (e.target.name === "max") {
      if (value < data.userMin) {
        setData(data.title, { ...data, userMin: value, userMax: value });
      } else {
        setData(data.title, { ...data, userMax: value });
      }
    }
  };

  return (
    <div className="range-wrapper">
      <label htmlFor="range">{data.title}</label>
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
          {data.userMax} {data.units}
        </span>
      </div>
    </div>
  );
}
