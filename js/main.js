document.addEventListener("DOMContentLoaded", function(){
        
    let interface = new Interface();
    interface.createHeader();
    interface.createMenu();    

    let underTitle = document.getElementById("under_title");

    //----------Settings----------//

    document.getElementById("lang_select_sv").addEventListener("click", function(){
        let translator = new Translator("sv");
        translator.translate();

        let text = "";
        if (underTitle.innerHTML === "└── " + translations[4].en || underTitle.innerHTML === "└── " + translations[4].sv){
            text = "└── " + translations[4].sv;
        }
        if (underTitle.innerHTML === "└── " + translations[5].en || underTitle.innerHTML === "└── " + translations[5].sv){
            text = "└── " + translations[5].sv;
        }
        if (underTitle.innerHTML === "└── " + translations[6].en || underTitle.innerHTML === "└── " + translations[6].sv){
            text = "└── " + translations[6].sv;
        }
        underTitle.innerHTML = "";
        interface.mobMenuHeader(text);
    })
    document.getElementById("lang_select_en").addEventListener("click", function(){
        let translator = new Translator("en");
        translator.translate();

        let text = "";
        if (underTitle.innerHTML === "└── " + translations[4].sv || underTitle.innerHTML === "└── " + translations[4].en){
            text = "└── " + translations[4].en;
        }
        if (underTitle.innerHTML === "└── " + translations[5].sv || underTitle.innerHTML === "└── " + translations[5].en){
            text = "└── " + translations[5].en;
        }
        if (underTitle.innerHTML === "└── " + translations[6].sv || underTitle.innerHTML === "└── " + translations[6].en){
            text = "└── " + translations[6].en;
        }
        underTitle.innerHTML = "";
        interface.mobMenuHeader(text);
    })

    document.getElementById("theme_select_light").addEventListener("click", function(){
        document.getElementById("color_theme").setAttribute("href", "css/styles-light.css");
        document.getElementById("cogs").setAttribute("src", "img/cogs_dark.svg");
        document.getElementById("hamb").setAttribute("src", "img/hamb_dark.svg");
    })
    document.getElementById("theme_select_dark").addEventListener("click", function(){
        document.getElementById("color_theme").setAttribute("href", "css/styles.css");
        document.getElementById("cogs").setAttribute("src", "img/cogs_white.svg");
        document.getElementById("hamb").setAttribute("src", "img/hamb_white.svg");
    })
    
    //----------Mobile menu----------//    

    let mobAbout = document.getElementById("mob_about_btn");
    mobAbout.addEventListener("click", function(){
        underTitle.innerHTML = "";
        let text = "└── " + document.getElementById("mob_about").innerHTML;
        interface.mobMenuHeader(text);

        document.getElementById("main_about").style = "display: block;"
        document.getElementById("main_works").style = "display: none;"
        document.getElementById("main_contact").style = "display: none;"
    })

    let mobWorks = document.getElementById("mob_works_btn");
    mobWorks.addEventListener("click", function(){
        underTitle.innerHTML = "";
        let text = "└── " + document.getElementById("mob_works").innerHTML;
        interface.mobMenuHeader(text);

        document.getElementById("main_about").style = "display: none;"
        document.getElementById("main_works").style = "display: block;"
        document.getElementById("main_contact").style = "display: none;"
    })

    let mobContact = document.getElementById("mob_contact_btn");
    mobContact.addEventListener("click", function(){
        underTitle.innerHTML = "";
        let text = "└── " + document.getElementById("mob_contact").innerHTML;
        interface.mobMenuHeader(text);

        document.getElementById("main_about").style = "display: none;"
        document.getElementById("main_works").style = "display: none;"
        document.getElementById("main_contact").style = "display: block;"
    })
})