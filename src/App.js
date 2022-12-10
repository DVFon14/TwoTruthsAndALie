import React, { useState } from "react";
import "./App.css";
import { Stack, Button } from "@mui/material";
import categories from "./statements/categories.js";
import messages from "./statements/messages";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

function App() {
  const [ComputerScore, setComputerScore] = useState(0);
  const [HumanScore, setHumanScore] = useState(0);
  const [questionNum, setQuestionNum] = useState(0);
  const [buttonState, setButtonState] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const grayOut = () => {
    setButtonState(true);
  };

  const pointHandler = (isTrue) => {
    console.log(ComputerScore);
    console.log(HumanScore);
    if (isTrue === true) {
      setComputerScore(ComputerScore + 1);
      alert(`This is a true statement. The computer wins a point!`);
    } else if (isTrue === false) {
      setHumanScore(HumanScore + 1);
      alert(`This is a false statement. You win a point!`);
    }

    if (questionNum === 2 || questionNum === 5 || questionNum === 8) {
      //we need to let them answer questionNum2. AFTER they answer, gray out buttons. Could do by writing just setButtonState(true)
      grayOut();
      //---> set the "buttonState" function as true
      //we need the dialog box to appear
      //---> needs to display who won
      //---> if they click "next round," go to next set of questions -->will this use setQuestionNum(questionNum + 1)?
      //---> if they click "quit," then exit the program
    } else {
      setQuestionNum(questionNum + 1);
    }
  };

  return (
    <div>
      <Stack spacing={5} direction="column" className="App">
        {messages.instruct}
        <Button
          variant="contained"
          size="large"
          disabled={buttonState}
          onClick={() => {
            pointHandler(categories[questionNum].allStatements[0].isTrue);
          }}
        >
          {categories[questionNum].allStatements[0].Statement}
        </Button>
        <Button
          variant="contained"
          size="large"
          disabled={buttonState}
          onClick={() => {
            pointHandler(categories[questionNum].allStatements[1].isTrue);
          }}
        >
          {categories[questionNum].allStatements[1].Statement}
        </Button>
        <Button
          variant="contained"
          size="large"
          disabled={buttonState}
          onClick={() => {
            pointHandler(categories[questionNum].allStatements[2].isTrue);
          }}
        >
          {categories[questionNum].allStatements[2].Statement}
        </Button>
      </Stack>

      <Stack spacing={5} direction="column" className="App">
        {/* <Button variant="outlined" size="medium">
          Click here to go to the next round
        </Button> */}
        <Button variant="outlined" onClick={handleClickOpen}>
          That was the end of the round! Click here to find out the results.
        </Button>
        <Dialog
          open={open}
          onClose={() => {
            handleClose();
          }}
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You: {HumanScore} Computer: {ComputerScore}
              <p>Would you like to play again?</p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Next Round</Button>
            <Button onClick={handleClose} autoFocus>
              Quit
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </div>
  );
}

export default App;
