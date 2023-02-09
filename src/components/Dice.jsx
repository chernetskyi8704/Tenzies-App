import "../styles/Dice.css";

export function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#ffffff",
  };

  return (
    <div className="dice" 
         style={styles} 
         onClick={() => props.holdDice(props.id)}
         id = {props.id}
    >
      <span className="dice__number">{props.value}</span>
    </div>
  );
}
