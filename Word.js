var Letter = require("./Letter.js")

function Word(currentWord) {
    this.currentWord = currentWord
    this.newLetter = currentWord.split('').map(function (val) {
        return new Letter(val)
    })
}
let test = new Word('Marvel')
console.log(test.newLetter)