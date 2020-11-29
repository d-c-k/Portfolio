class Translator{
    constructor(langCode= "sv"){
        this.langCode = langCode;
    }

    translate(){
        /*the method that switches out <span>-tags marked "lang_opt" to the corresponding translation in the "translations"-objekt
          also changes the "lang"-attribute in the <html>-tag */

        document.documentElement.setAttribute("lang", this.langCode);

        let texts = document.getElementsByClassName("lang_opt")
        //console.log(texts);

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
        sv: "Hej!<br>Jag är en aspirerande fullstack-utvecklare som för närvarande pluggar på Nackademin i Stockholm. Tidigare har jag bland annat studerat förpackningsdesign samt jobbat som formgivare och originalare av trycksaker. Om något här på sidan skulle väcka ditt intresse så tveka inte att höra av dig!<br><br>/Daniel",
        en: "Hello!<br>I'm an aspiring fullstack developer currently studying at Nackademin in Stockholm, Sweden. I've previously studied packaging design and worked as a designer of printed media. If you find anything on this page that sparks your interest, don't hesitate to reach out!<br><br>/Daniel"
    },
    {//7
        sv: "Ljudspelare.<br>En enkel ljuduppspelnings-app med några förinlagda .mp3-filer som spelas upp med en tillhörande .gif som loopas i bakgrunden. Funktioner inkluderar spela/pausa, nästa/förra spår, repeat, volymkontroll samt en spårlista(endast desktop).",
        en: "Audio player.<br>A simple audio playback app with a few preloaded .mp3-files and corresponding .gif-images looping in the background. Functions include play/pause, previous and next track selectors, repeat, volume control and a tracklist(desktop only)"
    },
    {//8
        sv: ">> Gå till >>",
        en: ">> Go to >>"
    },
    {//9
        sv: "Quiz-applikation, skoluppgift.<br>Ett quiz med frågor hämtade via API. Välj om du vill besvara mellan 5 och 10 frågor, markera svarsalternativet eller alternativen du tror stämmer och gå vidare till nästa fråga. Om du ångrar ett svar kan du backa så långt du vill innan du väljer att låsa och gå vidare. På resultatsidan visas din totala poäng, varje fråga skrivs ut i en ruta med ditt svar och eventuellt rätt alternativ om det du svarade skulle vara fel.",
        en: "Quiz application, schoolassignment.<br>A quiz with questions fetched via an API. Choose if you want to answer between 5 and 10 questions, select the alternative or alternatives you belive is correct and move on to the next question. If you wish to change an answer on a previous question you may go back as far as you like before locking your solution. On the result screen your total score is shown, every question is printed with your selected answer and possible correct answers if what you chose happend to be incorrect."
    },
    {//10
        sv: ">> Gå till >>",
        en: ">> Go to >>"
    },
    {//11
        sv: "Min förra portfolio.<br>Ska ersättas så snart som möjligt.",
        en: "My previous portfolio.<br>To be replaced ASAP."
    },
    {//12
        sv: ">> Gå till >>",
        en: ">> Go to >>"
    }    
]