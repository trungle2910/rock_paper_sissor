import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import paper from "../images/paper.png";
import rock from "../images/rock.png";
import scissors from "../images/scissors.png";

const ChoiceCard = ({ name, result, color, choice }) => {
  return (
    <div
      className={`choice-card ${
        result === "Win"
          ? "border-success"
          : result === "Tie"
          ? "border-dark"
          : "border-danger"
      }`}
    >
      <h2>{name}</h2>
      <img
        src={choice === "rock" ? rock : choice === "paper" ? paper : scissors}
        alt={choice}
      />
      <h3>{result === "Win" ? "WIN" : result === "Tie" ? "TIE" : "LOSS"}</h3>
    </div>
  );
};

export default ChoiceCard;
