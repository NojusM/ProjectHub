import { useState } from "react";
import "./color.css";
import HEX from "../../data/hex.json";
import About from "../../components/About";
import aboutText from "../../data/about.json";

export default function ColorGame() {
  const [colors, setColors] = useState(["#FF0000", "#00FF00", "#0000FF"]);
  const [answer, setAnswer] = useState("#FF0000");
  const [alert, setAlert] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState([false, false, false]);
  const hex = HEX;

  //Get random color array
  var tempColor = ["#", "#", "#"];
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 6; i++) {
      tempColor[j] += hex[Math.floor(Math.random() * hex.length)];
    }
  }

  function handleColorPick(color: string, index: number) {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 1000);

    if (color === answer) {
      setDisabledButtons([false, false, false]);
      setIsCorrect(true);
      setColors(tempColor);
      setAnswer(tempColor[Math.floor(Math.random() * tempColor.length)]);
    } else {
      setDisabledButtons((prev) => {
        const newPrev = [...prev];
        newPrev[index] = true;
        return newPrev;
      });
      setIsCorrect(false);
    }
  }

  return (
    <div className="grid-wrapper">
      <div className="about-section">
        <About text={aboutText[2].about} />
      </div>
      <div className="game-section">
        <div className="colorGame">
          {alert && (
            <div className={isCorrect ? "color-answer green" : "color-answer"}>
              {isCorrect ? "Correct!" : "False!"}
            </div>
          )}
          <div className="color" style={{ backgroundColor: answer }} />
          <div>
            {colors.map((color, index) => (
              <button
                key={index}
                disabled={disabledButtons[index]}
                className="button"
                onClick={() => {
                  handleColorPick(color, index);
                }}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
        <div className="extra-section"></div>
      </div>
    </div>
  );
}
