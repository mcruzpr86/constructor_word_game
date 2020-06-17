var letter = require("./Letter")
var inquirer = require('inquirer');
var myWord = new letter("hey")

myWord.showBlanks()

//wrap in function to call it
inquirer
    .prompt([
        {
            type: "input",
            name: "firstname",
            message: "Who are you???"
        }
    ])

    .then(function (answers){
        console.log(answers.name)
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });

    //create array wit 3 words. 
    //randomly pick one
    //create new constructor with random word
    