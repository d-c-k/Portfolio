class Interface{
    constructor(){
        //this.lang = lang;
    }

    createHeader(lang = "SV"){
        //document.getElementById("rubrik").innerHTML = "";
        let title = new TextRunner("Portfolio - Daniel Koefoed", "title");
        title.runner();
    }

    createMenu(){
        // let swe = "test Svenska";
        // let eng = "test Engelska";
        // let text = "";
        // if (lang == "SV"){
        //     text = swe;
        // }else if (lang == "EN"){
        //     text = eng;
        // }
        let innerContent = document.getElementById("inner_content");

    }
}