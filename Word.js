var Letter = require("./Letter.js")

function Word(currentWord) {
    this.currentWord = currentWord
    this.newLetter = currentWord.split('').map(function (val) {
        return new Letter(val)
    })
    this.displayWord = function () {
        this.currentWord = []
        for (let i = 0; i < newLetter.length; i++) {
            this.wordArr.push(this.newLetter[i].guessed())

        }
    }
}

let test = new Word('Marvel')
console.log(test.newLetter)

