import React from "react";
import "../styles/App.css";
import { Dice } from "./Dice.jsx";
import { nanoid } from "nanoid";

export default function App() {
  const [diceNumbers, setDiceNumbers] = React.useState(defineDiceNumbers());

  function defineDiceNumbers() {
    const diceNumbers = [];

    for (let i = 0; i < 10; i++) {
      diceNumbers.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid(),
      });
    }

    return diceNumbers;
  }

  const allDice = diceNumbers.map(dice => (
    <Dice
      value={dice.value}
      key={dice.id}
      isHeld={dice.isHeld}
      holdDice={holdDice}
      id={dice.id}
    />
  ));

  function rollDiceNumbers() {
    setDiceNumbers(defineDiceNumbers());
  }

  function holdDice(id) {
    setDiceNumbers(prevDiceNumbers => {
      return prevDiceNumbers.map(dice => {
        return dice.id === id
          ? {
              ...dice,
              isHeld: !dice.isHeld,
            }
          : dice;
      });
    });
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
