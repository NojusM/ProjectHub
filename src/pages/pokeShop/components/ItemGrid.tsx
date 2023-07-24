import { useMemo, useState } from "react";

interface Props {
  data: any;
}

export default function ItemGrid({ data }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = useMemo(() => {
    return data.slice(startIndex, endIndex);
  }, [data, startIndex, endIndex]);

  return (
    <div className="pokeshop-items">
      <label className="items-per-page">
        Items per page:
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </label>
      <ul className="pokemon-grid-wrapper">
        {paginatedData.map((item: any) => (
          <div key={item.name} className="pokemon-grid-item">
            <div className="pokemon-content">
              <p>{item.name}</p>
              <img src={item.sprites.front_default} />
            </div>
          </div>
        ))}
      </ul>
      <div className="pokeshop-buttons">
        <button
          className="button"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <div className="pokeshop-page-number">{currentPage}</div>
        <button
          className="button"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>
      <div className="pokeshop-item-limit"></div>
    </div>
  );
}
