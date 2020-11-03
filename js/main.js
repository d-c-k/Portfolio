document.addEventListener("DOMContentLoaded", function(){
    
    // //---language test---//
    // let lang = ["SV", "EN"];
    // let i = 0;
    // let selectedLang = "";
    // //------------------//
    
    let interface = new Interface();
    interface.createHeader();
    interface.createMenu();

    // document.getElementById("lang_select").addEventListener("click", function(){      
        
    //     i = 1 - i;
    //     selectedLang = lang[i];
    //     console.log(i);
    //     console.log(lang[i]);
    //     console.log(selectedLang);
        
    //     document.getElementById("lang_select").innerHTML = lang[i];
    // })
    document.getElementById("lang_select_sv").addEventListener("click", function(){
        let translator = new Translator("sv");
        translator.translate();
    })
    document.getElementById("lang_select_en").addEventListener("click", function(){
        let translator = new Translator("en");
        translator.translate();
    })

    document.getElementById("theme_select_light").addEventListener("click", function(){
        document.getElementById("color_theme").setAttribute("href", "css/styles-light.css");
        document.getElementById("cogs").setAttribute("src", "img/cogs_dark.svg");
    })
    document.getElementById("theme_select_dark").addEventListener("click", function(){
        document.getElementById("color_theme").setAttribute("href", "css/styles.css");
        document.getElementById("cogs").setAttribute("src", "img/cogs_white.svg");
    })
    
    
})