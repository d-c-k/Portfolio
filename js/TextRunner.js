class TextRunner{
    constructor(string = "", node = "", timer = 50){
        this.string = string;
        this.length = this.string.length;
        this.node = node;
        this.timer = timer;
        this.i = 0;
    }

    runner(){
        if (this.i < this.length){
            document.getElementById(this.node).innerHTML += this.string.charAt(this.i);
            this.i++;
            setTimeout(this.runner.bind(this), this.timer);
        }  
    }
}