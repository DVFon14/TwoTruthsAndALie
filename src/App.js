//import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Stack, Button } from "@mui/material";
import categories from "./statements/categories.js";
import PointMessages from "./statements/PointMessages";

// const { messages } = PointMessages;

function App() {
  const [ComputerScore, setComputerScore] = useState(0);

  const handleComputerScore = () => {
    alert("This is a true statement. The computer wins a point!");
    setComputerScore(ComputerScore + 1);
  };

  const instruction = (
    <div>
      {PointMessages.lose} {ComputerScore}
    </div>
  );

  // useEffect(() => {
  //   console.log("Made it here! ComputerScore is: ", ComputerScore);
  // }, [ComputerScore]);

  return (
    <Stack spacing={5} direction="column" className="App">
      <Button variant="text" size="large" onClick={handleComputerScore}>
        {categories[0].allStatements[0].Statement}
      </Button>

      <Button
        variant="outlined"
        size="large"
        onClick={() => alert("This is a lie. You win a point!")}
      >
        {categories[0].allStatements[1].Statement}
      </Button>

      <Button
        variant="contained"
        size="large"
        onClick={() =>
          alert("This is a true statement. The computer wins a point!")
        }
      >
        {categories[0].allStatements[2].Statement}
      </Button>

      {instruction}
    </Stack>
  );
}

export default App;
