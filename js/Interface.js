class Interface{
    constructor(){
        this.setOn = 0;
        this.menuOn = 0;
        this.menuOpen = false;
        this.slideInit = false;
        this.brightTheme = false;
    }

    createHeader(){
        //calls the "TextRunner" -class to print out the page-title in the header
        let title = new TextRunner("Portfolio ─ Daniel Koefoed", "title");
        title.runner();        

        document.getElementById("title").addEventListener("click", () =>{  
            //displays the landing-page and hides other content when you press the title     
            if (window.innerWidth < 1008){
                this.showElements("main_animation", "block");
                this.menuOpen && this.toggleMenu(this.menuOpen);
            } else{
                this.showElements("desktop_animation_container", "flex");
            } 
            
            document.getElementById("under_title").innerHTML = "";
        })
    }

    aniamtionLoop(){  
        //calls the "Animation"-class to run the ASCII-display on the landing page  
        let animation = new Animation();

        if (window.innerWidth < 1008){
            animation.animationCycle();
        } else{
            animation.desktopAnimation();
        }   
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
        });

        document.getElementById("lang_select").addEventListener("click", () =>{
            if (document.documentElement.lang != "sv"){
                document.getElementById("lang_select").innerHTML = "EN";
                let translator = new Translator("sv");
                translator.translate();

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
            } else {
                document.getElementById("lang_select").innerHTML = "SV";
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
            }            
        })

        document.getElementById("theme_select").addEventListener("click", () =>{
            if (this.brightTheme === true){
                document.getElementById("color_theme").setAttribute("href", "css/styles.css");
                document.getElementById("theme_sel_btn").setAttribute("src", "icons/sun.svg")
                document.getElementById("theme_sel_btn").setAttribute("alt", "Dark theme")
                document.getElementById("cogs").setAttribute("src", "icons/cogs_white.svg");
                document.getElementById("hamb").setAttribute("src", "icons/hamb_white.svg");
                this.brightTheme = false;

                setDrop.style = "display:none;"
                this.setOn = 1 - this.setOn;
            } else {
                document.getElementById("color_theme").setAttribute("href", "css/styles-light.css");
                document.getElementById("theme_sel_btn").setAttribute("src", "icons/moon.svg")
                document.getElementById("theme_sel_btn").setAttribute("alt", "Bright theme")
                document.getElementById("cogs").setAttribute("src", "icons/cogs_dark.svg");
                document.getElementById("hamb").setAttribute("src", "icons/hamb_dark.svg");
                this.brightTheme = true;

                setDrop.style = "display:none;"
                this.setOn = 1 - this.setOn;
            }            
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
            this.showElements("main_about", "grid");
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
            this.showElements("main_contact", "grid");
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
            this.toggleMenu(this.menuOpen)
        })

        let mobAbout = document.getElementById("mob_about_btn");
        mobAbout.addEventListener("click", () =>{
            underTitle.innerHTML = "";
            let text = "└── " + document.getElementById("mob_about").innerHTML;
            this.mobMenuHeader(text);

            this.showElements("main_about", "block");

            this.toggleMenu(this.menuOpen)
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

            this.toggleMenu(this.menuOpen)
        })

        let mobContact = document.getElementById("mob_contact_btn");
        mobContact.addEventListener("click", () =>{
            underTitle.innerHTML = "";
            let text = "└── " + document.getElementById("mob_contact").innerHTML;
            this.mobMenuHeader(text);

            this.showElements("main_contact", "block");

            this.toggleMenu(this.menuOpen)
        })
    }

    slideShow(){
        //the method controlling the carousel     
        
        let slideItems = document.getElementsByClassName("presentation")

        let prev = document.getElementById("prev_btn");
        let next = document.getElementById("next_btn"); 
        
        let dots = document.getElementsByClassName("dot");
        
        let i = 0;
        slideItems[i].style = "display:grid;";
        dots[i].classList.add("dot_focus");

        prev.addEventListener("click", () =>{
            if (i != 0){
                slideItems[i].style = "display:none;";
                dots[i].classList.remove("dot_focus");
                i--;
            }
            else{
                slideItems[i].style = "display:none;";
                dots[i].classList.remove("dot_focus");
                i = slideItems.length - 1;
            }
            
            slideItems[i].style = "display:grid;";
            dots[i].classList.add("dot_focus");
        });

        next.addEventListener("click", () =>{
            if (i != slideItems.length - 1){
                slideItems[i].style = "display:none;";
                dots[i].classList.remove("dot_focus");
                i++;
            }
            else{
                slideItems[i].style = "display:none;";
                dots[i].classList.remove("dot_focus");
                i = 0;
            }

            slideItems[i].style = "display:grid;";
            dots[i].classList.add("dot_focus");
        });
    }    

    showElements(elementId, status){
        //method for showing the chosen elements while hiding the others
        
        document.getElementById("main_animation").style = "display: none;"
        document.getElementById("desktop_animation_container").style = "display:none;"
        document.getElementById("main_about").style = "display: none;"
        document.getElementById("main_works").style = "display: none;"
        document.getElementById("main_contact").style = "display: none;"

        document.getElementById(elementId).style = "display:" + status;
    }

    toggleMenu(isOpen){
        let menuDrop = document.getElementById("menu_drop");

        if(isOpen === false){
            menuDrop.classList.add("dropdown_active");
            if (this.brightTheme === false){
                document.getElementById("hamb").setAttribute("src", "icons/close_white.svg");
            }else{
                document.getElementById("hamb").setAttribute("src", "icons/close_dark.svg");
            }
            this.menuOpen = true;
            this.blinkingCursor("cursor")

            
        }else{
            menuDrop.classList.remove("dropdown_active");
            if (this.brightTheme === false){
                document.getElementById("hamb").setAttribute("src", "icons/hamb_white.svg");
            }else{
                document.getElementById("hamb").setAttribute("src", "icons/hamb_dark.svg");
            }

            //this.blinkingCursor("cursor",false)

            this.menuOpen = false;
            this.blinkingCursor("cursor")
        }        
    }

    blinkingCursor(element){
        let intervalId;
        let visible = true;
        let cursor = document.getElementById(element);

        if (this.menuOpen === true){
            intervalId = setInterval(() => {
                if (visible){
                    cursor.style = "opacity:0;";
                    visible = false;
                }else{
                    cursor.style = "opacity:1;";
                    visible=true;
                }
            },300)
        }else{
            window.clearInterval(intervalId);
        }
        
        
    }
}