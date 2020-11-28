class Animation{
    constructor(){
        this.strings = [//the strings that makes up the ASCII-animations, using $ as a line-break character 
            "MMMMMMMMMMMMMMMMMMMM$MMMMMMMMMM////////MM$IMMM------------//MI$IMMM---MMM////////MI$’MMM---MMM///////MM’$-MMM------------/MM-$-MMMMMMMMM///---/MM-$-MMMI--MMM///--//MM-$-MMMI---``´´---//MI-$-IMMMMma...-<////MI-$--MMMMMMMM////bBMM--$---¨¨¨”PMMMMP””¨¨¨--$--------------------$-------HTML5--------",
            "MMMMMMMMMMMMMMMMMMMM$MMMMMMMMMM////////MM$IMMM------------//MI$IMMMMMM>’------z//MI$’MMMP”-----.</////M’$-MMMI-----------//M-$-MMMMMMMMM///---//M-$-MMMI--MMM///---/IM-$-MMMI---``´´---//MI-$-IMMMMma...-<////MI-$--MMMMMMMM////bBMM--$---¨¨¨”PMMMMP””¨¨¨--$--------------------$--------CSS3--------",
            "MMMMMMMMMMMMMMMMMMMM$MMMMMMMMMM////////MM$IMMMMMM--M/------/MI$IMMMMMM--M/--zzzz/MI$’MMMMMM--M/--/////M’$-MMMMMM--M/--^^--/M-$-MMMMMM--M/-----/IM-$-MMMMMM--M////--/IM-$-MM------M/”----/MI-$-IMMMm.--M/---<//MI-$--MMMMMMMM////bBMM--$---¨¨¨”PMMMMP””¨¨¨--$--------------------$-----JAVASCRIPT-----"
        ]
        this.i = 0;
    }

    animationCycle(){      
        //looping thru the "this.strings"-array and prints out a new string every 7 seconds

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
