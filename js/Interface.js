class Interface{
    constructor(){
    }

    createHeader(){
        let title = new TextRunner("Portfolio - Daniel Koefoed", "title");
        title.runner();
    }

    createMenu(){
        let innerContent = document.getElementById("inner_content");

        let menuDiv = document.createElement("div");
        menuDiv.id = "menu_div";

        let about = document.createElement("button");
        about.type = "button";
        about.className = "menu_btn";
        about.innerHTML = "<span class='lang_opt'>[Om mig]</span>";

        let aboutContent = document.createElement("p");
        // aboutContent.id = "test";
        // let test = new TextRunner("<span class='lang_opt'>Jag heter Daniel.</span>", "test");
        // test.runner();
        aboutContent.className = "menu_content";
        aboutContent.innerHTML = "<span class='lang_opt'>Jag heter Daniel.</span>";

        about.addEventListener("click", function(){
            if (aboutContent.style.display === "none"){
                aboutContent.style.display = "block";
            }
            else{
                aboutContent.style.display = "none";
            }
        })
        
        menuDiv.appendChild(about);
        menuDiv.appendChild(aboutContent);

        innerContent.prepend(menuDiv);
    }
}