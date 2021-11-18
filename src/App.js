import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./App.css";
import ChoiceCard from "./components/ChoiceCard";
import PublicNavbar from "./components/PublicNavbar";

function App() {
  const shapes = ["rock", "paper", "scissors"];
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  let [computerResult, setComputerResult] = useState("");
  let [playerResult, setPlayerResult] = useState("");

  const handleClickRandom = () => {
    let playerChoice = shapes[Math.floor(Math.random() * 3)];
    let computerChoice = shapes[Math.floor(Math.random() * 3)];
    console.log(playerChoice, computerChoice);
    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);
    caculateWinner(playerChoice, computerChoice);
  };

  const caculateWinner = (name) => {
    setPlayerChoice(name);
    let computerChoice = shapes[Math.floor(Math.random() * 3)];
    setComputerChoice(computerChoice);

    if (name === computerChoice) {
      setPlayerResult("Tie");
      setComputerResult("Tie");
    } else if (computerChoice === "rock") {
      if (name === "paper") {
        setPlayerResult("Win");
        setComputerResult("Lose");
      } else {
        setPlayerResult("Lose");
        setComputerResult("Win");
      }
    } else if (computerChoice === "paper") {
      if (name === "scissors") {
        setPlayerResult("Win");
        setComputerResult("Lose");
      } else {
        setPlayerResult("Lose");
        setComputerResult("Win");
      }
    } else {
      if (name === "rock") {
        setPlayerResult("Win");
        setComputerResult("Lose");
      } else {
        setPlayerResult("Lose");
        setComputerResult("Win");
      }
    }
  };

  const handleClick = (name) => {
    // console.log("button clicked", name);
    console.log(name, computerChoice);
    caculateWinner(name);
  };

  return (
    <div className="App text-center">
      <PublicNavbar />
      <Container>
        <div className="d-flex justify-content-center flex-wrap">
          <ChoiceCard name="You" result={playerResult} choice={playerChoice} />
          <ChoiceCard
            name="Computer"
            result={computerResult}
            choice={computerChoice}
          />
        </div>
        <Button variant="info" onClick={() => handleClickRandom()}>
          Random
        </Button>
        <div className="mt-3" style={{ textAlign: "center" }}>
          <button
            onClick={() => handleClick("rock")}
            className="btn btn-danger"
          >
            Rock ✊
          </button>
          <button
            onClick={() => handleClick("paper")}
            className="btn btn-danger m-2"
          >
            Paper 🖐
          </button>
          <button
            onClick={() => handleClick("scissors")}
            className="btn btn-danger"
          >
            Scissors ✌
          </button>
        </div>
      </Container>
    </div>
  );
}

export default App;
