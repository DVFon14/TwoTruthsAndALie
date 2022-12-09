import React, { useEffect, useState } from "react";
import "./App.css";
import { Stack, Button } from "@mui/material";
import categories from "./statements/categories.js";
import messages from "./statements/messages";

function App() {
  const [ComputerScore, setComputerScore] = useState(1);
  const [HumanScore, setHumanScore] = useState(1);
  const [questionNum, setQuestionNum] = useState(0);

  const categoryIndex = () => {
    console.log(`questionNum is: ${questionNum}`);
    setQuestionNum(questionNum + 1);
  };

  const pointHandler = (isTrue) => {
    if (isTrue === true) {
      alert(
        `This is a true statement. The computer wins a point! Its score is ${ComputerScore}`
      );
      setComputerScore(ComputerScore + 1);
    } else if (isTrue === false) {
      alert(
        `This is a false statement. You win a point! Your score is ${HumanScore}`
      );
      setHumanScore(HumanScore + 1);
    }
    setQuestionNum(questionNum + 1);
  };

  return (
    <Stack spacing={5} direction="column" className="App">
      {messages.instruct}
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          pointHandler(categories[questionNum].allStatements[0].isTrue);
        }}
      >
        {categories[questionNum].allStatements[0].Statement}
      </Button>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          pointHandler(categories[questionNum].allStatements[1].isTrue);
        }}
      >
        {categories[questionNum].allStatements[1].Statement}
      </Button>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          pointHandler(categories[questionNum].allStatements[2].isTrue);
        }}
      >
        {categories[questionNum].allStatements[2].Statement}
      </Button>
    </Stack>
  );
}

export default App;
