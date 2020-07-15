var Letter = require("./Letter.js")

function Word(currentWord) {
    this.currentWord = currentWord
    this.newLetter = currentWord.split('').map(function (val) {
        return new Letter(val)
    })
    this.displayWord = function () {
        this.currentWord = []
        for (let i = 0; i < this.newLetter.length; i++) {
            //this.wordArr.push(this.newLetter[i].guessed())
            this.currentWord.push(this.newLetter[i].showBlanks())

        }
        //console.log(this.newLetter)

        return this.currentWord.join(" ")
    }

    this.checkGuess = function(userGuess) {
        console.log('userguess', userGuess)
        this.newLetter[0].checkGuess()
        console.log(this.newLetter)
        for (let i = 0; i < this.newLetter.length; i++) {
            this.newLetter[i].checkGuess(userGuess)
            
        }
        console.log(this.newLetter)
        return this.displayWord()
    }

    
}

module.exports = Word

