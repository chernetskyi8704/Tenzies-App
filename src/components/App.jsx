import React from "react";
import "../styles/App.css";
import { Die } from "./Die.jsx";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = React.useState(defineDiceNumbers());

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createDie() {
    return {
      value: getRandomNumber(1, 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function defineDiceNumbers() {
    const dice = [];

    for (let i = 0; i < 10; i++) {
      dice.push(createDie());
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
