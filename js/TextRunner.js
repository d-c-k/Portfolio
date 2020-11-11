class TextRunner{
    constructor(string = "", node = "", timer = 30){
        this.string = string;
        this.node = node;
        this.timer = timer;
        this.i = 0;
        this.newLine = "$";
    }

    runner(){
        if (this.i < this.string.length){
            document.getElementById(this.node).innerHTML += this.string.charAt(this.i) == this.newLine ? "<br>" : this.string.charAt(this.i);
            this.i++;
            setTimeout(this.runner.bind(this), this.timer);
        }
    }
}