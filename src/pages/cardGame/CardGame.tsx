import { useRef, useState } from "react";
import "./cards.css";
import NUMBERS from "../../data/numberPairs.json";
import About from "../../components/About";
import aboutText from "../../data/about.json";

export default function CardGame() {
  const [grid, setGrid] = useState([
    [
      { value: 0, open: false, matched: false },
      { value: 5, open: false, matched: false },
      { value: 1, open: false, matched: false },
      { value: 3, open: false, matched: false },
    ],
    [
      { value: 2, open: false, matched: false },
      { value: 5, open: false, matched: false },
      { value: 2, open: false, matched: false },
      { value: 4, open: false, matched: false },
    ],
    [
      { value: 4, open: false, matched: false },
      { value: 3, open: false, matched: false },
      { value: 1, open: false, matched: false },
      { value: 0, open: false, matched: false },
    ],
  ]);
  const isPaused = useRef(false);
  const oldClick = useRef<number[] | null>(null);

  function shuffleCards() {
    let tempGrid = [...grid];
    let numbers = shuffleArray(NUMBERS);

    tempGrid.forEach((row, rowIndex) => {
      row.forEach((card, cardIndex) => {
        card.value = numbers[cardIndex + rowIndex * 4];
        card.open = false;
        card.matched = false;
      });
    });
    setGrid([...tempGrid]);
  }

  function handleCardClicked(row: number, col: number) {
    // Open cards
    let newGrid = [...grid];
    newGrid[row][col].open = true;
    setGrid(newGrid);
    //If first opened card, save it
    if (oldClick.current === null) {
      oldClick.current = [row, col];
      return;
    }
    //If second card, check if match
    let oldRow = oldClick.current[0];
    let oldCol = oldClick.current[1];
    //If opened same card, do nothing
    if (oldRow === row && oldCol === col) {
      return;
    }
    //Match cards
    if (newGrid[oldRow][oldCol].value !== newGrid[row][col].value) {
      isPaused.current = true;
      setTimeout(() => {
        newGrid[row][col].open = false;
        newGrid[oldRow][oldCol].open = false;
        setGrid([...newGrid]);
        isPaused.current = false;
      }, 1000);
    } else {
      //Matched
      newGrid[row][col].matched = true;
      newGrid[oldRow][oldCol].matched = true;
      setGrid([...newGrid]);
      const hasWon = newGrid
        .map((row) => row.map((col) => col.matched))
        .flat()
        .every((card) => card);
      if (hasWon) {
        alert("You WON!");
      }
    }
    oldClick.current = null;
  }
  return (
    <>
      <About text={aboutText[1].about} />
      {isPaused.current && (
        <div className="answer">
          <b>Wrong guess!</b>
        </div>
      )}
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((number, colIndex) => (
              <div
                key={colIndex}
                className={
                  number.matched
                    ? "card open matched"
                    : number.open
                    ? "card open"
                    : "card"
                }
                onClick={
                  isPaused.current
                    ? function () {}
                    : number.matched
                    ? function () {}
                    : () => handleCardClicked(rowIndex, colIndex)
                }
              >
                {number.value}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <button className="button" onClick={() => shuffleCards()}>
          Restart
        </button>
      </div>
    </>
  );
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
