import React from "react";
import "../styles/App.css";
import { Dice } from "./Dice.jsx";

export default function App() {
  const [diceNumbers, setDiceNumbers] = React.useState(defineDiceNumbers());

  function defineDiceNumbers() {
    const diceNumbers = [];

    for (let i = 0; i < 10; i++) {
      diceNumbers.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
      });
    }

    return diceNumbers;
  }

  const allDice = diceNumbers.map(diceNumber => <Dice value={diceNumber.value} />);

  function rollDiceNumbers() {
    setDiceNumbers(defineDiceNumbers());
  }

  return (
    <div className="container">
      <main className="main__content">
        <div className="dice__container">{allDice}</div>
        <button className="rollDice__button" onClick={rollDiceNumbers}>
          Roll
        </button>
      </main>
    </div>
  );
}
