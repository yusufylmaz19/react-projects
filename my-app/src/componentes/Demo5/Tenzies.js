import React from "react";
import "../../styles/Tenzies.css";
import Dice from "./Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
export default function Tenzies() {


  const generateNewDice = () => {
    return {
      value: Math.floor(Math.random() * 6),
      id: nanoid(),
      isHeld: false,
    };
  };

  const allNewDice = () => {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
    }
    return newDice;
  };

  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies,SetTenzies]=React.useState(false);

  React.useEffect(()=>{
    const allHeld= dice.every(die=>die.isHeld);
    const firstValue=dice[8].value;
    const allSame=dice.every(die=>die.value===firstValue);
    if(allHeld && allSame){
      alert('u won!');
      SetTenzies(true);
    }
    console.log(firstValue);
  },[dice])

  const rollDice = () => {
    if(!tenzies){
      setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDice();
      })
      );
    }
    else{
      SetTenzies(false);
      setDice(allNewDice());
    }
  };

  const hollDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  const diceElements = dice.map((e) => {
    return (
      <Dice
        key={e.id}
        isHeld={e.isHeld}
        number={e.value}
        hollDice={() => hollDice(e.id)}
      />
    );
  });

  return (
    <div className="tenzies-container">
      {tenzies && <Confetti />}
      <div className="tenzies-container-box">{diceElements}</div>
      <button onClick={rollDice} className="tenzies-button" type="button">
        {tenzies?'New Game':'Roll'}
      </button>
    </div>
  );
}
