import { useMemo, useState } from "react";
import { GridData, SortRange } from "../../../types/pokeshopTypes";
import { Link } from "react-router-dom";

interface Props {
  gridData: GridData[];
  filter: SortRange[];
}

export default function ItemGrid({ gridData, filter }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(gridData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = useMemo(() => {
    const filteredItems = gridData.filter((item) => {
      return item.info.every((infoItem) =>
        filter.some((criteria) => {
          return (
            infoItem.units === criteria.units &&
            infoItem.value >= criteria.userMin &&
            infoItem.value <= criteria.userMax
          );
        })
      );
    });

    return filteredItems.slice(startIndex, endIndex);
  }, [gridData, filter, startIndex, endIndex]);

  return (
    <div className="pokeshop-items">
      <label className="items-per-page">
        Items per page:
        <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </label>
      <ul className="pokemon-grid-wrapper">
        {paginatedData.map((item, index) => (
          <Link
            key={`pokemons-${index}`}
            to={`/pokemon/${encodeURIComponent(item.name)}`}
            className="pokemon-grid-item"
          >
            <div className="pokemon-content">
              <p>{item.name}</p>
              <img src={item.img} />
              <div className="pokemon-content-info">
                {item.info.map((info, valueIndex) => (
                  <p key={`item-${index}-value-${valueIndex}`}>
                    {info.value} {info.units}
                  </p>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </ul>
      <div className="pokeshop-buttons">
        <button className="button" onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 1}>
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
