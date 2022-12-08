const instructions = (
  <div>
    <h1>
      <center>Welcome to TWO TRUTHS AND A LIE!</center>
    </h1>

    <p>
      {" "}
      Select a given topic, and the computer will generate two truths and a lie
      about the topic you selected.
    </p>

    <p>
      {" "}
      Correctly pick the lie and you win a point! If you pick a truth, the
      computer wins a point.
    </p>

    <p> No Googling on this! Make sure you test your own knowledge.</p>
  </div>
);

const messages = {
  win: "You got a point! Good job!",
  lose: "The computer won a point! Better luck next time!",
  instruct: instructions,
};

export default messages;
