class TextRunner{
    constructor(string = ""){
        this.string = string
        this.char = ''
        this.text = document.createTextNode('')
    }

    runner(){
        let i = 0;
        (function print(){
            this.char = this.string[i++];
            this.text.nodeValue += char 
            if (i < this.string.length){
                setTimeout(this.runner, 200)
            }
        })()      
    }
}

// var timePerLetter = 500,
//     newLineCharacter = '|',
//     text = document.createTextNode('');
// document.getElementById('test').appendChild(text);
// function printOut(str) {
//   var i = 0;
//   (function main() {
//     var char = str[i++];
//     text.nodeValue += char == newLineCharacter ? '\n' : char;
//     if(i < str.length)
//       setTimeout(main, timePerLetter);
//   })();
// }
// printOut("HELLO ASDA| SD");

// let x = "Hamster Paj"

// let testX = new TextRunner(x)
// console.log(testX.runner())