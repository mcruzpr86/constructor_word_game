function Letter(char) {
    this.char = char;
    this.guessedWord = false

    //method
    this.showBlanks = function () {
        if (this.guessedWord) {
            return this.char
        } else {
            return "_ "
        }

    }
    this.checkGuess = function (userGuess) {
        if (userGuess === this.char) {
            this.guessedWord = true
        }
    }
}

//create method that checks letter if correct

module.exports = Letter;