class Animation{
    constructor(){
        this.strings = [
            "MMMMMMMMMMMMMMMMMMMM$MMMMMMMMMM////////MM$IMMM------------//MI$IMMM---MMM////////MI$’MMM---MMM///////MM’$-MMM------------/MM-$-MMMMMMMMM///---/MM-$-MMMI--MMM///--//MM-$-MMMI---``´´---//MI-$-IMMMMma...-<////MI-$--MMMMMMMM////bBMM--$---¨¨¨”PMMMMP””¨¨¨--$--------------------$-------HTML5--------",
            "MMMMMMMMMMMMMMMMMMMM$MMMMMMMMMM////////MM$IMMM------------//MI$IMMMMMM>’------z//MI$’MMMP”-----.</////M’$-MMMI-----------//M-$-MMMMMMMMM///---//M-$-MMMI--MMM///---/IM-$-MMMI---``´´---//MI-$-IMMMMma...-<////MI-$--MMMMMMMM////bBMM--$---¨¨¨”PMMMMP””¨¨¨--$--------------------$--------CSS3--------",
            "MMMMMMMMMMMMMMMMMMMM$MMMMMMMMMM////////MM$IMMMMMM--M/------/MI$IMMMMMM--M/--zzzz/MI$’MMMMMM--M/--/////M’$-MMMMMM--M/--^^--/M-$-MMMMMM--M/-----/IM-$-MMMMMM--M////--/IM-$-MM------M/”----/MI-$-IMMMm.--M/---<//MI-$--MMMMMMMM////bBMM--$---¨¨¨”PMMMMP””¨¨¨--$--------------------$-----JAVASCRIPT-----"
        ]
        this.i = 0;
    }

    animationCycle(){      
        let string = this.strings[this.i];  
        let node = document.getElementById("main_animation");
        node.innerHTML = "";

        // if (this.i === 0){
        //     node.style = "color: #CE9178"
        // }
        // if (this.i === 1){
        //     node.style = "color: #569CD6"
        // }
        // if (this.i === 2){
        //     node.style = "color: #D9E577"
        // }

        let textRunner = new TextRunner(string, "main_animation", 10);
        textRunner.runner();

        this.i++;     
        if (this.i > this.strings.length - 1){
            this.i = 0;
        }
        setTimeout(this.animationCycle.bind(this), 7000);
    }
}