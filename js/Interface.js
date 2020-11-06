class Interface{
    constructor(){
    }

    createHeader(){
        let title = new TextRunner("Portfolio ─ Daniel Koefoed", "title");
        title.runner();
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

        let aboutContent = document.createElement("p");
        aboutContent.className = "menu_content";
        aboutContent.innerHTML = "<span class='lang_opt' id='tmp_about'>Jag heter Daniel.</span>";

        about.addEventListener("click", function(){
            if (aboutContent.style.display === "none"){
                aboutContent.style.display = "block";
            }
            else{
                aboutContent.style.display = "none";
            }
        })

        //----------"Selected works"----------//

        let works = document.createElement("button");
        works.type = "button";
        works.className = "menu_btn";
        works.innerHTML = "<span class='lang_opt' id='desk_works'>[Utvalda arbeten]</span>";

        //----------"Contact"----------//

        let contact = document.createElement("button");
        contact.type = "button";
        contact.className = "menu_btn";
        contact.innerHTML = "<span class='lang_opt' id='desk_contact'>[Kontakt]</span>";

        //----------------------------//
        
        menuDiv.appendChild(about);
        menuDiv.appendChild(aboutContent);

        menuDiv.appendChild(works);

        menuDiv.appendChild(contact);

        innerContent.prepend(menuDiv);
    }

    mobMenuHeader(text){
        
        let underTitle = new TextRunner(text, "under_title");
        underTitle.runner();
    }
}