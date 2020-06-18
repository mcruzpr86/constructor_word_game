function Letter(char) {
    this.char = char;
    this.characterArray = this.char.split("")
    console.log(this.characterArray)

    //method
    this.showBlanks = function () {
        this.blanks = []
        for (var i = 0; i < this.characterArray.length; i++) {
            this.blanks.push("_ ")

        }
        console.log(this.blanks.join(""))
    }
}

//create method that checks letter if correct


var test = new Letter("test")
console.log(test.word)
module.exports = Letter;