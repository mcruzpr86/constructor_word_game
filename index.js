var letter = require("./Letter");
var inquirer = require("inquirer");
var Word = require("./Word");

let test = new Word("Marvel");
//console.log(test.newLetter)
console.log(test.displayWord());

//wrap in function to call it

function start() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "userGuess",
        message: "Guess a letter",
      },
    ])

    .then(function (answers) {
      console.log(answers);
      console.log(test.checkGuess(answers.userGuess));
      console.log(test.displayWord());
      start();
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}

start()
//create array wit 3 words.
//randomly pick one
//create new constructor with random word
