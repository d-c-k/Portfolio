class Interface{
    constructor(){
        this.setOn = 0;
        this.menuOn = 0;
    }

    createHeader(){
        let title = new TextRunner("Portfolio ─ Daniel Koefoed", "title");
        title.runner();
    }

    creatSettingsMenu(){
        let underTitle = document.getElementById("under_title");
        let setDrop = document.getElementById("set_drop");

        document.getElementById("settings_btn").addEventListener("click", () =>{
            if (this.setOn === 0){
                setDrop.style = "display: flex; flex-direction: column; justify-content: space-between;"
            }
            else{
                setDrop.style = "display:none;"
            }

            this.setOn = 1 - this.setOn;

            document.getElementById("menu_drop").style = "display:none"
            this.menuOn = 0;
        });

        document.getElementById("lang_select_sv").addEventListener("click", () =>{
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
            this.mobMenuHeader(text);

            setDrop.style = "display:none;"
            this.setOn = 1 - this.setOn;
        })
        document.getElementById("lang_select_en").addEventListener("click", () =>{
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
            this.mobMenuHeader(text);

            setDrop.style = "display:none;"
            this.setOn = 1 - this.setOn;
        })

        document.getElementById("theme_select_dark").addEventListener("click", () =>{
            document.getElementById("color_theme").setAttribute("href", "css/styles.css");
            document.getElementById("cogs").setAttribute("src", "img/cogs_white.svg");
            document.getElementById("hamb").setAttribute("src", "img/hamb_white.svg");

            setDrop.style = "display:none;"
            this.setOn = 1 - this.setOn;
        })
        document.getElementById("theme_select_light").addEventListener("click", () =>{
            document.getElementById("color_theme").setAttribute("href", "css/styles-light.css");
            document.getElementById("cogs").setAttribute("src", "img/cogs_dark.svg");
            document.getElementById("hamb").setAttribute("src", "img/hamb_dark.svg");

            setDrop.style = "display:none;"
            this.setOn = 1 - this.setOn;
        })
    }

    createMenu(){
        let innerContent = document.getElementById("inner_content");

        let menuDiv = document.createElement("div");
        menuDiv.id = "menu_div";

        //----------"About"----------//

        let about = document.createElement("button");
        about.type = "button";
        about.className = "menu_btn";
        about.innerHTML = "<span class='lang_opt' id='desk_about'>[Om mig]</span>";

        about.addEventListener("click", () =>{
            document.getElementById("main_about").style = "display: block;"
            document.getElementById("main_works").style = "display: none;"
            document.getElementById("main_contact").style = "display: none;"
        })

        //----------"Selected works"----------//

        let works = document.createElement("button");
        works.type = "button";
        works.className = "menu_btn";
        works.innerHTML = "<span class='lang_opt' id='desk_works'>[Utvalda arbeten]</span>";

        works.addEventListener("click", () =>{
            document.getElementById("main_about").style = "display: none;"
            document.getElementById("main_works").style = "display: block;"
            document.getElementById("main_contact").style = "display: none;"

            this.slideShow();
        })

        //----------"Contact"----------//

        let contact = document.createElement("button");
        contact.type = "button";
        contact.className = "menu_btn";
        contact.innerHTML = "<span class='lang_opt' id='desk_contact'>[Kontakt]</span>";

        contact.addEventListener("click", () =>{
            document.getElementById("main_about").style = "display: none;"
            document.getElementById("main_works").style = "display: none;"
            document.getElementById("main_contact").style = "display: block;"
        })

        //----------------------------//
        
        menuDiv.appendChild(about);

        menuDiv.appendChild(works);

        menuDiv.appendChild(contact);

        innerContent.prepend(menuDiv);
    }

    mobMenuHeader(text){
        
        let underTitle = new TextRunner(text, "under_title");
        underTitle.runner();
    }

    createMenuMobile(){
        let underTitle = document.getElementById("under_title");
        let menuDrop = document.getElementById("menu_drop");

        document.getElementById("mob_menu_btn").addEventListener("click", () =>{
            if (this.menuOn === 0){
                menuDrop.style = "display: flex; flex-direction: column; justify-content: space-between;"
            }
            else{
                menuDrop.style = "display:none;"
            }
            this.menuOn = 1 - this.menuOn;

            document.getElementById("set_drop").style = "display:none;"        
        })

        let mobAbout = document.getElementById("mob_about_btn");
        mobAbout.addEventListener("click", () =>{
            underTitle.innerHTML = "";
            let text = "└── " + document.getElementById("mob_about").innerHTML;
            this.mobMenuHeader(text);

            document.getElementById("main_about").style = "display: block;"
            document.getElementById("main_works").style = "display: none;"
            document.getElementById("main_contact").style = "display: none;"

            menuDrop.style = "display:none;"
            this.menuOn = 1 - this.menuOn;
        })

        let mobWorks = document.getElementById("mob_works_btn");
        mobWorks.addEventListener("click", () =>{
            underTitle.innerHTML = "";
            let text = "└── " + document.getElementById("mob_works").innerHTML;
            this.mobMenuHeader(text);

            document.getElementById("main_about").style = "display: none;"
            document.getElementById("main_works").style = "display: block;"
            document.getElementById("main_contact").style = "display: none;"

            this.slideShow();

            menuDrop.style = "display:none;"
            this.menuOn = 1 - this.menuOn;
        })

        let mobContact = document.getElementById("mob_contact_btn");
        mobContact.addEventListener("click", () =>{
            underTitle.innerHTML = "";
            let text = "└── " + document.getElementById("mob_contact").innerHTML;
            this.mobMenuHeader(text);

            document.getElementById("main_about").style = "display: none;"
            document.getElementById("main_works").style = "display: none;"
            document.getElementById("main_contact").style = "display: block;"

            menuDrop.style = "display:none;"
            this.menuOn = 1 - this.menuOn;
        })
    }

    slideShow(){
        
        let slideQuiz = document.getElementById("quiz");
        let slideOldPort = document.getElementById("old_portfolio");
        let slidePlaceholder = document.getElementById("placeholder");
        let slideItems = [slideQuiz, slideOldPort, slidePlaceholder];

        let prev = document.getElementById("prev_btn");
        let next = document.getElementById("next_btn");
        
        let dot0 = document.getElementById("dot0");
        let dot1 = document.getElementById("dot1");
        let dot2 = document.getElementById("dot2");

        let dots = [dot0, dot1, dot2];

        let i = 0;
        slideItems[i].style = "display:grid;";
        dots[i].className = "dot_focus";

        console.log("1: " + i);

        prev.addEventListener("click", () =>{
            if (i != 0){
                slideItems[i].style = "display:none;";
                dots[i].className = "dot";
                i--;
            }
            else{
                slideItems[i].style = "display:none;";
                dots[i].className = "dot";
                i = slideItems.length - 1;
            }
            
            slideItems[i].style = "display:grid;";
            dots[i].className = "dot_focus";
            console.log("prev: " + i);
        });

        next.addEventListener("click", () =>{
            if (i != slideItems.length - 1){
                slideItems[i].style = "display:none;";
                dots[i].className = "dot";
                i++;
            }
            else{
                slideItems[i].style = "display:none;";
                dots[i].className = "dot";
                i = 0;
            }

            slideItems[i].style = "display:grid;";
            dots[i].className = "dot_focus";
            console.log("next: " + i);
        });        
    }
}