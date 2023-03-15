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

    //FASTER WAY
    // setCheckouts((prevCheckouts) => {
    //   var tempCheckouts = [...prevCheckouts];
    //   tempCheckouts[shortestLine.id] = [
    //     ...tempCheckouts[shortestLine.id],
    //     personItems,
    //   ];
    //   return tempCheckouts;
    // });

    //CLEANER WAY
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

  return (
    <>
      <About text={aboutText[0].about} />
      <div className="center">
        <h1>Checkout</h1>
        <form className="checkoutForm" onSubmit={handleCheckout}>
          <input
            required
            type="number"
            placeholder="Number of items"
            onChange={(e) => setPersonItems(e.currentTarget.valueAsNumber)}
          />
          <button className="button">Add to line</button>
        </form>
      </div>
      <div className="center checkouts">
        {checkouts.map((checkout, index) => (
          <div key={index} className="checkout">
            {checkout.map((number, id) => {
              return <div key={id}>{number}, </div>;
            })}
          </div>
        ))}
      </div>
    </>
  );
}
