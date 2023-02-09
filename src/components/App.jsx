import React from "react";
import "../styles/App.css";
import { Die } from "./Die.jsx";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = React.useState(defineDiceNumbers());

  function defineDiceNumbers() {
    const dice = [];

    for (let i = 0; i < 10; i++) {
      dice.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid(),
      });
    }

    return dice;
  }

  const allDice = dice.map(dice => (
    <Die
      value={dice.value}
      key={dice.id}
      isHeld={dice.isHeld}
      holdDice={holdDice}
      id={dice.id}
    />
  ));

  function rollDiceNumbers() {
    setDice(defineDiceNumbers());
  }

  function holdDice(id) {
    setDice(prevDice => {
      return prevDice.map(die => {
        return die.id === id
          ? {
              ...die,
              isHeld: !die.isHeld,
            }
          : die;
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
