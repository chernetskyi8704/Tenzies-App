import React from "react";
import "../styles/App.css";
import { Dice } from "./Dice.jsx";

export default function App() {
  const [diceNumbers, setDiceNumbers] = React.useState(defineDiceNumbers());

  function defineDiceNumbers() {
    const diceNumbers = [];

    for (let i = 0; i < 10; i++) {
      diceNumbers.push(Math.floor(Math.random() * 6) + 1);
    }

    return diceNumbers;
  }

  const allDice = diceNumbers.map(diceNumber => <Dice value={diceNumber} />);

  return (
    <div className="container">
      <main className="main__content">
        <section className="dice__container">
          {allDice}
        </section>
      </main>
    </div>
  );
}
