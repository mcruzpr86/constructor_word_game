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
        console.log('checking')
        console.log(char)
        console.log('guess inside letter constructor',userGuess)
        if (userGuess.toLowerCase() === this.char.toLowerCase()) {
            this.guessedWord = true
        }
    }
}

//create method that checks letter if correct

module.exports = Letter;