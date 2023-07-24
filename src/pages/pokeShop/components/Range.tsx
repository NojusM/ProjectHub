interface Props {
  label: string;
  data: [number, number];
  setData: React.Dispatch<React.SetStateAction<[number, number]>>;
}

export default function Range({ label, data, setData }: Props) {
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (e.target.name === "min") {
      setData((current) => [value, current[1]]);
      if (value > data[1]) {
        setData((current) => [current[0], value]);
      }
    } else if (e.target.name === "max") {
      setData((current) => [current[0], value]);
      if (value < data[0]) {
        setData((current) => [value, current[1]]);
      }
    }
  };

  return (
    <div className="range-wrapper">
      <label htmlFor="range">{label}</label>
      <input
        type="range"
        id="range"
        name="min"
        min={0}
        max={100}
        value={data[0]}
        onChange={handleRangeChange}
      />
      <input
        type="range"
        name="max"
        min={0}
        max={100}
        value={data[1]}
        onChange={handleRangeChange}
      />
      <span>{data[0]}</span> - <span>{data[1]}</span>
    </div>
  );
}
