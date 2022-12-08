import React, { useEffect, useState } from "react";
import "./App.css";
import { Stack, Button } from "@mui/material";
import categories from "./statements/categories.js";
import messages from "./statements/messages";

const welcome = <div>{messages.instruct}</div>;

function App() {
  const [ComputerScore, setComputerScore] = useState(1);
  const [HumanScore, setHumanScore] = useState(1);

  const handleComputerScore = () => {
    alert(
      `This is a true statement. The computer wins a point! Its score is ${ComputerScore}`
    );
    setComputerScore(ComputerScore + 1);
  };

  const handleHumanScore = () => {
    alert(
      `This is a false statement. You win a point! Your score is ${HumanScore}`
    );
    setHumanScore(HumanScore + 1);
  };

  // useEffect(() => {
  //   console.log("Made it here! ComputerScore is: ", ComputerScore);
  // }, [ComputerScore]);

  return (
    <Stack spacing={5} direction="column" className="App">
      {welcome}
      <Button variant="contained" size="large" onClick={handleComputerScore}>
        {categories[0].allStatements[0].Statement}
      </Button>
      <Button variant="outlined" size="large" onClick={handleHumanScore}>
        {categories[0].allStatements[1].Statement}
      </Button>
      <Button variant="contained" size="large" onClick={handleComputerScore}>
        {categories[0].allStatements[2].Statement}
      </Button>
    </Stack>
  );
}

export default App;
