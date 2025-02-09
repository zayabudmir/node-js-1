import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

const q1 = async () => {
  const answers1 = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "цэнхэр өнгөний дундаас ямар өнгө гардаг вэ",
    choices: ["шар", "улаан", "ногоон", "цэнхэр"],
  });

  const spinner1 = createSpinner("Tani hariult shalgagdaj bn ...").start();

  await sleep();
  if (answers1.question_1 == "ногоон") {
    spinner1.success({ text: "hariult zov bn" });
  } else {
    spinner1.error({
      text: "hariult buruu bn",
    });
  }
};

// const q2 = async () => {
//   const answers2 = await inquirer.prompt({
//     name: "question_2",
//     type: "list",
//     message: "МУ-ын үндсэн хууль хэдэн бүлэгтэй вэ?",
//     choices: ["6", "10", "8", "12"],
//   });

//   const spinner2 = createSpinner("Tani hariult shalgagdaj bn ... ").start();

//   await sleep();
//   if (answers2.question_2 == "6") {
//     spinner2.success({ text: "hariult zov bn" });
//   } else {
//     spinner2.error({
//       text: "hariult buruu bn",
//     });
//   }
// };

// const q3 = async () => {
//   const answers3 = await inquirer.prompt({
//     name: "question_3",
//     type: "list",
//     message: "Монгол улс газар нутгаараа дэлхийд хэддүгээрт ордог вэ?",
//     choices: ["20", "17", "18", "19"],
//   });

//   const spinner3 = createSpinner("Tani hariult sjalgaj bn ...").start();

//   await sleep();
//   if (answers3.question_3 == "18") {
//     spinner3.success({ text: "hariult zov bn" });
//   } else {
//     spinner3.error({
//       text: "hariult buruu bn",
//     });
//   }
// };

// const startQuestions = async () => {
//   await q1();
//   await q2();
//   await q3();
// };

// startQuestions();

// import inquirer from "inquirer";
// import { createSpinner } from "nanospinner";
// import figlet from "figlet";
// import {
//   rainbow,
//   vice,
//   fruit,
//   pastel,
//   passion,
//   cristal,
//   instagram,
// } from "gradient-string";

// let score = 0;
// let playerName = "";

// const checkAnswer = async (answer, correctAnswer) => {
//   const spinner = createSpinner("Checking your answer...").start();
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   if (answer === correctAnswer) {
//     spinner.success({ text: "Correct! 🎉" });
//     score++;
//   } else {
//     spinner.error({ text: "Wrong answer! ❌" });
//   }
// };

// const askName = async () => {
//   const { name } = await inquirer.prompt({
//     type: "input",
//     name: "name",
//     message: vice("What is your name?"),
//   });
//   playerName = name;
//   console.log(fruit(`\nHello, ${playerName}! Welcome to the Quiz Game! 🚀\n`));
// };

// const question1 = async () => {
//   const answer1 = await inquirer.prompt({
//     type: "list",
//     name: "q1",
//     message: pastel("Who has won the most total Academy Awards?"),
//     choices: ["Walt Disney", "HPO", "Apple tv", "Sonny"],
//   });
//   await checkAnswer(answer1.q1, "Walt Disney");
// };

// const question2 = async () => {
//   const answer2 = await inquirer.prompt({
//     type: "list",
//     name: "q2",
//     message: cristal("What artist has the most streams on Spotify?"),
//     choices: ["Taylor", "Lana", "Drake", "Anna"],
//   });
//   await checkAnswer(answer2.q2, "Drake");
// };

// const question3 = async () => {
//   const answer3 = await inquirer.prompt({
//     type: "list",
//     name: "q3",
//     message: fruit("What company was originally called Cadabra?"),
//     choices: ["Google", "Amazon", "Uber"],
//   });
//   await checkAnswer(answer3.q3, "Amazon");
// };

// const question4 = async () => {
//   const answer4 = await inquirer.prompt({
//     type: "list",
//     name: "q4",
//     message: fruit("What Netflix show had the most streaming views in 2021?"),
//     choices: ["Dune", "Sranger Things", "Squid Game"],
//   });
//   await checkAnswer(answer4.q4, "Squid Game");
// };

// const question5 = async () => {
//   const answer5 = await inquirer.prompt({
//     type: "list",
//     name: "q5",
//     message: instagram("In which country was Elon Musk born?"),
//     choices: ["South Africa", "USA", "Canada", "Australia"],
//   });
//   await checkAnswer(answer5.q5, "South Africa");
// };

// const question6 = async () => {
//   const answer6 = await inquirer.prompt({
//     type: "list",
//     name: "q6",
//     message: cristal("Which country has won the most World Cups? "),
//     choices: ["Mexico", "Argentina", "Columbia", "Brazil"],
//   });
//   await checkAnswer(answer6.q6, "Brazil");
// };

// const question7 = async () => {
//   const answer7 = await inquirer.prompt({
//     type: "list",
//     name: "q7",
//     message: cristal("How many hearts does an octopus have? "),
//     choices: ["One", "Two", "Three", "Four"],
//   });
//   await checkAnswer(answer7.q7, "Three");
// };

// const question8 = async () => {
//   const answer8 = await inquirer.prompt({
//     type: "list",
//     name: "q8",
//     message: pastel(" New York has 36 different subway lines. "),
//     choices: ["Yes", "No"],
//   });
//   await checkAnswer(answer8.q8, "Yes");
// };

// const question9 = async () => {
//   const answer9 = await inquirer.prompt({
//     type: "list",
//     name: "q9",
//     message: pastel("What animal has the largest brain relative to body size?"),
//     choices: ["Dolphin", "Bird", "Hourse", "Sheep"],
//   });
//   await checkAnswer(answer9.q9, "Walt Disney");
// };

// const question10 = async () => {
//   const answer10 = await inquirer.prompt({
//     type: "list",
//     name: "q10",
//     message: pastel("What are Harry’s parents' names?"),
//     choices: [
//       "Lily and James",
//       "Lana and James",
//       "Lily and Jon",
//       "Lana and Mike",
//     ],
//   });
//   await checkAnswer(answer10.q10, "Walt Disney");
// };

// const displayCongrats = () => {
//   const congratsText = score === 3 ? "YOU ACED IT!" : "BETTER LUCK NEXT TIME!";
//   figlet(congratsText, (err, data) => {
//     if (err) {
//       console.log("Something went wrong with figlet...");
//       console.dir(err);
//       return;
//     }
//     console.log(passion(data));
//   });
// };

// const startQuiz = async () => {
//   await askName();

//   await question1();
//   await question2();
//   await question3();
//   await question4();
//   await question5();
//   await question6();
//   await question7();
//   await question8();
//   await question9();
//   await question10();

//   console.log(
//     rainbow.multiline(`\n${playerName}, your final score is: ${score}/3`)
//   );

//   displayCongrats();
// };

// startQuiz();



// console.time('process');
// let count = 0;
// for ()