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
  //const [quit, setQuit] = useState(false);

  const resetButton = () => {
    setHumanScore(0);
    setComputerScore(0);
    setQuestionNum(0);
    unGrayOut();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleNextRound = () => {
    setOpen(false); //closes the dialog
    unGrayOut();

    if (questionNum === 8) {
      setQuestionNum(0);
    } else {
      setQuestionNum(questionNum + 1);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const grayOut = () => {
    setButtonState(true);
  };

  const unGrayOut = () => {
    setButtonState(false);
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
      setOpen(true);
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

        <Button
          variant="text"
          size="medium"
          onClick={() => {
            resetButton();
          }}
        >
          Click here to reset. Your entire progress will be lost.
        </Button>
      </Stack>

      <Stack spacing={5} direction="column" className="App">
        {buttonState && (
          <Button variant="outlined" onClick={handleClickOpen}>
            That was the end of the round! Click here to find out the results.
          </Button>
        )}
        <Dialog
          open={open}
          onClose={() => {
            handleClose();
          }}
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You: {HumanScore} Computer: {ComputerScore}
              {HumanScore > ComputerScore && <div>You won!</div>}
              <p></p>
              {HumanScore < ComputerScore && <div>You lost!</div>}
              <p>Would you like to play again?</p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleNextRound}>Next Round</Button>
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
