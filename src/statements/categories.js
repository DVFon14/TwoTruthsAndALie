const categories = [
  {
    Name: "Us Constitution",
    allStatements: [
      {
        Statement:
          "Freedom to peacefully assemble is a right written in the U.S. Constitution",
        isTrue: true,
      },
      {
        Statement: "Thomas Jefferson signed the U.S. Constitution",
        isTrue: false,
      },
      {
        Statement: "The U.S Constitution was written on parchment",
        isTrue: true,
      },
    ],
  },
  {
    Name: "Thomas Edison",
    allStatements: [
      { Statement: "Edison invented the lightbulb.", isTrue: false },
      {
        Statement: "Edison and Nikola Tesla were contemporaries",
        isTrue: true,
      },
      { Statement: "Edison was a telegraph operator", isTrue: true },
    ],
  },
  {
    Name: "Pompeii and Mount Vesuvius",
    allStatements: [
      {
        Statement:
          "It took over 1600 years for the city of Pompeii to be rediscovered",
        isTrue: true,
      },
      {
        Statement:
          "Pompeii had a severe earthquake a few years before Mount Vesuvius erupted",
        isTrue: true,
      },
      {
        Statement:
          "Mount Vesuvius has erupted 9 times since it destroyed the city of Pompeii",
        isTrue: false,
      },
    ],
  },
  {
    Name: "Hummingbirds",
    allStatements: [
      {
        Statement: "Hummingbirds sip nectar through their bills like a straw",
        isTrue: false,
      },
      {
        Statement: "Hummingbirds are the only birds that can sustain hovering",
        isTrue: true,
      },
      { Statement: "Frogs eat hummingbirds ", isTrue: true },
    ],
  },
  {
    Name: "U.S Secretary of State, Alexander Hamilton",
    allStatements: [
      {
        Statement:
          "The Speaker of the House was the one to discover Hamilton was paying off his mistress' husband",
        isTrue: true,
      },
      {
        Statement: " Hamilton had only sisters-in-laws, no brothers-in-laws",
        isTrue: false,
      },
      { Statement: "Hamilton bought and sold slaves", isTrue: true },
    ],
  },
  {
    Name: "Isaac Newton",
    allStatements: [
      { Statement: "Newton was a knight ", isTrue: true },
      { Statement: "Newton studied alchemy", isTrue: true },
      { Statement: "Newton was an atheist", isTrue: false },
    ],
  },
  {
    Name: "Math History",
    allStatements: [
      {
        Statement:
          "The first civilization to introduce formal proofs into mathematics were the ancient Greeks",
        isTrue: true,
      },
      {
        Statement:
          "The first recorded appearance of the number zero was in the 200's B.C",
        isTrue: false,
      },
      {
        Statement:
          "The Babylonians used a base of 60 for their numerical system (rather than our base of 10",
        isTrue: true,
      },
    ],
  },
  {
    Name: "Mount Everest",
    allStatements: [
      {
        Statement:
          "From summit to peak, Mt Everest is the tallest known mountain in the world",
        isTrue: false,
      },
      {
        Statement: "Mount Everest grows about 44 millimeters every year",
        isTrue: true,
      },
      {
        Statement:
          "The record for the most amount of times a person has climbed Everest is over 20",
        isTrue: true,
      },
    ],
  },
  {
    Name: "Lead pencils",
    allStatements: [
      {
        Statement: "The lead in lead pencils is made from lead",
        isTrue: false,
      },
      {
        Statement: "The lead in lead pencils is made from graphite",
        isTrue: true,
      },
      {
        Statement: "The lead in lead pencils is made from carbon",
        isTrue: true,
      },
    ],
  },
];

// const pointHandler = () => {
//   if (categories[0].allStatements[1].isTrue === true) {
//     alert(
//       `This is a true statement. The computer wins a point! Its score is ${ComputerScore}`
//     );
//     setComputerScore(ComputerScore + 1);
//   } else if (categories[0].allStatements[0].isTrue === false) {
//     alert(
//       `This is a false statement. You win a point! Your score is ${HumanScore}`
//     );
//     setHumanScore(HumanScore + 1);
//   }
// };

// pointHandler();

export default categories;
