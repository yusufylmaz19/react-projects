import React from "react";

export default function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#fffafa",
  };

  return (
    <div className="dies" style={styles} onClick={props.hollDice}>
      {props.number}
    </div>
  );
}
