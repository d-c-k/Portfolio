class Translator{
    constructor(langCode= "sv"){
        this.langCode = langCode;
    }

    translate(){
        document.documentElement.setAttribute("lang", this.langCode);

        let texts = document.getElementsByClassName("lang_opt")
        console.log(texts);

        for (let i = 0; i < texts.length; i++){
            if (this.langCode == "sv"){
                texts[i].innerHTML = translations[i].sv;
            }
            if (this.langCode == "en"){
                texts[i].innerHTML = translations[i].en;
            }
        }
        
    }
}

let translations = [
    {//0
        sv: "[Om mig]",
        en: "[About]"
    },    
    {//1
        sv: "[Utvalda arbeten]",
        en: "[Selected works]"
    },
    {//2
        sv: "[Kontakt]",
        en: "[Contact]"
    },
    {//3
        sv: "Om mig",
        en: "About",
    },
    {//4
        sv: "Utvalda arbeten",
        en: "Selected works"
    },
    {//5
        sv: "Kontakt",
        en: "Contact"
    },
    {//6
        sv: "Om mig på svenska.",
        en: "About me in english."
    },
    {//7
        sv: "Quiz med frågor hämtade med API",
        en: "Quiz with questions from API"
    },
    {//8
        sv: ">> Gå till >>",
        en: ">> Go to >>"
    },
    {//9
        sv: "Min tidigare portfolio.",
        en: "My previous portfolio."
    },
    {//10
        sv: ">> Gå till >>",
        en: ">> Go to >>"
    },
    {//11
        sv: "Placeholder",
        en: "Placeholder"
    },
    {//12
        sv: ">> Gå till >>",
        en: ">> Go to >>"
    }
]