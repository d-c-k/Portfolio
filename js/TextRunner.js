class TextRunner{
    constructor(string = "", node = ""){
        this.string = string;
        this.length = this.string.length;
        this.node = node;
        this.i = 0;
    }

    runner(){
        if (this.i < this.length){
            document.getElementById(this.node).innerHTML += this.string.charAt(this.i);
            this.i++;
            setTimeout(this.runner.bind(this), 100);
        }  
    }
}