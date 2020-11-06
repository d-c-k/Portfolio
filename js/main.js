document.addEventListener("DOMContentLoaded", function(){
        
    let interface = new Interface();
    interface.createHeader();
    interface.createMenu();    

    let underTitle = document.getElementById("under_title");

    //----------Settings----------//
    let setDrop = document.getElementById("set_drop");
    let setOn = 0;

    document.getElementById("settings_btn").addEventListener("click", function(){
        if (setOn === 0){
            setDrop.style = "display: flex; flex-direction: column; justify-content: space-between;"
        }
        else{
            setDrop.style = "display:none;"
        }
        setOn = 1 - setOn;

        menuDrop.style = "display:none"
        menuOn = 0;
    })

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

        setDrop.style = "display:none;"
        setOn = 1 - setOn;
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

        setDrop.style = "display:none;"
        setOn = 1 - setOn;
    })

    document.getElementById("theme_select_dark").addEventListener("click", function(){
        document.getElementById("color_theme").setAttribute("href", "css/styles.css");
        document.getElementById("cogs").setAttribute("src", "img/cogs_white.svg");
        document.getElementById("hamb").setAttribute("src", "img/hamb_white.svg");

        setDrop.style = "display:none;"
        setOn = 1 - setOn;
    })
    document.getElementById("theme_select_light").addEventListener("click", function(){
        document.getElementById("color_theme").setAttribute("href", "css/styles-light.css");
        document.getElementById("cogs").setAttribute("src", "img/cogs_dark.svg");
        document.getElementById("hamb").setAttribute("src", "img/hamb_dark.svg");

        setDrop.style = "display:none;"
        setOn = 1 - setOn;
    })
    
    
    //----------Mobile menu----------//    

    let menuDrop = document.getElementById("menu_drop");
    let menuOn = 0;

    document.getElementById("mob_menu_btn").addEventListener("click", function(e){
        if (menuOn === 0){
            menuDrop.style = "display: flex; flex-direction: column; justify-content: space-between;"
        }
        else{
            menuDrop.style = "display:none;"
        }
        menuOn = 1 - menuOn;

        setDrop.style = "display:none;"        
        setOn = 0;
    })

    let mobAbout = document.getElementById("mob_about_btn");
    mobAbout.addEventListener("click", function(){
        underTitle.innerHTML = "";
        let text = "└── " + document.getElementById("mob_about").innerHTML;
        interface.mobMenuHeader(text);

        document.getElementById("main_about").style = "display: block;"
        document.getElementById("main_works").style = "display: none;"
        document.getElementById("main_contact").style = "display: none;"

        menuDrop.style = "display:none;"
        menuOn = 1 - menuOn;
    })

    let mobWorks = document.getElementById("mob_works_btn");
    mobWorks.addEventListener("click", function(){
        underTitle.innerHTML = "";
        let text = "└── " + document.getElementById("mob_works").innerHTML;
        interface.mobMenuHeader(text);

        document.getElementById("main_about").style = "display: none;"
        document.getElementById("main_works").style = "display: block;"
        document.getElementById("main_contact").style = "display: none;"

        menuDrop.style = "display:none;"
        menuOn = 1 - menuOn;
    })

    let mobContact = document.getElementById("mob_contact_btn");
    mobContact.addEventListener("click", function(){
        underTitle.innerHTML = "";
        let text = "└── " + document.getElementById("mob_contact").innerHTML;
        interface.mobMenuHeader(text);

        document.getElementById("main_about").style = "display: none;"
        document.getElementById("main_works").style = "display: none;"
        document.getElementById("main_contact").style = "display: block;"

        menuDrop.style = "display:none;"
        menuOn = 1 - menuOn;
    })
})