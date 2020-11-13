class Interface{
    constructor(){
        this.setOn = 0;
        this.menuOn = 0;
        this.slideInit = false;
    }

    createHeader(){
        //calls the "TextRunner" -class to print out the page-title in the header
        let title = new TextRunner("Portfolio ─ Daniel Koefoed", "title");
        title.runner();        

        document.getElementById("title").addEventListener("click", () =>{  
            //displays the landing-page and hides other content when you press the title         
            this.showElements("main_animation", "block");
            document.getElementById("under_title").innerHTML = "";
        })
    }

    aniamtionLoop(){  
        //calls the "Animation"-class to run the ASCII-display on the landing page      
        let animation = new Animation();
        animation.animationCycle();
    }

    createSettingsMenu(){
        //controls the settings-menu
        let underTitle = document.getElementById("under_title");
        let setDrop = document.getElementById("set_drop");

        document.getElementById("settings_btn").addEventListener("click", () =>{
            //hiding menu when button is pressed
            if (this.setOn === 0){
                setDrop.style = "display: flex; flex-direction: column; justify-content: space-between;"
            }
            else{
                setDrop.style = "display:none;"
            }

            this.setOn = 1 - this.setOn;

            document.getElementById("menu_drop").style = "display:none;"
            this.menuOn = 0;
        });

        document.getElementById("lang_select_sv").addEventListener("click", () =>{
            //calls "Translator"-class to switch language to swedish
            let translator = new Translator("sv");
            translator.translate();

            //updates the text for the sub-header titles so that the correct string is printed out again
            let text = "";
            if (underTitle.innerHTML === "└── " + translations[3].en || underTitle.innerHTML === "└── " + translations[3].sv){
                text = "└── " + translations[3].sv;
            }
            if (underTitle.innerHTML === "└── " + translations[4].en || underTitle.innerHTML === "└── " + translations[4].sv){
                text = "└── " + translations[4].sv;
            }
            if (underTitle.innerHTML === "└── " + translations[5].en || underTitle.innerHTML === "└── " + translations[5].sv){
                text = "└── " + translations[5].sv;
            }            
            underTitle.innerHTML = "";
            this.mobMenuHeader(text);

            setDrop.style = "display:none;"
            this.setOn = 1 - this.setOn;
        })
        
        document.getElementById("lang_select_en").addEventListener("click", () =>{
            //calls "Translator"-class to switch language to english
            let translator = new Translator("en");
            translator.translate();

            let text = "";
            if (underTitle.innerHTML === "└── " + translations[3].sv || underTitle.innerHTML === "└── " + translations[3].en){
                text = "└── " + translations[3].en;
            }
            if (underTitle.innerHTML === "└── " + translations[4].sv || underTitle.innerHTML === "└── " + translations[4].en){
                text = "└── " + translations[4].en;
            }
            if (underTitle.innerHTML === "└── " + translations[5].sv || underTitle.innerHTML === "└── " + translations[5].en){
                text = "└── " + translations[5].en;
            }            
            underTitle.innerHTML = "";
            this.mobMenuHeader(text);

            setDrop.style = "display:none;"
            this.setOn = 1 - this.setOn;
        })

        //switch between the two color-schemes by changing stylesheet, also switching svg-files for menu-buttons

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
        //creates the menu-buttons for desktop

        let innerContent = document.getElementById("inner_content");

        let menuDiv = document.createElement("div");
        menuDiv.id = "menu_div";

        //----------"About"----------//

        let about = document.createElement("button");
        about.type = "button";
        about.className = "menu_btn";
        about.innerHTML = "<span class='lang_opt' id='desk_about'>[Om mig]</span>";

        about.addEventListener("click", () =>{
            this.showElements("main_about", "block");
        })

        //----------"Selected works"----------//

        let works = document.createElement("button");
        works.type = "button";
        works.className = "menu_btn";
        works.innerHTML = "<span class='lang_opt' id='desk_works'>[Utvalda arbeten]</span>";

        works.addEventListener("click", () =>{
            this.showElements("main_works", "block");
            if (this.slideInit === false){
                this.slideShow();
                this.slideInit = true;
            }
        })

        //----------"Contact"----------//

        let contact = document.createElement("button");
        contact.type = "button";
        contact.className = "menu_btn";
        contact.innerHTML = "<span class='lang_opt' id='desk_contact'>[Kontakt]</span>";

        contact.addEventListener("click", () =>{
            this.showElements("main_contact", "block");
        })

        //----------------------------//
        
        menuDiv.appendChild(about);

        menuDiv.appendChild(works);

        menuDiv.appendChild(contact);

        innerContent.prepend(menuDiv);
    }

    mobMenuHeader(text){
        //printing the sub-header title
        
        let underTitle = new TextRunner(text, "under_title");
        underTitle.runner();
    }

    createMenuMobile(){
        //functions for the buttons in the "hamburger-menu" on mobile
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

            this.showElements("main_about", "block");

            menuDrop.style = "display:none;"
            this.menuOn = 1 - this.menuOn;
        })

        let mobWorks = document.getElementById("mob_works_btn");
        mobWorks.addEventListener("click", () =>{
            underTitle.innerHTML = "";
            let text = "└── " + document.getElementById("mob_works").innerHTML;
            this.mobMenuHeader(text);

            this.showElements("main_works", "block");

            if (this.slideInit === false){
                this.slideShow();
                this.slideInit = true;
            }

            menuDrop.style = "display:none;"
            this.menuOn = 1 - this.menuOn;
        })

        let mobContact = document.getElementById("mob_contact_btn");
        mobContact.addEventListener("click", () =>{
            underTitle.innerHTML = "";
            let text = "└── " + document.getElementById("mob_contact").innerHTML;
            this.mobMenuHeader(text);

            this.showElements("main_contact", "block");

            menuDrop.style = "display:none;"
            this.menuOn = 1 - this.menuOn;
        })
    }

    slideShow(){
        //the method controlling the carousel

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
        });        
    }    

    showElements(elementId, status){
        //method for showing the chosen elements while hiding the others
        
        document.getElementById("main_animation").style = "display: none;"
        document.getElementById("main_about").style = "display: none;"
        document.getElementById("main_works").style = "display: none;"
        document.getElementById("main_contact").style = "display: none;"

        document.getElementById(elementId).style = "display:" + status;
    }
}