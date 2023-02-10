import React from "react";
import "../styles/App.css";
import { Die } from "./Die.jsx";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = React.useState(() => defineDiceNumbers());
  const [isGameWon, setIsGameWon] = React.useState(false);

  React.useEffect(() => {
    const ifWon = dice.every(die => die.isHeld === true);

    if (ifWon) {
      setIsGameWon(true);
    }
  }, [dice]);

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

  function rollDice() {
    setDice(prevDice => {
      return prevDice.map(die => {
        return die.isHeld ? die : createDie();
      });
    });
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
      {isGameWon && (
        <Confetti 
        width={window.innerWidth} 
        height={window.innerHeight} 
        />
      )}
      <main className="main__content">
        <h1 className="main__title title">Tenzies</h1>
        <p className="main__description">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        {isGameWon && (
          <div className="ifWon">
            <p className="ifWon__text title">Great job!</p>
          </div>
        )}
        {!isGameWon && <div className="dice__container">{allDice}</div>}
        <button className="rollDice__button" onClick={rollDice}>
          {isGameWon ? "Play again?" : "Roll dice"}
        </button>
      </main>
    </div>
  );
}
