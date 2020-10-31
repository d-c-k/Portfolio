class Interface{
    constructor(){
        //this.lang = lang;
    }

    createHeader(lang = "SV"){
        document.getElementById("rubrik").innerHTML = "";
        
        let swe = "test Svenska";
        let eng = "test Engelska";
        let text = "";
        if (lang == "SV"){
            text = swe;
        }else if (lang == "EN"){
            text = eng;
        }
            
        // let rubrik = new TextRunner("Portfolio Daniel Koefoed", "rubrik");
        let rubrik = new TextRunner(text, "rubrik");
        rubrik.runner();
    }
}