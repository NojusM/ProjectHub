interface Props {
  label: string;
  data: [number, number];
  setData: React.Dispatch<React.SetStateAction<[number, number]>>;
}

export default function Range({ label, data, setData }: Props) {
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (e.target.name === "minPrice") {
      setData((current) => [value, current[1]]);
      if (value > data[1]) {
        setData((current) => [current[0], value]);
      }
    } else if (e.target.name === "maxPrice") {
      setData((current) => [current[0], value]);
      if (value < data[0]) {
        setData((current) => [value, current[1]]);
      }
    }
  };

  return (
    <div className="range-wrapper">
      <label htmlFor="priceRange">{label}</label>
      <input
        type="range"
        id="priceRange"
        name="minPrice"
        min={0}
        max={100}
        value={data[0]}
        onChange={handlePriceChange}
      />
      <input
        type="range"
        name="maxPrice"
        min={0}
        max={100}
        value={data[1]}
        onChange={handlePriceChange}
      />
      <span>{data[0]}</span> - <span>{data[1]}</span>
    </div>
  );
}
