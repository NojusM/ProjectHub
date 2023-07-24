import { useState } from "react";

interface Props {
  data: any;
}

export default function ItemGrid({ data }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <div className="pokeshop-wrapper">
      <div className="pokeshop-items">
        <ul className="pokemon-grid-wrapper">
          {paginatedData.map((pokemon: any) => (
            <div key={pokemon.name} className="pokemon-grid-item">
              <div className="pokemon-content">
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.front_default} />
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
        <div className="pokeshop-item-limit">
          <label>
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
        </div>
      </div>
    </div>
  );
}
