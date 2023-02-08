import React from "react";
import "../styles/App.css";
import { Dice } from "./Dice.jsx";

export default function App() {
  return (
    <div className="container">
      <main className="main__content">
        <section className="dice__container">
          <Dice value={1} />
        </section>
      </main>
    </div>
  );
}
