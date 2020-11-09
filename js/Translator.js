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
    {
        sv: "[Om mig]",
        en: "[About]"
    },
    {
        sv: "Jag heter Daniel.",
        en: "My name is Daniel."
    },
    {
        sv: "[Utvalda arbeten]",
        en: "[Selected works]"
    },
    {
        sv: "[Kontakt]",
        en: "[Contact]"
    },
    {
        sv: "Om mig",
        en: "About",
    },
    {
        sv: "Utvalda arbeten",
        en: "Selected works"
    },
    {
        sv: "Kontakt",
        en: "Contact"
    },
    {
        sv: "tmp SVENSKA",
        en: "tmp ENGELSKA"
    },
    {
        sv: "tmp SVENSKA",
        en: "tmp ENGELSKA"
    },
    {
        sv: "Gå till",
        en: "Go to"
    }
]