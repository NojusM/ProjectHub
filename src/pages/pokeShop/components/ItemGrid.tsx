import { useMemo, useState } from "react";

interface Props {
  gridData: { names: string[]; imgs: string[]; info: { value: number[]; units: string }[] };
}

export default function ItemGrid({ gridData }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(gridData.imgs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = useMemo(() => {
    const paginatedImgs = gridData.imgs.slice(startIndex, endIndex);
    const paginatedNames = gridData.names.slice(startIndex, endIndex);
    const paginatedInfo = gridData.info.slice(startIndex, endIndex);
    return {
      imgs: paginatedImgs,
      names: paginatedNames,
      info: paginatedInfo,
    };
  }, [gridData.names, gridData.imgs, gridData.info, startIndex, endIndex]);

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
        {paginatedData.imgs.map((imgUrl, index) => (
          <div key={`pokemons-${index}`} className="pokemon-grid-item">
            <div className="pokemon-content">
              <p>{paginatedData.names[index]}</p>
              <img src={imgUrl} />
              <div className="pokemon-content-info">
                {gridData.info.map((info, valueIndex) => (
                  <p key={`item-${index}-value-${valueIndex}`}>
                    {info.value[index]} {info.units}
                  </p>
                ))}
              </div>
            </div>
          </div>
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
