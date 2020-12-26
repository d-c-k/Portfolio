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

class Animation{
    constructor(){
        this.strings = [
            'mMMMMMMMMMMMMMMMMMMm$MMMMMMMMMMMMMMMMMMMM$MMMMMMMMMMMMMMMMMMMM$MMMMMMMMMMMMMMMMMMMM$MMMMMMMMMMMMMMMMMMMM$MMMMMMMMMMMMMMMMMMMM$MMMMMMMMM--MP----TMM$MMMMMMMMM--M(-(MMMMM$MMMMMMMMM--MML---TMM$MMMMMMMMM--MMMMM)-)M$MMMMML----/ML-----MM$"MMMMMMMMMMMMMMMMMM"$--------------------$-----JAVASCRIPT-----',
            "MMMMMMMMMMMMMMMMMMMM$MMMMMMMMMM////////MM$IMMM------------//MI$IMMM---MMM////////MI$’MMM---MMM///////MM’$-MMM------------/MM-$-MMMMMMMMM///---/MM-$-MMMI--MMM///--//MM-$-MMMI---``´´---//MI-$-IMMMMma...-<////MI-$--MMMMMMMM////bBMM--$---¨¨¨”PMMMMP””¨¨¨--$--------------------$-------HTML5--------",
            "MMMMMMMMMMMMMMMMMMMM$MMMMMMMMMM////////MM$IMMM------------//MI$IMMMMMM>’------z//MI$’MMMP”-----.</////M’$-MMMI-----------//M-$-MMMMMMMMM///---//M-$-MMMI--MMM///---/IM-$-MMMI---``´´---//MI-$-IMMMMma...-<////MI-$--MMMMMMMM////bBMM--$---¨¨¨”PMMMMP””¨¨¨--$--------------------$--------CSS3--------",
            //"MMMMMMMMMMMMMMMMMMMM$MMMMMMMMMM////////MM$IMMMMMM--M/------/MI$IMMMMMM--M/--zzzz/MI$’MMMMMM--M/--/////M’$-MMMMMM--M/--^^--/M-$-MMMMMM--M/-----/IM-$-MMMMMM--M////--/IM-$-MM------M/”----/MI-$-IMMMm.--M/---<//MI-$--MMMMMMMM////bBMM--$---¨¨¨”PMMMMP””¨¨¨--$--------------------$-----JAVASCRIPT-----",
        ]
        this.i = 0;
    }

    animationCycle(){      
        let string = this.strings[this.i];  
        let node = document.getElementById("main_animation");
        node.innerHTML = "";
        
        let textRunner = new TextRunner(string, "main_animation", 10);
        textRunner.runner();

        this.i++;     
        if (this.i > this.strings.length - 1){
            this.i = 0;
        }
        setTimeout(this.animationCycle.bind(this), 7000);
    }

    desktopAnimation(){

        let divs = document.getElementsByClassName("main_animation_desktop");

        for (let i = 0; i < divs.length; i++) {
            let timer = (3800 * i);

            setTimeout(() => {
                let textRunner = new TextRunner(this.strings[i], "da_" + i, 10);
                textRunner.runner();
            }, timer)            
        }
    }
}         

class BlinkingCursor{
    constructor(element){
        this.cursor = document.getElementById(element);
        this.interval;
    }        
       
    startBlink(){
        this.interval = setInterval(()=>{cursor.style.opacity = cursor.style.opacity === '1' ? '0' : '1'}, 500);
    }

    stopBlink(){
        clearInterval(this.interval);
    }
}
