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
        sv: "Quiz-applikation, skoluppgift.<br>Ett quiz med frågor hämtade via API. Välj om du vill besvara mellan 5 och 10 frågor, markera svarsalternativet eller alternativen du tror stämmer och gå vidare till nästa fråga. Om du ångrar ett svar kan du backa så långt du vill innan du väljer att låsa och gå vidare. På resultatsidan visas din totala poäng, varje fråga skrivs ut i en ruta med ditt svar och eventuellt rätt alternativ om det du svarade skulle vara fel.",
        en: "Quiz application, schoolassignment.<br>A quiz with questions fetched via an API. Choose if you want to answer between 5 and 10 questions, select the alternative or alternatives you belive is correct and move on to the next question. If you wish to change an answer on a previous question you may go back as far as you like before locking your solution. On the result screen your total score is shown, every question is printed with your selected answer and possible correct answers if what you chose happend to be incorrect."
    },
    {//8
        sv: ">> Gå till >>",
        en: ">> Go to >>"
    },
    {//9
        sv: "Min förra portfolio.<br>Ska ersättas så snart som möjligt.",
        en: "My previous portfolio.<br>To be replaced ASAP."
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