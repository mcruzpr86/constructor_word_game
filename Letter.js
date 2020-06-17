module.exports = function (word) {
    this.word = word;
    this.wordArray = this.word.split("")
    console.log(this.wordArray)
    
    //method
    this.showBlanks = function () {
        this.blanks = []
        for (var i = 0; i < this.wordArray.length; i++) {
            this.blanks.push("_ ")

        }
        console.log(this.blanks.join(""))
    }
}

//create method that checks letter if correct