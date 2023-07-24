interface Props {
  data: any;
  currentPage: number;
  nextPage: any;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function ItemGrid({
  data,
  currentPage,
  nextPage,
  setCurrentPage,
}: Props) {
  return (
    <div className="pokeshop-wrapper">
      <div className="pokeshop-items">
        <ul className="pokemon-grid-wrapper">
          {data.map((pokemon: any) => (
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
            disabled={!nextPage}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}
