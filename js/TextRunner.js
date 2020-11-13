class TextRunner{
    constructor(string = "", node = "", timer = 30){
        this.string = string;
        this.node = node;
        this.timer = timer;
        this.i = 0;
        this.newLine = "$";
    }

    runner(){
        //the method that prints out one character at a time, used for titles and the landingpage-animation

        if (this.i < this.string.length){
            document.getElementById(this.node).innerHTML += this.string.charAt(this.i) == this.newLine ? "<br>" : this.string.charAt(this.i);
            this.i++;
            setTimeout(this.runner.bind(this), this.timer);
        }
    }
}