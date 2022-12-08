import React, { useEffect, useState } from "react";
import "./App.css";
import { Stack, Button } from "@mui/material";
import categories from "./statements/categories.js";
import messages from "./statements/messages";

const welcome = <div>{messages.instruct}</div>;

function App() {
  const [ComputerScore, setComputerScore] = useState(1);
  const [HumanScore, setHumanScore] = useState(1);

  const pointHandler = (isTrue) => {
    // console.log("event is: ", event);
    // console.log("isTrue is: ", isTrue);

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
  };

  // useEffect(() => {
  //   console.log("Made it here! ComputerScore is: ", ComputerScore);
  // }, [ComputerScore]);

  return (
    <Stack spacing={5} direction="column" className="App">
      {welcome}
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          pointHandler(categories[0].allStatements[0].isTrue);
        }}
      >
        {categories[0].allStatements[0].Statement}
      </Button>
      <Button
        variant="outlined"
        size="large"
        onClick={() => {
          pointHandler(categories[0].allStatements[1].isTrue);
        }}
      >
        {categories[0].allStatements[1].Statement}
      </Button>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          pointHandler(categories[0].allStatements[2].isTrue);
        }}
      >
        {categories[0].allStatements[2].Statement}
      </Button>
    </Stack>
  );
}

export default App;
