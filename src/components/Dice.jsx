import "../styles/Dice.css";

export function Dice(props) {
  return (
    <div className="dice">
      <span className="dice__number">{props.value}</span>
    </div>
  );
}
