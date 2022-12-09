const instructions = (
  <div>
    <h1>
      <center>Welcome to </center>
      <center>TWO TRUTHS AND A LIE!</center>
    </h1>

    <p>
      {" "}
      Below are three statements. Two of them are lies and one of them is true.
    </p>

    <p>
      {" "}
      Correctly pick the lie and you win a point! If you pick a truth, the
      computer wins a point.
    </p>

    <p>Best two out of three wins. Can you beat the computer?</p>

    <p> No Googling on this! Make sure you test your own knowledge.</p>
  </div>
);

const messages = {
  win: "You got a point! Good job!",
  lose: "The computer won a point! Better luck next time!",
  instruct: instructions,
};

export default messages;
