import { useEffect, useState } from "react";
import "./checkout.css";
import About from "../../components/About";
import aboutText from "../../data/about.json";

export default function Checkout() {
  const [personItems, setPersonItems] = useState(0);
  const [checkouts, setCheckouts] = useState<number[][]>([
    [1],
    [],
    [4],
    [1],
    [32],
  ]);

  function handleCheckout(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let shortestLine = { id: 0, totalItems: 1e9 };

    checkouts.forEach((checkout, idx) => {
      const totalInLine = checkout.reduce(
        (sum, currentValue) => sum + currentValue,
        0
      );
      if (totalInLine < shortestLine.totalItems) {
        shortestLine.totalItems = totalInLine;
        shortestLine.id = idx;
      }
    });

    setCheckouts((prevCheckouts) =>
      prevCheckouts.map((checkout, index) => {
        if (index === shortestLine.id) {
          return [...checkout, personItems];
        } else {
          return checkout;
        }
      })
    );
  }

  useEffect(() => {
    const Interval = setInterval(() => {
      setCheckouts((prevCheckouts) => {
        return prevCheckouts.map((checkout) => {
          return [checkout[0] - 1, ...checkout.slice(1)].filter(
            (value) => value > 0
          );
        });
      });
    }, 500);

    return () => {
      clearInterval(Interval);
    };
  });

  function handleAddToLine(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.valueAsNumber;
    if (value < 0) return;

    setPersonItems(value);
  }

  return (
    <div className="grid-wrapper">
      <div className="about-section">
        <About text={aboutText[0].about} />
      </div>

      <div className="checkout-section">
        <h1>Checkout</h1>
        <form className="checkoutForm" onSubmit={handleCheckout}>
          <input
            required
            type="number"
            placeholder="Number of items"
            onChange={handleAddToLine}
          />
          <button className="button">Add to line</button>
        </form>

        <div className="checkouts">
          {checkouts.map((checkout, index) => (
            <div key={index} className="checkout">
              {checkout.map((number, id) => {
                return <div key={id}>{number} </div>;
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="extra-section"></div>
    </div>
  );
}
